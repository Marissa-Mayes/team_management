const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html",);

const render = require("./lib/htmlRenderer");

const writeFileAsync = util.promisify(fs.writeFile);


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

let Team = [];
    start()

function start (){
    console.log ("starting?")
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "what would you like to do?",
        choices: ["build team"]
    }).then(answers=>{
        switch (answers.action) {
            case "build team":
                return needAnswers()
                break;
        }     
        
        

// function again() {
//     inquirer.prompt({
//         name: "again",
//         type: "confirm",
//         message: " want to do something else?",
//     }).then(answers =>{
//         switch (answers.again){
//             case true:
//                 start()
//                 break;
//                 case false:
//                 break;
        
//     }},
function needAnswers() {
    console.log("start")
    return inquirer.prompt({
            name: "action",
            type:"list",
            message: "Who do you want to add to the team?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "done"]
            
        }).then(answers => {
        console.log ("answers")
        switch (answers.action) {
            case "Manager":
                return manager()
                break;
                console.log(answers.action,"manager stored")
                console.log(manager ,"function running?")
                case "Engineer":
                    return engineer()
                    break;
                    
                        case "Intern":
                            return intern()
                            break;
        }
        function manager() {
            return inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Please enter manager's name",
                },
                {
                    type: "input",
                    name: "email",
                    message: "Please enter manager's email",
                },
                {
                    type: "input",
                    name: "id",
                    message: "Please enter manager ID",
                },
                 //The following question is unique to managers only
                {
                    type: "input",
                     name: "officeNumber",
                     message: "Please enter manager's office room number",
                 },
             ])
                 // Creates a new manager based on the input
                 .then(answers => {
                     console.log(answers, "made it")
                     const manager = new Manager(answers.name, answers.id, 
                        answers.email, answers.officeNumber)
                        //made through push process.
                     Team.push(manager)
                     return needAnswers()

                })}
                function engineer() {
                    return inquirer.prompt([
                        {
                            type: "input",
                            name: "name",
                            message: "Please enter Engineer name",
                        },
                        {
                            type: "input",
                            name: "email",
                            message: "Please enter Engineer email",
                        },
                        {
                            type: "input",
                            name: "id",
                            message: "Please enter Engineer ID",
                        },
                         //The following question is unique to managers only
                        {
                            type: "input",
                             name: "github",
                             message: "please enter Engineer's github username",
                         },
                     ])
                         // Creates a new manager based on the input
                         .then(answers => {
                             console.log(answers, "engineer made it")
                             const engineer = new Engineer(answers.name, answers.id, 
                                answers.email, answers.github)
                                //made through push process.
                             Team.push(engineer)
                             return needAnswers()
        
                        })}
                        function intern() {
                            return inquirer.prompt([
                                {
                                    type: "input",
                                    name: "name",
                                    message: "Please enter Intern name",
                                },
                                {
                                    type: "input",
                                    name: "email",
                                    message: "Please enter Intern email",
                                },
                                {
                                    type: "input",
                                    name: "id",
                                    message: "Please enter Intern ID",
                                },
                                 //The following question is unique to managers only
                                {
                                    type: "input",
                                     name: "school",
                                     message: "please enter intern School",
                                 },
                             ])
                                 // Creates a new manager based on the input
                                 .then(answers => {
                                     console.log(answers, "intern made it")
                                     const intern = new Intern (answers.name, answers.id, 
                                        answers.email, answers.school)
                                        //made through push process.
                                     Team.push(intern)
                                     console.log(intern,"make it?")
                                     return needAnswers()
                
                                    })
                                }
                
                                needAnswers()
                                .then(function (answers) {
                                    console.log ("final answers")
                            
                                    const createTeam= render(Team)
                                    return writeFileAsync("output/team.html", createTeam);
                            
                            
                                })
                                .then(function () {
                                    console.log(Team,"Successfully created a team");
                                })});
                                     }})}
                        
                            
            
                            

                        
        
      
    























    

    














                    
    //  function again(){
    //      inquirer.prompt({
    //          name: "again",
    //          type: "confirm",
    //          message: "want to do something else",
            
    //      }).then(answer =>{
    //          switch (answer.again){
    //              case true:
    //                  start ()
    //                  break;
                     
    //          }
    //      })
    //  },


    // function manager() {
    // return inquirer.prompt([
    //     {
    //         type: "input",
    //         name: "name",
    //         message: "Please enter manager's name",
    //     },
    //     {
    //         type: "input",
    //         name: "email",
    //         message: "Please enter manager's email",
    //     },
    //     {
    //         type: "input",
    //         name: "id",
    //         message: "Please enter manager ID",
    //     },
    //     //The following question is unique to managers only
    //     {
    //         type: "input",
    //         name: "officeNumber",
    //         message: "Please enter manager's office room number",
    //     },
    // ])
    //     // Creates a new manager based on the input
    //     .then(answers => {
    //         const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    //         newTeam.push(manager)
    //         return needAnswers()
    //     })});

    

