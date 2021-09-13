const fs = require("fs");

fs.readFile("data/data.csv", "utf-8", (err, data) => {
    if (err) throw console.error(err);
    const data_list = data.split(',');
    data_list.forEach(data => {
        console.log(data);
    });
});

// console.log('上手');



