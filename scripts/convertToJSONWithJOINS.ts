import * as fs from "fs";
import { Database } from "sqlite3";

function renameProperty(obj, oldName, newName) {
  // check if the old property exists in the object
  if (obj.hasOwnProperty(oldName)) {
    // create a new property with the new name
    Object.defineProperty(
      obj,
      newName,
      Object.getOwnPropertyDescriptor(obj, oldName),
    );

    // delete the old property
    delete obj[oldName];
  }

  return obj;
}

// create a database connection
const db = new Database("./scripts/dev.db");

// define the SQL query to retrieve data from the table
const sql = "SELECT * FROM Podcast;";
// execute the query and fetch the results

db.all(sql, [], (err, rows) => {
  if (err) {
    console.error(err.message);
    return;
  }

  // group the data by podcast slug
  const groupedData = rows.reduce((acc, cur) => {
    const {
      slug,
      podcastHostId,
      rating,
      createdAt,
      updated_at,
      title,
      id,
      url,
      tags,
      genre,
      description,
    } = cur;
    const { name, otherNames } = cur;

    if (!acc[slug as string]) {
      acc[slug as string] = {
        slug,
        podcastHostId,
        rating,
        createdAt,
        updated_at,
        title,
        id,
        url,
        tags,
        genre,
        description,
        host: {},
      };
    }

    acc[slug as string].host = { name, otherNames };

    return acc;
  }, {});

  // convert the data to JSON format
  const jsonData = JSON.stringify(Object.values(groupedData));

  // write the JSON data to a file
  fs.writeFile("./src/json/podcastWithEpisodes.json", jsonData, (err) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log("Data exported to podcastWithEpisodes.json");
  });
});

// close the database connection
db.close();
