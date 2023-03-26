import * as fs from "fs";
import { Database } from "sqlite3";

// create a database connection
const db = new Database("./scripts/dev.db");

// define the SQL query to retrieve data from the table
const sql = "SELECT * FROM Podcast;";

// execute the query and fetch all the results
db.all(sql, (err, rows) => {
  if (err) {
    console.error(err.message);
    return;
  }

  // group the data by podcast slug
  const groupedData = rows.reduce((acc, cur) => {
    const { slug } = cur;
    if (!acc[slug as string]) {
      acc[slug] = [];
    }
    acc[slug].push(cur);
    return acc;
  }, {});

  // iterate over the data for each podcast and write to a file
  Object.entries(groupedData).forEach(([slug, data]) => {
    // convert the data to JSON format
    const jsonData = JSON.stringify(data[0]);

    // write the JSON data to a file named after the podcast slug
    const filename = `./src/json/podcastsJSONsliced/${slug}.json`;
    fs.writeFile(filename, jsonData, (err) => {
      if (err) {
        if (err.code === "EEXIST") {
          console.error(`File ${filename} already exists`);
        } else {
          console.error(err.message);
        }
        return;
      }
      console.log(`Data exported to ${filename}`);
    });
  });
});
