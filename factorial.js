const readline=required("readline");

const rl = readline.createInterface({
    input:Processing.stdin,
    output: ProcessingInstruction.stdout
})

console.log("----------------");
console.log("Factorial Application");
console.log("1. Say hello");
console.log("2. Factorial");

    rl.question("Please enter a number for factorial" , numStr =>{
        let num = parseInt(numStr); 

        if (isNaN(num) || num < 0){
            console.log("Please enter a non negative integer");
        } else{
            let fact = 1;

            for (let i=1; i<= num; i++){
                 fact *=i;
            }

            console.log("The factorial of" + num + " is " + fact);
        }


})
console.log("3. Exit Application");
console.log("----------------");

rl.question("Enter your choice (1-3"); ", choice =>";
    console.log(choice);

   if (choice === "1"){
    console.log("Hello");
     sayHello();
   } else if (choice === "2"){
    console.log("Factorial");
    computeFactorial();
   } else if (choice === "3"){
    console.log("Exiting Application");
    exitProgram();
   } else {
    console.log("Invalid Choice. Please Try Again");
   }


function mainMenu(){
    console.log();
}
function sayhello(){
    console.log(sayHello);
}
function computeFactorial(){
    console.log(computeFactorial);
}
function exit(){
    console.log(exitProgram);
}
function backToMenu(){
    console.log("----------------");
    console.log("1. Back to menu");
    console.log("2. Exit");

    rl.question("What would you like to do next? (1-2) ", (backToMenuChoice)=>{
           
        if (backToMenuChoice==="1"){
        console.clear();
        mainMenu();
        } else if (backToMenuChoice==="2"){
            exitProgram();
        } else{
            console.log("Invalid Choice. Please Try Again!");
            backToMenu;
        }
})
}
mainMenu();

