import fs from "fs";
import path from "path";
import React from "react";

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
  return (
    <main className="container mx-auto p-5 my-8">
      <h1 className="">Can I fly?</h1>

      {Object.entries(countries).map(([key, country]) => (
        <div key={key}>
          {country.flag} - {country.friendlyName}
        </div>
      ))}
    </main>
  );
}

export default HomePage;
