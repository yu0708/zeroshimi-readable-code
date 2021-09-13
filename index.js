const fs = require("fs");

fs.readFile("data/data.csv", "utf-8", (err, data) => {
    if (err) throw console.error(err);
    const data_list = data.split(',');
    data_list.forEach((data,index) => {
        console.log(`${index+1}: ${data}`);
    });
});

// console.log('上手');



