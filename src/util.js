function displayOnHTML(data) {
return `<html lang="en">

    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./output.css" />
        <title>My Team</title>
    </head>

    <body>
        <header class="jumbotron">
            <h1 style="text-align: center;">My Team</h1>
        </header>

        <div class="container">
            <div class="row">
                <div class="col">
                    <section style="display: flex;flex-wrap: wrap">
                        ${data.managers.map((value) => displayEmployeeCard(value))}
                        ${data.engineers.map((value) => displayEmployeeCard(value))}
                        ${data.interns.map((value) => displayEmployeeCard(value))}
                    </section>
                </div>
            </div>
        </div>
    </body>
</html>`;
}

function displayEmployeeInfo(employee) {
    let lastInfo;
    if(employee.getRole() === "Manager") {
        lastInfo = `<li class="list-group-item">${"Office Number: " + employee.getOfficeNumber()}</li>`;
    }

    if(employee.getRole() === "Engineer") {
        lastInfo = `<li class="list-group-item"><a href="https://github.com/${employee.getGithub()}" target="_blank">${"GitHub: " + employee.getGithub()}</a></li>`
    }

    if (employee.getRole() === "Intern") {
        lastInfo = `<li class="list-group-item">${"School: " + employee.getSchool()}</li>`;
    }

    return `<li class="list-group-item">${"ID: " + employee.getId()}</li>
            <li class="list-group-item"><a href = "mailto: ${employee.getEmail()}">${"Email: " + employee.getEmail()}</a></li>
            ${lastInfo}
    `;
}

function displayEmployeeTitle(employee) {
    return  `<header class="card-header">
                    <p>
                        ${employee.getName()}
                    </p>
                
                    <p>
                        ${employee.getRole()}
                    </p>
                </header>`;             
}

function displayEmployeeCard(employee) {
    return  `<section class="card" style="min-width: 18rem; margin-right: 1%; margin-top: 1%;">
                ${displayEmployeeTitle(employee)} 
                <section>
                    <ul class="list-group list-group-flush">
                        ${displayEmployeeInfo(employee)}
                    </ul>
                </section>
            </section>`;
}

module.exports = displayOnHTML;