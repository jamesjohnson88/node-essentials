const fs = require('fs');

fs.readdirSync("./test").forEach(fileName => {
    
    fs.unlinkSync(`./test/${fileName}`);
    console.log(`Deleted '${fileName}'`);
});

fs.rmdir("./test", err => {

    if(err){
        throw err;
    }

    console.log("./test directory removed");
});