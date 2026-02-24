import fs from "fs";
import path from "path";
const dataFilePath=path.join(process.cwd(),"notes.json");
export const addNote=(note)=>{
    let notes=[];
    if(fs.existsSync(dataFilePath)){
        const data=fs.readFileSync(dataFilePath,"utf-8");
        notes=JSON.parse(data);
    }
    notes.push(note);
    fs.writeFileSync(dataFilePath,JSON.stringify(notes,null,2));
};