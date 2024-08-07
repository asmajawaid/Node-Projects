import inquirer from "inquirer";
class Student {
    name;
    constructor(Name) {
        this.name = Name;
    }
}
class person {
    students = [];
    addStudent(object) {
        this.students.push(object);
    }
}
const persons = new person();
const programeStart = async (persons) => {
    do {
        console.log("Welcome!");
        const answer = await inquirer.prompt({
            name: "Select",
            type: "list",
            message: "Whome whould you like to interact with?",
            choices: ["staff", "student", "exit"],
        });
        if (answer.Select == "staff") {
            console.log("You approach the Staff room. Please feel free to ask any question.");
        }
        else if (answer.Select == "student") {
            const answer = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to engage with:",
            });
            const student = persons.students.find((value) => value.name == answer.student);
            if (!student) {
                const name = new Student(answer.student);
                persons.addStudent(name);
                console.log(`Hello! I am ${name.name}. Nice to meet you.`);
                console.log(`New Student Added.`);
                console.log(`Current Student List:`);
                console.log(persons.students);
            }
            else {
                console.log(`Hello! I am ${student.name}. Nice to see you again.`);
                console.log(`Existing student list:`);
                console.log(persons.students);
            }
        }
        else if (answer.Select == "exit") {
            console.log("Exiting the programe....");
            process.exit();
        }
    } while (true);
};
programeStart(persons);
