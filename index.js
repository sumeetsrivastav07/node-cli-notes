console.log("CLI STARTED");
const command=process.argv[2];
if(!command){
    console.log("No command provided.Please enter a command");
    process.exit(0);
}
console.log("Command received",command);
