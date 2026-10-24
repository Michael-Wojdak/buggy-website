
import { readFile } from "node:fs/promises";

const files = ["./_raw_data/Araneae.json"]

export default async function () {
  const entries = (await Promise.all(
    files.map(async (file) => {
      const json = await readFile(file, "utf8");
      return JSON.parse(json);
    })
  )).flat();

  return entries.filter(
    entry => entry.id?.trim() && entry.name?.trim()
  );
};