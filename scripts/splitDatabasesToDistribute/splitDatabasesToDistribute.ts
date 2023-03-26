const originalDb = new sqlite3.Database("./scripts/1.db");

// Get the total number of rows in the original database
originalDb.get("SELECT COUNT(*) as count FROM podcasts", (err, row) => {
  if (err) {
    console.error(err.message);
    return;
  }

  const totalRows = row.count;
  const chunkSize = Math.ceil(totalRows / 4);

  // Create four new databases and insert data into each one
  for (let i = 0; i < 4; i++) {
    const dbName = `./split-${i + 1}.db`;
    const splitDb = new sqlite3.Database(dbName);

    // Create table in new database
    splitDb.run(
      "CREATE TABLE IF NOT EXISTS podcasts (id INTEGER PRIMARY KEY, column1 TEXT, column2 TEXT, column3 TEXT, column4 TEXT)",
    );

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
          "INSERT INTO your_table VALUES (?,?,?,?,?)",
        );

        // Insert each row into the new database
        rows.forEach((row) => {
          insertStmt.run(
            row.id,
            row.column1,
            row.column2,
            row.column3,
            row.column4,
          );
        });

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
