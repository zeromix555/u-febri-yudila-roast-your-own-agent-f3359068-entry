import { mkdirSync, writeFileSync } from "node:fs";

// One fixed line, no inputs: the same roast every run, byte for byte.
const ROAST =
  "My agent apologised for the bug, fixed it in a file that doesn't exist, then wrote a cheerful summary of the disaster titled 'Mission Accomplished'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
