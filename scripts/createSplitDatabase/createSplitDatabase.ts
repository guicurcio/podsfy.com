import { Database } from "sqlite3";

const db = new Database("./databases/sqlite/split-4.db");

const createTableQuery = `
CREATE TABLE "Podcast" (
    "id"	INTEGER NOT NULL,
    "title"	TEXT NOT NULL,
    "createdAt"	DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"	DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description"	TEXT NOT NULL,
    "url"	TEXT NOT NULL,
    "slug"	TEXT NOT NULL,
    "cover"	TEXT NOT NULL DEFAULT '',
    "host"	TEXT NOT NULL DEFAULT '',
    "podcastHostId"	TEXT,
    "backgroundCoverImage"	TEXT,
    "tags"	TEXT,
    "genre"	TEXT,
    "rating"	INTEGER,
    "amountOfEpisodes"	INTEGER,
    "frequencyOfUpdates"	INTEGER,
    "hasNotBeenUpdating"	BOOLEAN,
    "isItBlocked"	BOOLEAN,
    "isItExplicit"	BOOLEAN,
    "language"	TEXT,
    "lastUpdate"	INTEGER,
    "outsideImageUrl"	TEXT,
    "podcastCreatedOn"	DATETIME,
    "popularity"	INTEGER,
    "priority"	INTEGER,
    "uid"	TEXT,
    "spotifyFollowers"	INTEGER,
    "appleFollowers"	INTEGER,
    "overcastFollowers"	INTEGER,
    "pocketCastsFollowers"	INTEGER,
    PRIMARY KEY("id" AUTOINCREMENT),
    CONSTRAINT "Podcast_podcastHostId_fkey" FOREIGN KEY("podcastHostId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE
);
`;

db.serialize(() => {
  db.run(createTableQuery, (err) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log("Podcast table created in new database.");
  });
});

db.close();
