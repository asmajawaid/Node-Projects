import inquirer from "inquirer";

//bank account interface
interface BankAccount {
  accountNumber: number;
  balance: number;

  withdraw(amount: number): void;
  deposit(amount: number): void;
  checkBalance(): void;
}

//bank account class
class BankAccount implements BankAccount {
  accountNumber: number;
  balance: number;
  constructor(accountNumber: number, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  //Debit money
  withdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrawa of $ ${amount} successfully.
                Remaining Balance: $ ${this.balance}`);
    } else {
      console.log(`Insufficient balance`);
    }
  }

  //credit money
  deposit(amount: number): void {
    if (amount > 100) {
      amount -= 1; // $1 fee charged if more than $100 is deposited
    }
    this.balance += amount;
    console.log(
      `Deposit of ${amount} successful. Remaining balance: $${this.balance}`
    );
  }
  //check balance
  checkBalance(): void {
    console.log(`Current balance: $${this.balance}`);
  }
}

//creat customer class
class customer {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  mobileNumber: number;
  account: BankAccount;

  constructor(
    firstName: string,
    lastName: string,
    gender: string,
    age: number,
    mobileNumber: number,
    account: BankAccount
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.mobileNumber = mobileNumber;
    this.account = account;
  }
}

//creat bank account
const accounts: BankAccount[] = [
  new BankAccount(1001, 500),
  new BankAccount(1002, 1000),
  new BankAccount(1003, 2000),
];

//creat customers
const customers: customer[] = [
  new customer("Hamzah", "khan", "male", 35, 3473092938, accounts[0]),
  new customer("Asma", "jawed", "Female", 34, 3313092996, accounts[1]),
  new customer("Abdul", "Rasheed", "male", 28, 3003092654, accounts[2]),
];
// Function to interact with bank account

async function service() {
  do {
    const accountNumberInput = await inquirer.prompt({
      name: "accountNumber",
      type: "number",
      message: "Enter your account number:",
    });
    const customer = customers.find(
      (customer) =>
        customer.account.accountNumber === accountNumberInput.accountNumber
    );
    if (customer) {
      console.log(`Welcome, ${customer.firstName} ${customer.lastName} !\n`);
      const answer = await inquirer.prompt([
        {
          name: "select",
          type: "list",
          message: "Select an Operation:",
          choices: ["Deposit", "Withdraw", "Check balance", "Exit"],
        },
      ]);
      switch (answer.select) {
        case "Deposit":
          const depositAmount = await inquirer.prompt([
            {
              name: "amount",
              type: "number",
              message: "Enter the Amount to deposit:",
            },
          ]);
          customer.account.deposit(depositAmount.amount);
          break;
        case "Withdraw":
          const withdrawAmount = await inquirer.prompt([
            {
              name: "amount",
              type: "number",
              message: "Enter the Amount to deposit:",
            },
          ]);
          customer.account.deposit(withdrawAmount.amount);
          break;
        case "Check balance":
          customer.account.checkBalance();
          break;
        case "Exit":
          console.log(`Exiting bank programe...`);
          console.log("\n Thank you for using our services. Have a great day!");
          return;
      }
    } else {
      console.log("Invalid account number. Please try again.");
    }
  } while (true);
}
service()
