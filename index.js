import { addNote,listNotes } from "./notes.js";
console.log("CLI STARTED");
const command=process.argv[2];
const argument=process.argv[3];
if(!command){
    console.log("No command provided.Please enter a command");
    process.exit(0);
}
if(command==="add"){
    if(!argument){
        console.log("Please provide a note to add");
        process.exit(0);
    }
    addNote(argument);
    console.log("Note added successfully");
}
else if(command==='list'){
    listNotes();}
    else {
        console.log("Unknown command.Available commands:add,list");
    }

