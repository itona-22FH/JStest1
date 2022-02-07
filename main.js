'use strict';

const japanCapital = '東京';
let inputCapital;

while (inputCapital !== japanCapital) {
  inputCapital = prompt('日本の首都は?');
  inputCapital === japanCapital ? alert('正解です!') : alert('不正解です!');
}
