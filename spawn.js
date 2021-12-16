const child_process = require('child_process');

const questionApp = child_process.spawn("node", ["questions.js"]);

questionApp.stdin.write("James \n");
questionApp.stdin.write("Leeds \n");
questionApp.stdin.write("Mess about with it \n");

questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
    console.log(`questionApp process exited`);
});