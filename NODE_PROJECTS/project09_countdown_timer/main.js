import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const response = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "Please Enter the amount of Second.",
    validate: (input) => {
        if (isNaN(input)) {
            return "PLease Enter Valid Number";
        }
        else if (input > 60) {
            return "Second must be 60";
        }
        else {
            return true;
        }
    },
});
let input = response.userInput;
function startTime(value) {
    const initialTime = new Date().setSeconds(new Date().getSeconds() + value);
    const intervelTime = new Date(initialTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDifference = differenceInSeconds(intervelTime, currentTime);
        if (timeDifference <= 0) {
            console.log(`Timer has Expired.`);
            process.exit();
        }
        const minutes = Math.floor((timeDifference % (3600 * 24)) / 3600);
        const Seconds = Math.floor(timeDifference % 60);
        console.log(`${minutes.toString().padStart(2, "0")}: ${Seconds.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
