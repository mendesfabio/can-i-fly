import fs from "fs";
import path from "path";
import React from "react";
import Select from "react-select";

import Header from "../components/index/Header";
import Footer from "../components/index/Footer";
import countries from "../data/countries";

export async function getStaticProps() {
  const dataFolder = path.join(process.cwd(), "data");

  const rawInfoFilePath = path.join(dataFolder, "rawInfo.json");
  const rawInfoFileContent = fs.readFileSync(rawInfoFilePath, "utf8");
  const rawInfo = JSON.parse(rawInfoFileContent);

  return {
    props: {
      rawInfo,
    },
  };
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originCountry: "*",
      destinationCountry: "*",
    };
  }

  handleDestinationChange(option) {
    this.setState({
      destinationCountry: option.value,
    });
  }

  render() {
    const countriesOptions = Object.entries(countries).map(([key, country]) => ({
      value: key,
      label: `${country.flag} ${country.name}`,
    }));

    const destinationOption = countriesOptions.find((options) => options.value === this.state.destinationCountry);
    const destination = countries[this.state.destinationCountry];
    const destinationInfo = this.props.rawInfo[this.state.destinationCountry];

    return (
      <main className="container mx-auto p-5 my-8">
        <Header />

        <div className="grid grid-cols-12 gap-4 my-10 mx-5">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-3">
            <h3 className="font-medium mb-1 inline-block">I am leaving from</h3>
            <span className="italic text-gray-500 text-xs ml-2">(Coming soon)</span>
            <Select options={countriesOptions} defaultValue={countriesOptions[0]} isDisabled />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <h3 className="font-medium mb-1 inline-block">I want to go</h3>
            <Select
              options={countriesOptions}
              value={destinationOption}
              onChange={this.handleDestinationChange.bind(this)}
            />
          </div>

          <div className="col-span-12 lg:col-span-8 lg:col-start-3 mt-5">
            {destinationOption.value === "*" ? (
              <h4 className="text-2xl font-medium text-center">
                Select a destination above to see more information about the country.
              </h4>
            ) : (
              <article>
                <h4 className="text-5xl">{destination.flag}</h4>
                <h4 className="text-2xl font-black tracking-tighter">{destination.name}</h4>
                {destinationInfo ? (
                  <>
                    <p className="text-gray-500 mb-5">{destinationInfo.updated_at}</p>
                    <p className="text-justify">{destinationInfo.description}</p>
                  </>
                ) : (
                  <p className="text-red-700 mb-5">Seems like we don't information about this country yet. 😕</p>
                )}
              </article>
            )}
          </div>
        </div>

        <Footer />
      </main>
    );
  }
}

export default HomePage;
