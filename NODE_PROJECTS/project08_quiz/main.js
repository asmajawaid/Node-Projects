import inquirer from "inquirer";
let a = await inquirer.prompt({
    type: "input",
    name: "firstName",
    message: "What is your Name?",
});
async function askQuestion() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "question1",
            choices: [
                "Array,Object,Boolean",
                "Object,Array,Symbol",
                "Object,String,Number",
                "Boolean,Number,String"
            ],
            message: "Q1.What are the three main 'simple types' in TypeScript?",
        },
        {
            type: "list",
            name: "question2",
            choices: ["Explicit", "Implicit"],
            message: "Q2.What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
        },
        {
            type: "list",
            name: "question3",
            choices: [
                "Const ourTuple=['Coding Good',101]",
                "Const ourTuple=[101]",
                "Const ourTuple=[101,'Coding Good',101]",
                "Const ourTuple=[101,'Coding Good']",
            ],
            message: "Q3.Which is a successful example of this tuple `[number, string]`?",
        },
        {
            type: "list",
            name: "question4",
            choices: ["String[]", "Any[]", "string", "Unknown"],
            message: "Q4.What is the inherited type for the variable example in `const example = ['Dylan']`?",
        },
        {
            type: "list",
            name: "question5",
            choices: ["True", "False"],
            message: "Q5.True or False: a Tuple and an Array are the same thing when discussing types?",
        },
    ]);
    let score = 0;
    if (answers.question1 === "Boolean,Number,String") {
        console.log("Answer is Correct!");
        ++score;
    }
    else {
        console.log("Answer is not Correct");
    }
    if (answers.question2 === "Explicit") {
        console.log("Answer is Correct!");
        ++score;
    }
    else {
        console.log("Answer is not Correct");
    }
    if (answers.question3 === "Const ourTuple=[101,'Coding Good']") {
        console.log("Answer is Correct!");
        ++score;
    }
    else {
        console.log("Answer is not Correct");
    }
    if (answers.question4 === "String[]") {
        console.log("Answer is Correct!");
        ++score;
    }
    else {
        console.log("Answer is not Correct");
    }
    if (answers.question5 === "False") {
        console.log("Answer is Correct!");
        ++score;
    }
    else {
        console.log("Answer is not Correct");
    }
    console.log(`${a.firstName}Your Score: ${score}`);
}
askQuestion();
