import inquirer from "inquirer";
class Student {
    // static counter = 10000;
    Id;
    name;
    courses;
    balance;
    constructor(Id, name, courses, balance) {
        this.Id = Id;
        this.name = name;
        this.courses = [];
        this.balance = balance;
    }
    //method to enroll in a course
    enroll_corse(course) {
        this.courses.push();
    }
}
let baseId = 10000;
let StudentId = "";
let continueEnrollement = true;
let Students = [];
do {
    let action = await inquirer.prompt([
        {
            type: "list",
            name: "ans",
            message: "please select an option:\n",
            choices: ["Enroll a student", "show student status"],
        },
    ]);
    if (action === "Enroll a student") {
        let studentName = await inquirer.prompt([
            {
                type: "input",
                name: "ans",
                message: "Please Enter your name:",
            },
        ]);
        let trimmedStudentName = studentName.ans.trim().lowerCase();
        let studentNameChecke = Students.map((obj) => obj.name);
        if (studentNameChecke.includes(trimmedStudentName) === false) {
            if (trimmedStudentName !== "") {
                baseId++;
                StudentId = "StId" + baseId;
                console.log("\n\t Your account has been credited");
                console.log(`Welcome, ${trimmedStudentName}!`);
                let course = await inquirer.prompt({
                    type: "list",
                    name: "ans",
                    message: "Please select a course:",
                    choices: ["typescript", "python", "javascript", "c++"],
                });
                let courseFees = 0;
                switch (course.ans) {
                    case "typescript":
                        courseFees = 5000;
                        break;
                    case "python":
                        courseFees = 3000;
                        break;
                    case "javascript":
                        courseFees = 4000;
                        break;
                    case "c++":
                        courseFees = 2000;
                        break;
                }
                let courseConfirm = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "ans",
                        message: "Do you want to enroll in this course",
                    },
                ]);
                if (courseConfirm.ans === true) {
                    let Student0 = new Student(StudentId, trimmedStudentName, course.ans, courseFees);
                    Students.push(Student0);
                    console.log("You have Enroll in this course");
                }
            }
            else {
                console.log("invalid Name");
            }
        }
        else {
            console.log("this name is already exists");
        }
    }
} while (true);
