class Counter {
  static count: number = 0; // This is our static variable

  static increaseCount() {
    Counter.count++; // When we use Counter.count, we're accessing the shared variable
  }
}

// Let's use our Counter class
Counter.increaseCount(); // Now count is 1
Counter.increaseCount(); // Now count is 2
console.log(Counter.count); // Prints 2



class School {
  static totalStudents: number = 0; // This will keep track of the total number of students

  constructor(public name: string, public numberOfStudents: number) {
    School.totalStudents += numberOfStudents; // Adding the new students to the total count
  }

  static enrollMoreStudents(additionalStudents: number) {
    School.totalStudents += additionalStudents; // Adding more students to the total count
  }

  static displayTotalStudents() {
    console.log(`Total students enrolled: ${School.totalStudents}`);
  }
}

// Let's create some instances of the School class
const mathClass = new School("Math", 20);
const scienceClass = new School("Science", 30);

School.displayTotalStudents(); // Output: Total students enrolled: 50

// Let's enroll more students using the static method
School.enrollMoreStudents(10);

School.displayTotalStudents(); // Output: Total students enrolled: 60




Sure thing! Let's explore another example using static variables in TypeScript. How about we create a class to represent a school and keep track of the total number of students enrolled across all classes?

```typescript
class School {
  static totalStudents: number = 0; // This will keep track of the total number of students

  constructor(public name: string, public numberOfStudents: number) {
    School.totalStudents += numberOfStudents; // Adding the new students to the total count
  }

  static enrollMoreStudents(additionalStudents: number) {
    School.totalStudents += additionalStudents; // Adding more students to the total count
  }

  static displayTotalStudents() {
    console.log(`Total students enrolled: ${School.totalStudents}`);
  }
}

// Let's create some instances of the School class
const mathClass = new School("Math", 20);
const scienceClass = new School("Science", 30);

School.displayTotalStudents(); // Output: Total students enrolled: 50

// Let's enroll more students using the static method
School.enrollMoreStudents(10);

School.displayTotalStudents(); // Output: Total students enrolled: 60
```

In this example, the `totalStudents` static variable keeps track of the total number of students across all classes. Every time a new class is created (`mathClass` or `scienceClass`), it adds the number of students in that class to the total count. The `enrollMoreStudents` static method allows us to enroll additional students to the school, updating the total count accordingly. Finally, the `displayTotalStudents` static method prints out the total number of students enrolled.

So, with static variables and methods, we can keep track of information that's relevant to the whole class, like the total number of students in this school example. Cool, right? 😊