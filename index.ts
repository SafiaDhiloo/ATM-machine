#! /usr/bin/env node
import inquirer from "inquirer";

//welcome statement
console.log("welcome to My ATM-Machine");

let myBalance =10000;
let myPin = 5987;

let pinAnswers= await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message:"Enter your pin code:",
    }
]) 
if (pinAnswers.pin === myPin){
    console.log("pin  is correct,Login Successfully!");

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select one operation",
            choices: ["withdraw Amount","check Balance"]
        }
    ])
if (operationAns.operation === "withdraw Amount"){
    let amountAns =await inquirer.prompt([
        {
           name: "amount",
           type: "number",
           message:" Enter amount to withdraw:" 
        }
    ])
    if (amountAns.amount > myBalance){
        console.log("Insufficient Balance");
    }
    else {
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount}withdraw Successfully`);
        console.log(`your current Balance is: ${myBalance}`);
    }
}
else if(operationAns.operation ==="check Balance"){
    console.log(`your Account Balance is: ${myBalance}`);
}
}
else{
    console.log("pin is incorrect,Try Again");
}

