#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

import chalkAnimation from "chalk-animation"

async function welcome () {
    let title = chalkAnimation.rainbow("\t\t\t\tWelcome to AdventureArc!")
    await new Promise((resolve) => {
        setTimeout(resolve,3000);
    });
    title.stop();
}

await welcome()

class Player{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel= this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel=100
    }
}

class Opponent{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel= this.fuel - 25
        this.fuel = fuel
    }
}

let player =await inquirer.prompt(
[
    {
        name:"name",
        type:"input",
        message:(chalk.rgb(153,204,255)("Please Enter your Name:"))
    }
]
)
    
      let opponent = await inquirer.prompt(
        [
            {
                name:"select",
                type:"list",
                message:(chalk.rgb(204,153,255)("Select your Opponent")),
                choices:["Skeleton","Alien","Zombie"]
            }
        ]
      )
        
let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do{
    //skeleton
    if(opponent.select == "Skeleton"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:(chalk.rgb(51,102,255)("What would you like to do?")),
                choices:["Attack","Drink Portion","Run for your Life..."]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.green(`${o1.name} fuel is ${o1.fuel}`));
                if(p1.fuel <= 0){
                    console.log(chalk.red("You Loose, Better Luck Next Time"));
                    process.exit()
                    
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.green(`${o1.name} fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log(chalk.rgb(255,0,255)("You Win"));
                    process.exit()
            }
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.green(`You Drink health Portion, You Fuel is ${p1.fuel}`));
        }
        if(ask.opt == "Run for your Life..."){
            console.log(chalk.red("You Loose, Better Luck Next Time"));
            process.exit()
        }
    }
}
    // alien
    if(opponent.select == "Alien"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:(chalk.rgb(51,102,255))("What would you like to do?"),
                choices:["Attack","Drink Portion","Run for your Life..."]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log((chalk.green)(`${p1.name} fuel is ${p1.fuel}`));
                console.log((chalk.green)(`${o1.name} fuel is ${o1.fuel}`));
                if(p1.fuel <= 0){
                    console.log((chalk.red)("You Loose, Better Luck Next Time"));
                    process.exit()
                    
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log((chalk.green)(`${p1.name} fuel is ${p1.fuel}`));
                console.log((chalk.green)(`${o1.name} fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log(chalk.rgb(255,0,255)("You Win"));
                    process.exit()
            }
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log((chalk.green)(`You Drink health Portion, You Fuel is ${p1.fuel}`));
        }
        if(ask.opt == "Run for your Life..."){
            console.log((chalk.red)("You Loose, Better Luck Next Time"));
            process.exit()
        }
    }
}
   //zombie
   if(opponent.select == "Zombie"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:(chalk.rgb(51,102,255))("What would you like to do?"),
                choices:["Attack","Drink Portion","Run for your Life..."]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log((chalk.green)(`${p1.name} fuel is ${p1.fuel}`));
                console.log((chalk.green)(`${o1.name} fuel is ${o1.fuel}`));
                if(p1.fuel <= 0){
                    console.log((chalk.red)("You Loose, Better Luck Next Time"));
                    process.exit()
                    
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log((chalk.green)(`${p1.name} fuel is ${p1.fuel}`));
                console.log((chalk.green)(`${o1.name} fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log((chalk.rgb(255,0,255))("You Win"));
                    process.exit()
            }
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log((chalk.green)(`You Drink health Portion, You Fuel is ${p1.fuel}`));
        }
        if(ask.opt == "Run for your Life..."){
            console.log((chalk.red)("You Loose, Better Luck Next Time"));
            process.exit()
        }
    }
}
}
while(true)