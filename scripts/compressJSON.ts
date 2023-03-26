import fs, { createWriteStream } from "fs";
import lzma from "lzma-native";
// @ts-ignore
import brotli from "brotli";
import pako from "pako";
import zlib from "zlib";
// import lzo from "lzo";

function compressData(data: object) {
  // Read the input JSON file
  const inputFilePath = "./src/json/podcast.json";
  const jsonData = JSON.parse(fs.readFileSync(inputFilePath, "utf-8"));

  // Compress the JSON data
  // Write the compressed data to a new file

  // Convert to JSON
  const json_data = JSON.stringify(data);
  // Convert to bytes
  const encoded = new TextEncoder().encode(json_data);
  // Compress
  const compressed = pako.gzip(encoded);
  const outputFilePath = "./src/json/compressed-podcasts.json.zlib";
  fs.writeFileSync(outputFilePath, compressed);
}

function compressDataDeflate(data: object): Uint8Array {
  // Convert to JSON
  const json_data = JSON.stringify(data);
  // Convert to bytes
  const encoded = new TextEncoder().encode(json_data);
  // Compress using deflate
  const compressed = pako.deflate(encoded);
  return compressed;
}

function compressDataZLIB(data: object): Uint8Array {
  // Convert to JSON
  const json_data = JSON.stringify(data);
  // Convert to bytes
  const encoded = new TextEncoder().encode(json_data);
  // Compress using zlib
  const compressed = pako.deflate(encoded, { zlib: true });
  return compressed;
}

async function compressLZMA(data: any) {
  const jsonData = JSON.parse(fs.readFileSync(data, "utf-8"));

  // Compress the JSON data
  const compressedData = await lzma.compress(JSON.stringify(jsonData));

  // Write the compressed data to a new file
  const outputFilePath = "./src/json/compressed-podcasts.json.lzma";
  createWriteStream(outputFilePath).write(compressedData);
}

function compressDataBrotli() {
  const inputFilePath = "./src/json/podcast.json";
  const jsonData = JSON.parse(fs.readFileSync(inputFilePath, "utf-8"));

  const removedEmptyFieldsData = jsonData.map((obj) =>
    removeValuesWithEmptyString(obj),
  );
  const cleanedData = removedEmptyFieldsData.map((obj) =>
    removeNullFields(obj),
  );

  // Convert data to JSON
  const json_data = JSON.stringify(cleanedData);

  // Convert to bytes
  const encoded = Buffer.from(json_data, "utf-8");

  // Compress using Brotli
  const compressed = zlib.brotliCompressSync(encoded, {
    params: {
      [zlib.constants.BROTLI_PARAM_QUALITY]: 11, // compression level
    },
  });

  console.log(json_data.length, encoded.length, "Original");
  console.log(compressed.length, encoded.length, "Brotli Compressed");

  // Write the compressed data to a new file
  const outputFilePath = "./src/json/compressed-podcasts.json.br";
  const outputStream = createWriteStream(outputFilePath, {
    encoding: "binary",
  });
  outputStream.write(compressed);
  outputStream.end();
}

function decompressBrotli() {
  const compressedFilePath = "./src/json/compressed-podcasts.json.br";
  const compressedData = fs.readFileSync(compressedFilePath);

  const decompressedData = zlib.brotliDecompressSync(compressedData);
  const jsonData = decompressedData.toString("utf-8");
  const data = JSON.parse(jsonData);
  console.log(data);
}

export async function decompressBrotliJSON(jsonData) {
  const bytes = new TextEncoder().encode(jsonData);
  const decompressedBytes = await brotli.decompress(bytes);
  const decompressedJSON = new TextDecoder().decode(decompressedBytes);
  console.log(decompressedJSON);
  return JSON.parse(decompressedJSON);
}

function removeNullFields(obj) {
  if (!obj) return {}; // return empty object if obj is null or undefined
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => value !== null),
  );
}

function removeValuesWithEmptyString(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    if (obj[key] !== "") {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

// Read the input JSON file

// Compress the JSON data
// compressDataBrotli(jsonData);
// compressDataBrotli();
// decompressBrotli();

export async function decompressJSONBrotli(url) {
  const response = await fetch(url);
  const bytes = await response.arrayBuffer();
  const decompressedBytes = await brotli.decompress(bytes);
  const jsonString = new TextDecoder().decode(decompressedBytes);
  const json = JSON.parse(jsonString);
  console.log(json);
  return json;
}

function decompressJSONBrotliZLIB(filepath) {
  // Read the compressed file as bytes
  const compressedData = fs.readFileSync(filepath);

  // Decompress the data using Brotli
  const decompressedData = zlib.brotliDecompressSync(compressedData);

  // Convert the decompressed data to a JSON object
  const json = JSON.parse(decompressedData.toString());

  console.log(json);

  // Return the JSON object
  return json;
}

function compressWithBrotli() {
  const inputFilePath = "./json/podcasts/titles-100000-arrays.json";
  // const jsonData = JSON.parse(fs.readFileSync(inputFilePath, "utf-8"));

  // const removedEmptyFieldsData = jsonData.map((obj) =>
  //   removeValuesWithEmptyString(obj),
  // );
  // const cleanedData = removedEmptyFieldsData.map((obj) =>
  //   removeNullFields(obj),
  // );

  // Convert data to JSON
  // const json_data = JSON.stringify(jsonData);

  // Convert to bytes
  const encoded = Buffer.from(fs.readFileSync(inputFilePath, "utf-8"), "utf-8");

  // Compress using Brotli
  const compressed = brotli.compress(encoded, {
    quality: 11, // compression level
  });

  console.log(
    compressed.length,
    "Brotli Compressed",
    encoded.length,
    "Original",
  );

  // Write the compressed data to a new file
  const outputFilePath =
    "./compressed/JSON/compressed-titles-100000-arrays.json.br";
  const outputStream = createWriteStream(outputFilePath, {
    encoding: "binary",
  });
  outputStream.write(compressed);
  outputStream.end();
}

// const jsonData = JSON.parse(fs.readFileSync(inputFilePath, "utf-8"));

// const removedEmptyFieldsData = jsonData.map((obj) =>
//   removeValuesWithEmptyString(obj),
// );
// const cleanedData = removedEmptyFieldsData.map((obj) => removeNullFields(obj));

// // Convert data to JSON
// const json_data = JSON.stringify(cleanedData);

// const inputFilePath = "./src/json/compressed-podcasts.json.br";

compressWithBrotli();
// decompressJSONBrotliZLIB(inputFilePath);
