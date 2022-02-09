'use strict';

function outBorder() {
  console.log('========================');
}
const getOut = '終了';

const tasks = ['掃除', '買い物', '散歩'];
let task;
while (task !== getOut) {
  outBorder();
  console.log('現在持っているタスク一覧');
  outBorder();
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i} : ${tasks[i]}`);
  }
  task = prompt('タスクを入力してください。');
  if (task !== getOut) {
    alert('新しいタスクを追加しました。');
  } else if (task === getOut) {
    break;
  }
  tasks.push(task);
}
