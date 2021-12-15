const fs = require('fs');

if (!fs.existsSync("storage-files")){

    fs.mkdir("storage-files", err => {

        if(err) {
            throw err;
        }

        console.log("directory created");
    });
} else {
    
    console.log("directory already exists");
}