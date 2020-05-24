import importlib.resources as pkg_resources
import json
import logging
from datetime import datetime as dt
from itertools import chain
from functools import reduce
from operator import itemgetter

import requests

from canifly_crawler import static


def get_iso_mapping():
    return json.loads(pkg_resources.read_text(static, "iso3to2Mapping.json"))


def get_data(entry, _type="country"):
    entry = entry.get("attributes")

    def source():
        if (source := entry.get("source")) :
            return source
        return entry.get("sources")

    def country_iso2():
        iso3 = entry.get("iso3")
        mapping = get_iso_mapping()
        try:
            return mapping[iso3]
        except KeyError:
            logging.error(f"Couldn't find iso2 code for {iso3}")
            return iso3

    def airline_name():
        return entry.get("airline").replace(".", "")

    def published():
        raw_date = entry.get("published").strip()
        try:
            date = dt.strptime(raw_date, "%d.%m.%Y")
            return date.strftime("%Y-%m-%d")
        except ValueError:
            return raw_date

    def certification_status():
        return entry.get("optional3")

    def restrictions():
        return entry.get("info")

    def airline_info():
        return entry.get("info")

    def info():
        return entry.get("optional2")

    def parse_data(_type):
        base = {
            "info": info(),
            "updated_at": published(),
            "source": source(),
        }
        if _type == "airline":
            return {**base, "airline": airline_name(), "info": airline_info()}
        else:
            return {
                **base,
                "certification_status": certification_status(),
                "restrictions": restrictions(),
            }

    return {country_iso2(): parse_data(_type)}


def merge_dict_list(dict_list, override_keys=False):
    if override_keys:
        return reduce(lambda a, b: dict(a, **b), dict_list)

    d = {}
    for _dict in dict_list:
        for key in _dict:
            try:
                d[key].append(_dict[key])
            except KeyError:
                d[key] = [_dict[key]]
            d[key] = sorted(
                d[key],
                key=lambda entry: dt.strptime(entry["updated_at"], "%Y-%m-%d"),
                reverse=True,
            )

    return d


def get_airline_data():
    airline_api = "https://services3.arcgis.com/t6lYS2Pmd8iVx1fy/arcgis/rest/services/COVID_Airline_Information_V2/FeatureServer/0/query?f=json&where=info%20%3C%3E%20%27%27%27%27%27%27&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=airline%20asc&outSR=102100&resultOffset=0&resultRecordCount=2500&resultType=standard&cacheHint=true"  # noqa

    raw_response = json.loads(requests.get(airline_api).text).get("features")

    parsed_data = [get_data(entry, "airline") for entry in raw_response]
    return merge_dict_list(parsed_data)


def get_country_data():
    country_api = [
        "https://services3.arcgis.com/t6lYS2Pmd8iVx1fy/arcgis/rest/services/COVID_Travel_Restrictions_V2/FeatureServer/0/query?f=json&where=info%20%3C%3E%20%27%27%27%27%27%27&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFie%20desc%2Cadm0_name%20asc&outSR=102100&resultOffset=0&resultRecordCount=2500&resultType=standard&cacheHint=true",  # noqa
        "https://services3.arcgis.com/t6lYS2Pmd8iVx1fy/arcgis/rest/services/COVID_Travel_Restrictions_V2/FeatureServer/0/query?f=json&where=(info%20%3C%3E%20%27%27%27%27%27%27)%20AND%20(optional2%3C%3E%27%27%27%27%27%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=optional1%20desc%2Cadm0_name%20asc&outSR=102100&resultOffset=0&resultRecordCount=2500&resultType=standard&cacheHint=true",  # noqa
    ]
    raw_responses = [
        json.loads(requests.get(url).text).get("features", []) for url in country_api
    ]
    parsed_data = [get_data(entry, "country") for entry in chain(*raw_responses)]
    return merge_dict_list(parsed_data, override_keys=True)


def main():
    with open("../data/airlineInfo.js", "w") as f:
        f.writelines("export default ")
        json.dump(get_airline_data(), f)
    with open("../data/countryInfo.js", "w") as f:
        f.writelines("export default ")
        json.dump(get_country_data(), f)


if __name__ == "__main__":
    main()
