// @ts-ignore

import { Database } from "sqlite3";

const originalDb = new Database("./scripts/1.db");

// Get the total number of rows in the original database
originalDb.get("SELECT COUNT(*) as count FROM podcasts", (err, row) => {
  if (err) {
    console.error(err.message);
    return;
  }

  const totalRows = row?.count;
  const chunkSize = Math.ceil(totalRows / 4);

  // Insert data into each new database
  for (let i = 0; i < 4; i++) {
    const dbName = `./split-${i + 1}.db`;
    const splitDb = new Database(dbName);

    // Select data from the original database and insert into the new database
    const offset = i * chunkSize;
    originalDb.all(
      `SELECT * FROM podcasts LIMIT ${chunkSize} OFFSET ${offset}`,
      (err, rows) => {
        if (err) {
          console.error(err.message);
          return;
        }

        // Prepare insert statement
        const insertStmt = splitDb.prepare(
          "INSERT INTO Podcast VALUES (title,description,url,slug,?)",
        );

        // Insert each row into the new database
        for (const row of rows) {
          insertStmt.run(
            row.title,
            row.description,
            row.url,
            row.slug,
            row.column4,
          );
        }

        // Finalize the statement and close the database connection
        insertStmt.finalize(() => {
          console.log(`Inserted ${rows.length} rows into ${dbName}`);
          splitDb.close();
        });
      },
    );
  }
});

// Close the connection to the original database
originalDb.close();
