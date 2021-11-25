import { pinyinToZhuyin } from '../index';
it('works', () => {
  expect(pinyinToZhuyin('Nǐ hǎo')).toBe('ㄋㄧˇ ㄏㄠˇ');
  expect(pinyinToZhuyin('Nǐ shì quán shìjiè wǒ zuì ài de rén.')).toBe(
    'ㄋㄧˇ ㄕˋ ㄑㄩㄢˊ ㄕˋㄐㄧㄝˋ ㄨㄛˇ ㄗㄨㄟˋ ㄞˋ ㄉㄜ˙ ㄖㄣˊ.',
  );
});
