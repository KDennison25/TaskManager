// TASK MANAGER

// Using a Template Literal because it recognizes line breaks
const menu = `TASK MANAGER;

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Array for storing tasks
const tasks = [
    `Charge MacBook`,
    `Master JavaScript`
]

// For displaying tasks to the user
let showTasks = ``;

// For storing the value of a new task
let newTask;

// For storing the number of the task to be removed
let num;

// For storing the value of the removed task
let removed;

// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable
let userInput = prompt(menu)

// Loops and continues to display the menu until the user ends/closes the Task Manager (Until the user enters CLOSE)
while (userInput !== "CLOSE"){

     
    // CODE TO COMPLETE TASK MANAGER SHOULD BE WRITTEN HERE
    if(userInput === "TASKS"){
        
        for(let i = 1; i < tasks.length; i++){
            showTasks += `${i}: ${tasks[i - 1]}\n`;
            
        }
        
        alert(`Here are the tasks: ${showTasks}`);
        showTasks = ""; 
    }
        else if (userInput === "NEW") {
            
            newTask = prompt(`Please enter the new task:`);
            
            tasks.push(newTask);

            alert(`${newTask} has been added!`);
        }
    

    if (userInput === `REMOVE`) {
        
        

        for (i=0; i < tasks.length; i++){
            showTasks += (i + 1 + `:` + tasks[i] + `\n`)        
        }

        num = prompt(`Please enter a number to remove:\n${showTasks}`)

        removed = tasks[num - 1]

        tasks.splice(num - 1, 1)

        alert(`${removed} has been removed`)

        showTasks = ``
    }
    // Displays the menu again
    userInput = prompt(menu)

    // This break can be commented out after the CLOSE feature is complete
    // break;
}

// Alerts the user that they have closed the program
alert(`Thank you for using Task Manager!`)