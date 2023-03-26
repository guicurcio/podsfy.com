/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import brotli from "brotli";
import fs, { createWriteStream } from "node:fs";

function compressWithBrotli() {
  const inputFilePath = "../public/fonts/podsfy-first-regular.woff";

  const encoded = Buffer.from(fs.readFileSync(inputFilePath, "utf8"), "utf8");

  const compressed = brotli.compress(encoded, {
    quality: 11,
  });

  console.log(
    compressed.length,
    "Brotli Compressed",
    encoded.length,
    "Original",
  );

  const outputFilePath =
    "../public/fonts/compressed/podsfy-first-regular.woff.br";
  const outputStream = createWriteStream(outputFilePath, {
    encoding: "binary",
  });

  outputStream.write(compressed);
  outputStream.end();
}

compressWithBrotli();
