import * as fs from "fs";
import { Database } from "sqlite3";

// create a database connection
const db = new Database("./scripts/dev.db");

// define the SQL query to retrieve data from the table
const sql = "SELECT title,slug FROM Podcast;";

// execute the query and fetch the results
db.all(sql, [], (err, rows) => {
  if (err) {
    console.error(err.message);
    return;
  }

  // convert the rows to JSON format
  const data = JSON.stringify(rows);

  // write the JSON data to a file
  fs.writeFile("./src/json/podcasts/search/title-slug.json", data, (err) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log("Data exported to title-slug.json");
  });
});

// close the database connection
db.close();
