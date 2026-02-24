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
export const listNotes = () => {
  if (!fs.existsSync(dataFilePath)) {
    console.log("No notes found");
    return;
  }

  const data = fs.readFileSync(dataFilePath, "utf-8");
  const notes = JSON.parse(data);

  if (notes.length === 0) {
    console.log("No notes found");
    return;
  }

  console.log("Your notes:");
  notes.forEach((note, index) => {
    console.log(`${index + 1}. ${note}`);
  });
};