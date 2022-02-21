'use strict';

const tasks = [
  { task: '机を片付ける', genre: '掃除' },
  { task: '牛乳を買う', genre: '買い物' },
  { task: '散歩する', genre: '運動' },
];

const title =
  '========================\n現在持っているタスク一覧\n========================';

const showTasks = () => {
  tasks.forEach((value, index) => {
    console.log(`${index} : [内容]${value.task}、[ジャンル]${value.genre}`);
  });
};

console.log(title);
showTasks();

let inputTask = prompt('タスクを入力してください');
let inputGenre = prompt('ジャンルを入力してください');
tasks.push({ task: inputTask, genre: inputGenre });
alert('タスクを追加しました');

console.log(title);
showTasks();

