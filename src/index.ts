const initials: Record<string, string> = {
  b: 'ㄅ',
  p: 'ㄆ',
  m: 'ㄇ',
  f: 'ㄈ',
  d: 'ㄉ',
  t: 'ㄊ',
  n: 'ㄋ',
  l: 'ㄌ',
  g: 'ㄍ',
  k: 'ㄎ',
  h: 'ㄏ',
  j: 'ㄐ',
  q: 'ㄑ',
  x: 'ㄒ',
  zh: 'ㄓ',
  ch: 'ㄔ',
  sh: 'ㄕ',
  r: 'ㄖ',
  z: 'ㄗ',
  c: 'ㄘ',
  s: 'ㄙ',
};
const finals: Record<string, string> = {
  a: 'ㄚ',
  o: 'ㄛ',
  e: 'ㄜ',
  ai: 'ㄞ',
  ei: 'ㄟ',
  ao: 'ㄠ',
  ou: 'ㄡ',
  an: 'ㄢ',
  ang: 'ㄤ',
  en: 'ㄣ',
  eng: 'ㄥ',
  er: 'ㄦ',
  u: 'ㄨ',
  ua: 'ㄨㄚ',
  uo: 'ㄨㄛ',
  uai: 'ㄨㄞ',
  ui: 'ㄨㄟ',
  uan: 'ㄨㄢ',
  uang: 'ㄨㄤ',
  un: 'ㄨㄣ',
  //This one might not occur.
  ueng: 'ㄨㄥ',
  ong: 'ㄨㄥ',
  i: 'ㄧ',
  ia: 'ㄧㄚ',
  ie: 'ㄧㄝ',
  iao: 'ㄧㄠ',
  iu: 'ㄧㄡ',
  ian: 'ㄧㄢ',
  iang: 'ㄧㄤ',
  in: 'ㄧㄣ',
  ing: 'ㄧㄥ',
  ü: 'ㄩ',
  üe: 'ㄩㄝ',
  ue: 'ㄩㄝ',
  üan: 'ㄩㄢ',
  ün: 'ㄩㄣ',
  iong: 'ㄩㄥ',
};
const individuals: Record<string, string> = {
  //individual initials
  zhi: 'ㄓ',
  chi: 'ㄔ',
  shi: 'ㄕ',
  ri: 'ㄖ',
  zi: 'ㄗ',
  ci: 'ㄘ',
  si: 'ㄙ',
  //individual finals
  a: 'ㄚ',
  o: 'ㄛ',
  e: 'ㄜ',
  ai: 'ㄞ',
  ei: 'ㄟ',
  ao: 'ㄠ',
  ou: 'ㄡ',
  an: 'ㄢ',
  ang: 'ㄤ',
  en: 'ㄣ',
  eng: 'ㄥ',
  er: 'ㄦ',
  r: 'ㄦ',
  wu: 'ㄨ',
  wa: 'ㄨㄚ',
  wo: 'ㄨㄛ',
  wai: 'ㄨㄞ',
  wei: 'ㄨㄟ',
  wan: 'ㄨㄢ',
  wang: 'ㄨㄤ',
  wen: 'ㄨㄣ',
  weng: 'ㄨㄥ',
  yi: 'ㄧ',
  ya: 'ㄧㄚ',
  ye: 'ㄧㄝ',
  yao: 'ㄧㄠ',
  you: 'ㄧㄡ',
  yan: 'ㄧㄢ',
  yang: 'ㄧㄤ',
  yin: 'ㄧㄣ',
  ying: 'ㄧㄥ',
  yu: 'ㄩ',
  yue: 'ㄩㄝ',
  yuan: 'ㄩㄢ',
  yun: 'ㄩㄣ',
  yong: 'ㄩㄥ',
};
const toneMap: Record<string, string> = {
  ā: 'a1',
  á: 'a2',
  ǎ: 'a3',
  à: 'a4',
  ē: 'e1',
  é: 'e2',
  ě: 'e3',
  è: 'e4',
  ī: 'i1',
  í: 'i2',
  ǐ: 'i3',
  ì: 'i4',
  ō: 'o1',
  ó: 'o2',
  ǒ: 'o3',
  ò: 'o4',
  ū: 'u1',
  ú: 'u2',
  ǔ: 'u3',
  ù: 'u4',
  ǖ: 'ü1',
  ǘ: 'ü2',
  ǚ: 'ü3',
  ǜ: 'ü4',
};
const findAccentedChars = function (text: string) {
  const accentsFound: Record<number, string> = {};
  for (let i = 0; i < text.length; i++) {
    for (const accentedChar in toneMap) {
      if (text[i].toLowerCase() === accentedChar) {
        if (text[i].toLowerCase() === text[i]) {
          accentsFound[i] = toneMap[accentedChar];
        } else {
          accentsFound[i] = toneMap[accentedChar].toUpperCase();
        }
      }
    }
  }
  return accentsFound;
};
const removeAccents = function (accentedChars: Record<number, string>, text: string) {
  let output = '';
  for (let i = 0; i < text.length; i++) {
    if (i in accentedChars) {
      output += accentedChars[i][0];
    } else {
      output += text[i];
    }
  }
  return output;
};
const getKeys = function (obj: Record<string, string>) {
  const output = [];
  for (const key in obj) {
    output.push(key);
  }
  return output;
};
const findBetween = function (list: number[], min: number, max: number) {
  let i = 0;
  while (i < list.length) {
    if (list[i] > max) break;
    if (list[i] >= min) {
      return list[i];
    }
    i++;
  }
  return -1;
};
const toLower = function (x: string) {
  if (x) return x.toLowerCase();
};

//sort the regex options by length so the longer ones have precedence
const lenComp = function (a: string, b: string) {
  if (a.length === b.length) return 0;
  return a.length < b.length ? 1 : -1;
};
const individualRexp = new RegExp('^(' + getKeys(individuals).sort(lenComp).join('|') + ')(\\d)?', 'i');
const initialFinalRexp = new RegExp(
  '^(' + getKeys(initials).sort(lenComp).join('|') + ')(' + getKeys(finals).sort(lenComp).join('|') + ')(\\d)?',
  'i',
);

const toneNumberToSymbol: Record<number, string> = {
  0: '˙',
  1: '',
  2: 'ˊ',
  3: 'ˇ',
  4: 'ˋ',
  5: '˙',
};

type Token = {
  start: number;
  type?: string;
  tone?: number;
  parse?: string[];
  zhuyin?: string;
};

export const pinyinToZhuyin = function (pinyinText: string): string {
  if (!pinyinText) return pinyinText;
  const accentedChars = findAccentedChars(pinyinText);
  const sortedAccentedIndicies = getKeys(accentedChars).map(function (x) {
    return parseInt(x, 10);
  });
  const text = removeAccents(accentedChars, pinyinText);

  const parseToken = function (i: number) {
    let parse, detectedToneIdx;
    const token: Token = {
      start: i,
    };
    parse = text.slice(i).match(initialFinalRexp);
    if (parse) {
      parse = parse.map(toLower);
      token.zhuyin = initials[parse[1] as string] + finals[parse[2] as string];
      token.type = 'pinyin';
      if (typeof parse[3] !== 'undefined') {
        token.tone = parseInt(parse[3], 10);
      } else {
        detectedToneIdx = findBetween(sortedAccentedIndicies, i, i + (parse[0] as string).length);
        if (detectedToneIdx >= 0) {
          token.tone = +accentedChars[detectedToneIdx][1];
        } else {
          token.tone = 5;
        }
      }
    } else {
      parse = text.slice(i).match(individualRexp);
      if (parse) {
        parse = parse.map(toLower);
        token.zhuyin = individuals[parse[1] as string];
        token.type = 'pinyin';
        if (typeof parse[2] !== 'undefined') {
          token.tone = parseInt(parse[2], 10);
        } else {
          detectedToneIdx = findBetween(sortedAccentedIndicies, i, i + (parse[0] as string).length);
          if (detectedToneIdx >= 0) {
            token.tone = +accentedChars[detectedToneIdx][1];
          } else {
            token.tone = 5;
          }
        }
      } else {
        token.type = 'other';
        parse = [text[i]];
      }
    }
    token.parse = parse as string[];
    return token;
  };
  const tokens = [];
  let curToken;
  let i = 0;
  while (i < text.length) {
    curToken = parseToken(i);
    tokens.push(curToken);
    i += (curToken.parse as string[])[0].length;
  }
  return tokens
    .map(function (token) {
      if (token.type === 'other') return (token.parse as string[]).join('');
      return token.zhuyin + toneNumberToSymbol[token.tone as number];
    })
    .join('')
    .replace(/ㄐㄨ/g, 'ㄐㄩ')
    .replace(/ㄑㄨ/g, 'ㄑㄩ')
    .replace(/ㄒㄨ/g, 'ㄒㄩ') //ju qu xu are actually pronounced as ü
    .replace(/ㄓㄧ/g, 'ㄓ')
    .replace(/ㄔㄧ/g, 'ㄔ')
    .replace(/ㄕㄧ/g, 'ㄕ')
    .replace(/ㄖㄧ/g, 'ㄖ') // zhi chi shi ri
    .replace(/ㄗㄧ/g, 'ㄗ')
    .replace(/ㄘㄧ/g, 'ㄘ')
    .replace(/ㄙㄧ/g, 'ㄙ') // zi ci si
    .replace(/\u200b'/g, ''); // pinyin syllable separator not necessary
};
