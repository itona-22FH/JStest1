'use strict';

const tasks = ['掃除', '買い物', '散歩'];

const title = () => {
  console.log('========================');
  console.log('現在持っているタスク一覧');
  console.log('========================');
};

const arryToProcess = (arry) => {
  arry.forEach((value, index) => {
    console.log(`${index} : ${value}`);
  });
};

title();
arryToProcess(tasks);

let inputTask = prompt('タスクを入力してください');
tasks.push(inputTask);
alert('タスクを追加しました');

title();
arryToProcess(tasks);
