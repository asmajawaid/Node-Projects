import inquirer from "inquirer";
import chalk from "chalk";
import { log } from "console";

class student {
  static counter = 10000;
  Id: number;
  name: string;
  courses: string[];
  balance: number;

  constructor(name: string) {
    this.Id = student.counter++;
    this.name = name;
    this.courses = [];``
    this.balance = 1000;
  }

  enroll_course(course: string) {
    this.courses.push(course);
  }

  view_balance() {
    console.log(`Balance for ${this.name}: ${this.balance}.`);
  }

  pay_fees(amount: number) {
    this.balance -= amount;
    console.log(`$${amount} Payment successfully for ${this.name}.`);
    console.log(`Your Remining Balance: $${this.balance}.`);
  }

  show_status() {
    console.log(`Id: ${this.Id}`);
    console.log(`Name: ${this.name}`);
    if (this.courses.length > 0) {
      console.log(`courses: ${this.courses.join(", ")}`);
    } else {
      console.log(`courses: No courses Enrolled yet.`);
    }
    console.log(`Balance: ${this.balance}`);
  }
}

class Student {
  static counter = 10000;
  Id: number;
  name: string;
  courses: string[]; // Specify the type for courses array
  balance: number;

  constructor(name: string) {
    this.Id = Student.counter++;
    this.name = name;
    this.courses = [];
    this.balance = 1000;
  }

  enroll_course(course: string) {
    if (!this.courses.includes(course)) {
      this.courses.push(course);
      console.log(`Enrolled in ${course} successfully.`);
    } else {
      console.log(`Already enrolled in ${course}.`);
    }
  }

  // enroll_course(course: string) {
  //   this.courses.push(course);
  // }

  view_balance() {
    console.log(`Balance for ${this.name}: ${this.balance}`);
  }

  pay_fees(amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Payment successful. Remaining balance: ${this.balance}`);
    } else {
      console.log(`Insufficient balance to pay fees.`);
    }
  }
}

class student_manager {
  students: student[];
  constructor() {
    this.students = [];
  }

  add_student(name: string) {
    let newStudent = new student(name);
    this.students.push(newStudent);
    console.log(
      `Student: ${name} added successfully. student Id: ${newStudent.Id}`
    );
  }
  //method2

  Enroll_student(student_Id: number, course: string) {
    let students0 = this.find_student(student_Id);
    if (students0) {
      students0.enroll_course(course);
      console.log(`${students0.name} enrolled in ${course} successfully.`);
      console.log(`Courses enrolled: ${students0.courses}`);
    } else {
      console.log(`Student not found.Please enter a correct Id.`);
    }
  }

  view_studentBalance(student_Id: number) {
    let students0 = this.find_student(student_Id);
    if (students0) {
      students0.view_balance();
    } else {
      console.log(`Student not found please enter a correct Id.`);
    }
  }
  //method to pay student fees
  pay_studentFees(student_Id: number, amount: number) {
    let students0 = this.find_student(student_Id);
    if (students0) {
      students0.pay_fees(amount);
    } else {
      console.log(`Student not found please enter a correct Id.`);
    }
  }
  //method to display student status
  show_student_status(student_Id: number) {
    let students0 = this.find_student(student_Id);
    if (students0) {
      students0.show_status();
    }
  }

  //method of find student by student Id
  find_student(student_Id: number) {
    return this.students.find((std) => std.Id === student_Id);
  }
}
//main function to run the programme

async function main() {
  console.log(chalk.blue.bold("-".repeat(70)));
  console.log(chalk.blue.bold(`Welcome to ASMA'S - Student Management System`));
  console.log(chalk.blue.bold("-".repeat(60)));

  let student_managerFunction = new student_manager();
  //while loop to keep programme running
  while (true) {
    let choice = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        message: "Select an option",
        choices: [
          "Add student",
          "Enroll student",
          "View student balance",
          "pay fees",
          "show status",
          "Exit",
        ],
      },
    ]);
    //using switch statement for user choice
    switch (choice.choice) {
      case "Add student":
        let name_input = await inquirer.prompt([
          {
            name: "name",
            type: "input",
            message: "Enter a Student name.",
          },
        ]);
        student_managerFunction.add_student(name_input.name);

        break;
      case "Enroll student":
        let course_input = await inquirer.prompt([
          {
            name: "student-Id",
            type: "number",
            message: "Enter a student Id",
          },
          {
            name: "Course",
            type: "input",
            message: "Enter a course name",
          },
        ]);
        student_managerFunction.Enroll_student(
          course_input.student_Id,
          course_input.Course
        );
        break;
      case "View student balance":
        let balance_input = await inquirer.prompt([
          {
            name: "student_Id",
            type: "number",
            message: "Enter a student Id",
          },
        ]);
        student_managerFunction.view_studentBalance(balance_input.student_Id);
        break;
      case "pay fees":
        let fees_input = await inquirer.prompt([
          {
            name: "student_Id",
            type: "number",
            message: "Enter a student Id",
          },
          {
            name: "amount",
            type: "number",
            message: "Enter the amount to pay",
          },
        ]);
        student_managerFunction.pay_studentFees(
          fees_input.student_Id,
          fees_input.amount
        );
        break;
      case "show status":
        let status_input = await inquirer.prompt([
          {
            name: "student_Id",
            type: "number",
            message: "Enter a student Id",
          },
        ]);
        student_managerFunction.show_student_status(status_input.student_Id,);
        break;
      case "Exit":
        console.log("Exiting...");
        process.exit();
    }
  }
}
//calling a main function
main();
