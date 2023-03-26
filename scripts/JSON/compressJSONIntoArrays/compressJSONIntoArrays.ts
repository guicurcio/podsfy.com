import * as fs from "fs";

interface Item {
  title: string;
  slug: string;
}

const inputFilePath = "./json/podcasts/titles-100000.json";
const outputFilePath = "./json/podcasts/titles-100000-arrays.json";
const jsonData = JSON.parse(fs.readFileSync(inputFilePath, "utf-8"));

const compressedData = [jsonData.map((item) => item.title)];

fs.writeFileSync(outputFilePath, JSON.stringify(compressedData));
