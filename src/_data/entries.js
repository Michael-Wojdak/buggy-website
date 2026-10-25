
import { readFile } from "node:fs/promises";
import { glob } from 'glob';

const files = await glob("./_raw_data/*.json");

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