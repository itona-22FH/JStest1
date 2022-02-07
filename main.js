'use strict';

const japanCapital = '東京';
let inputCapital;

while (inputCapital !== japanCapital) {
  inputCapital = prompt('日本の首都は?');
  if (inputCapital === japanCapital) {
    alert('正解です!');
  } else {
    alert('不正解です!');
  }
}
