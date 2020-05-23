import json
import re
from datetime import datetime as dt

import _jsonnet
import requests
from bs4 import BeautifulSoup


def main():
    url = "https://www.iatatravelcentre.com/international-travel-document-news/1580226297.htm"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    scripts = soup.findAll("script")

    js_string = treat_js_string(scripts[-7].string)

    country_data = find_data(js_string).get("values")

    parsed_data = parse_country_data(country_data)

    with open("../data/rawInfo.js", "w") as file:
        file.writelines("export default ")
        json.dump(parsed_data, file)


def parse_country_data(data):
    def _parse(text):
        str_pattern = r"^Published (\d{2}.\d{2}.\d{4})(.*)"
        if match := re.search(str_pattern, text, re.IGNORECASE):
            date = match.group(1)
            date = dt.strptime(date, "%d.%m.%Y")
            date = date.strftime("%Y-%m-%d")
            description = match.group(2)
            return {"updated_at": date, "description": description}
        return "Unknown."

    return {country: _parse(obj["gdp"]) for country, obj in data.items()}


def treat_js_string(string):
    return " ".join(
        str(string)
        .replace("&#32;", " ")
        .replace("<br>", "")
        .replace("<br/>", "")
        .replace("\u201cDOT", "")
        .split()
    )


def find_data(string):
    init = "var svgMapDataGPD = "
    start_idx = string.find(init) + len(init)
    end_idx = string.find("new svgMap")
    js_obj = string[start_idx:end_idx]
    return json.loads(_jsonnet.evaluate_snippet("snippet", js_obj))


if __name__ == "__main__":
    main()
