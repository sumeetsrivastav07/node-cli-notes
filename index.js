import { addNote } from "./notes.js";
console.log("CLI STARTED");
const command=process.argv[2];
const argument=process.argv[3];
if(!command){
    console.log("No command provided.Please enter a command");
    process.exit(0);
}
if(command==="add"){
    addNote(argument);
    console.log("Note added successfully");
}
