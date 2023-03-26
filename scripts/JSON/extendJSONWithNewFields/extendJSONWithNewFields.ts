import * as fs from "fs";
import generateSlugFromTitle from "utils/generateSlugFromTitle";

interface Item {
  title: string;
  slug: string;
}

const inputFilePath = "./json/podcasts/titles.json";
const outputFilePath = "./json/podcasts/titles-with-slugs.json";
const jsonData = JSON.parse(fs.readFileSync(inputFilePath, "utf-8"));

const itemsWithSlug = jsonData.map((item: Item) => ({
  ...item,
  slug: generateSlugFromTitle(item.title),
}));

fs.writeFileSync(outputFilePath, JSON.stringify(itemsWithSlug));
