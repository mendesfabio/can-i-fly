import fs from "fs";
import path from "path";
import React from "react";
import Select from "react-select";

export async function getStaticProps() {
  const dataFolder = path.join(process.cwd(), "data");

  const countriesFilePath = path.join(dataFolder, "countries.json");
  const countriesFileContent = fs.readFileSync(countriesFilePath, "utf8");
  const countries = JSON.parse(countriesFileContent);

  return {
    props: {
      countries,
    },
  };
}

function HomePage({ countries }) {
  const countriesOptions = Object.entries(countries).map(([key, country]) => ({
    value: key,
    label: `${country.flag} ${country.friendlyName}`,
  }));

  return (
    <main className="container mx-auto p-5 my-8">
      <h1 className="text-6xl font-bold tracking-tighter text-center">Can I fly? ✈️</h1>

      <h2 className="text-2xl font-medium text-center">
        Travel restrictions are abounding during the COVID-19 pandemic.
        <br />
        Use this simple app to know if you can fly somewhere.
      </h2>

      <div className="grid grid-cols-12 gap-4 my-10 mx-5">
        <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-3">
          <h3 className="font-medium mb-1 inline-block">I am leaving from</h3>
          <Select options={countriesOptions} defaultValue={countriesOptions[0]} />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <h3 className="font-medium mb-1 inline-block">I want to go</h3>
          <Select options={countriesOptions} defaultValue={countriesOptions[0]} />
        </div>
      </div>

      <div className="text-center">
        <a href="https://github.com/1313labs/can-i-fly" className="text-3xl">
          <i className="fab fa-fw mr-1 fa-github"></i>
        </a>
      </div>
    </main>
  );
}

export default HomePage;
