const fs = require('fs');

// rename file
fs.rename("./assets/colors.json", "./assets/colorData.json", err => {

    if(err) {

        throw err;
    }
});

// move file by altering path
fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {

    if(err) {

        throw err;
    }
});

// wait 4s then delete the file
setTimeout(() => {

    fs.unlink("./assets/alex.jpg", err => {

        if(err) {
            throw err;
        }
    });
}, 4000);