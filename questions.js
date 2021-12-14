const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with Node.JS? "
];

const collectAnswers = (questions, done) => {

    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = answer => {

        answers.push(answer);
        
        if (answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered);
        } else {
            done(answers);
        }
    };

    rl.question(firstQuestion, questionAnswered);
};

collectAnswers(questions, answers => {

    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});

// const ask = (i=0) => {
    
//     process.stdout.write(`\n\n\n ${questions[i]}`);
//     process.stdout.write(` > `);
// }

// ask();

// const answers = [];

// process.stdin.on("data", data => {

//     answers.push(data.toString().trim());
    
//     if (answers.length < questions.length) {
//         ask(answers.length);
//     } else {
//         process.exit();
//     }
// });

// process.on("exit", () => {
    
//     const [name, activity, lang] = answers;

//     console.log(`
    
// Thank you for your answers.


// Go ${activity}, ${name}. You can write that ${lang} code later!
    
//     `);
// });