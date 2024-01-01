import dayjs from "dayjs";

export const words = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
  "Ut",
  "ipsam",
  "distinctio",
  "fugit",
  "sit",
  "molestiae",
  "magnam",
  "quasi",
  "laudantium",
  "corrupti",
  "consectetur",
  "explicabo",
  "illum",
  "totam",
  "saepe",
  "repellendus",
  "ipsum",
  "sunt",
  "nisi",
  "mollitia",
  "temporibus",
  "sapiente ",
];

export const tys = ["rss", "newsletter", "podcast", "saved"];

// generate a random word
export function randomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// generate random words within a max limit number or a range
export function randomSentence(limit: number | [number, number]) {
  const [min, max] = Array.isArray(limit) ? limit : [1, limit];
  const len = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Array(len)
    .fill(0)
    .map(() => randomWord())
    .join(" ");
}

// generate random date, default format: YYYY/MM/DD
export function randomDateStr(fmt?: string) {
  const date = dayjs(new Date(+new Date() - Math.floor(Math.random() * 10000000000)));
  return date.format(fmt ?? "YYYY/MM/DD");
}

export function randomTy() {
  return tys[Math.floor(Math.random() * tys.length)];
}
