const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const displayOnHTML = require('./src/util');
const fs = require('fs');

const answerLists = {
    managers: [],
    engineers: [],
    interns: [],
};

let curInputType = "Manager";

const managerQuestionList = [
    {
        type: 'input',
        message: "What is the manager's name?",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "What is the manager's employee ID?",
        name: 'managerEID',
    },
    {
        type: 'input',
        message: "What is the manager's email address?",
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'managerOfficeNumber',
    }, 
    {
        type: 'list',
        message: "what type of employees do you want to add?",
        choices: ["Manager", "Engineer", "Intern", "Done"],
        name: "inputType",
    }
];

const engineerQuestionList = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'engineerName',
    },
    {
        type: 'input',
        message: "What is the engineer's employee ID?",
        name: 'engineerEID',
    },
    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub account?",
        name: 'engineerGithub',
    },
    {
        type: 'list',
        message: "what type of employees do you want to add?",
        choices: ["Manager", "Engineer", "Intern", "Done"],
        name: "inputType",
    }
];

const internQuestionList = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'internName',
    },
    {
        type: 'input',
        message: "What is the intern's employee ID?",
        name: 'internEID',
    },
    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'internEmail',
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: 'internSchool',
    },
    {
        type: 'list',
        message: "what type of employees do you want to add?",
        choices: ["Manager", "Engineer", "Intern", "Done"],
        name: "inputType",
    }
];

function getInput(questions) {
    return inquirer.prompt(questions)
            .then((answers) => {
                if (curInputType === "Manager"){
                    let manager = new Manager(answers.managerName, answers.managerEID, answers.managerEmail, answers.managerOfficeNumber);
                    answerLists.managers.push(manager);
                }

                if (curInputType === "Engineer"){
                    let engineer = new Engineer(answers.engineerName, answers.engineerEID, answers.engineerEmail, answers.engineerGithub);
                    answerLists.engineers.push(engineer);
                }

                if (curInputType === "Intern"){
                    let intern = new Intern(answers.internName, answers.internEID, answers.internEmail, answers.internSchool);
                    answerLists.interns.push(intern);
                }

                curInputType = answers.inputType;
                
                if (answers.inputType === "Manager") {
                    return getInput(managerQuestionList);
                } else if (answers.inputType === "Engineer") {
                    return getInput(engineerQuestionList);
                } else if (answers.inputType === "Intern") {
                    return getInput(internQuestionList);
                } else {
                    return;
                }
            })
}

function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, () => console.log("Done"));
}

function init() {
    getInput(managerQuestionList)
        .then(() => {
            let htmlFile = displayOnHTML(answerLists);
            writeToFile("./dist/output.html", htmlFile);
        })
}

init();
