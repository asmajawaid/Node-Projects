import chalk from "chalk";
import inquirer from "inquirer";
// zombie, alien , godzilla
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDerease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponenets {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDerease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let Player1 = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Please Enter Your Name:",
});
let Opponenets1 = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "Select Your Opponenets:",
    choices: ["Zombie", "Godzilla", "Alien"],
});
let p1 = new Player(Player1.name);
let o1 = new Opponenets(Opponenets1.select);
do {
    if (Opponenets1.select == "Zombie") {
        //console.log(`${chalk.green.bold(p1.name)} VS ${chalk.red.bold(o1.name)}`);
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Select Your Opponenets:",
            choices: ["Attack", "Drink Portion", "Run for Your Life..."],
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDerease();
                console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.green.bold(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose the Bettle, Better Luck Next Time."));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDerease();
                console.log(chalk.green.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.red.bold(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold("You WIN."));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.green.bold.italic(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.option == "Run for Your Life...") {
            console.log(chalk.red.bold.italic("You Loose the Bettle, Better Luck Next Time."));
        }
    }
    //Godzilla
    if (Opponenets1.select == "Godzilla") {
        //console.log(`${chalk.green.bold(p1.name)} VS ${chalk.red.bold(o1.name)}`);
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Select Your Opponenets:",
            choices: ["Attack", "Drink Portion", "Run for Your Life..."],
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDerease();
                console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.green.bold(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose the Bettle, Better Luck Next Time."));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDerease();
                console.log(chalk.green.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.red.bold(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold("You WIN."));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.green.bold.italic(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.option == "Run for Your Life...") {
            console.log(chalk.red.bold.italic("You Loose the Bettle, Better Luck Next Time."));
        }
    }
    //Alien
    if (Opponenets1.select == "Alien") {
        //console.log(`${chalk.green.bold(p1.name)} VS ${chalk.red.bold(o1.name)}`);
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Select Your Opponenets:",
            choices: ["Attack", "Drink Portion", "Run for Your Life..."],
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDerease();
                console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.green.bold(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose the Bettle, Better Luck Next Time."));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDerease();
                console.log(chalk.green.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.red.bold(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold("You WIN."));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.green.bold.italic(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.option == "Run for Your Life...") {
            console.log(chalk.red.bold.italic("You Loose the Bettle, Better Luck Next Time."));
        }
    }
} while (true);
