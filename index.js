const fs = require("fs");

// コマンドライン引数の配列

const ids = [];

process.argv.forEach((args, index) => {
    // node index.jsがここの配列に含まれるので無視
    if (index<2) return
    // コマンドライン引数はString型なのでNumberに変更
    ids.push(Number(args));
});

fs.readFile("data/data.csv", "utf-8", (err, data) => {
    if (err) throw console.error(err);
    const data_list = data.split(',');
    data_list.forEach((data,index) => {
        if (ids.includes(index+1)||ids.length===0) console.log(`${index+1}: ${data}`);
    });
});
