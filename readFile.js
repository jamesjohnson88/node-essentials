const fs = require('fs');

fs.readFile("./assets//alex.jpg", (err, img) => {

    if(err) {
        console.log(`An error has occurred: ${err.message}`);
        process.exit();
    }

    console.log("File contents:");
    console.log(img);
});