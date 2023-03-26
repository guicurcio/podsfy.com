import * as fs from "fs";
import { Database } from "sqlite3";

const originalDb = new Database("./scripts/1.db");

originalDb.all(`SELECT title FROM podcasts LIMIT 100000;`, (err, rows) => {
  if (err) {
    console.error(err.message);
    return;
  }

  // convert the rows to JSON format
  const data = JSON.stringify(rows);

  // write the JSON data to a file
  fs.writeFile("./json/podcasts/titles-100000.json", data, (err) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log("Data exported to titles-100000.json");
  });
});

// Close the connection to the original database
originalDb.close();
