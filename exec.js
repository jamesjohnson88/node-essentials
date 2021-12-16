const cp = require('child_process');

// open url
// cp.exec("open http://www.linkedin.com/learning");

//open app (terminal)
// cp.exec("open -a Terminal");

// list (ls) or error (lst)
// cp.exec("lst", (err, data, stderr) => {

//     if (err){
//         console.log(err);
//         console.log(stderr);
//     }

//     console.log(data);
// });

// run another node module and display it's output
cp.exec("node readStream", (err, data, stderr) => {

    if (err){
        console.log(err);
        console.log(stderr);
    }

    console.log(data);
});