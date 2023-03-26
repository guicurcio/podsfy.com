import * as fs from "fs";
import { Database } from "sqlite3";

// create a database connection
const db = new Database("./scripts/dev.db");

// define the SQL query to retrieve data from the table
const sql = "SELECT * FROM Podcast WHERE year = ?;";

// define the years you want to slice the data by
const years = [2019, 2020, 2021];

// iterate over the years and retrieve the data for each year
for (const year of years) {
  // execute the query and fetch the results for the current year
  db.all(sql, [year], (err, rows) => {
    if (err) {
      console.error(err.message);
      return;
    }

    // convert the rows to JSON format
    const data = JSON.stringify(rows);

    // write the JSON data to a file named after the year
    const filename = `./src/json/podcast-${year}.json`;
    fs.writeFile(filename, data, (err) => {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log(`Data exported to ${filename}`);
    });
  });
}
