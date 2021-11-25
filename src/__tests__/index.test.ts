import { pinyinToZhuyin } from '../index';
it('works', () => {
  expect(pinyinToZhuyin('Nǐ hǎo')).toBe('ㄋㄧˇ ㄏㄠˇ');
  expect(pinyinToZhuyin('Nǐ shì quán shìjiè wǒ zuì ài de rén.')).toBe(
    'ㄋㄧˇ ㄕˋ ㄑㄩㄢˊ ㄕˋㄐㄧㄝˋ ㄨㄛˇ ㄗㄨㄟˋ ㄞˋ ㄉㄜ˙ ㄖㄣˊ.',
  );
  expect(pinyinToZhuyin('Wǒ bùshì měiguó rén. Tā shì měiguó rén.')).toBe(
    'ㄨㄛˇ ㄅㄨˋㄕˋ ㄇㄟˇㄍㄨㄛˊ ㄖㄣˊ. ㄊㄚ ㄕˋ ㄇㄟˇㄍㄨㄛˊ ㄖㄣˊ.',
  );
});
