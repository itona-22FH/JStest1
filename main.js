'use strict';

const tasks = ['掃除', '買い物', '散歩'];

const title =
  '========================\n現在持っているタスク一覧\n========================';

const showTasks = () => {
  tasks.forEach((value, index) => {
    console.log(`${index} : ${value}`);
  });
};

console.log(title);
showTasks(tasks);

let inputTask = prompt('タスクを入力してください');
tasks.push(inputTask);
alert('タスクを追加しました');

console.log(title);
showTasks(tasks);