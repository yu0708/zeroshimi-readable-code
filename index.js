const fs = require("fs");

// コマンドライン引数の配列

const input_ids = [];
let input_user_name = "";

process.argv.forEach((args, index) => {
  // node index.jsがここの配列に含まれるので無視
  if (index < 2) return;
  if (index === 2) input_user_name = args;
  // コマンドライン引数はString型なのでNumberに変更
  input_ids.push(Number(args));
});

fs.readFile("data/data.csv", "utf-8", (err, data) => {
  if (err) throw console.error(err);
  const data_list = data.split(",");
  console.log(`ユーザー名: ${input_user_name}`);
  data_list.forEach((data, index) => {
    if (input_ids.includes(index + 1) || input_ids.length === 0)
      console.log(`${index + 1}: ${data}`);
  });
});
