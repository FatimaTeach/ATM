#! usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000; // $
let myPin = 12345;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number",
    },
]);
// console.log(pinAnswer.Question1);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
}
else if (pinAnswer.Question1 !== myPin) {
    console.log("Incorrect Pin");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "Select an operation",
        type: "list",
        choices: ["Withdraw", "check balance"],
    },
]);
// console.log(operationAns);
if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number",
        },
    ]);
    // console.log (amountAns.amount);
    //+=,-=,==
    if (amountAns.amount <= myBalance) {
        myBalance -= amountAns.amount;
        console.log("withdraw successful");
        console.log("Your current balance is: $" + myBalance);
    }
    else {
        console.log("Your balance is insufficient");
    }
}
else if (operationAns.operation === "check balance") {
    console.log("your balance is:" + myBalance);
}
