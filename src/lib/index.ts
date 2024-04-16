// place files you want to import through the `$lib` alias in this folder.
interface meeting{
    name: string,
    datetime:Date,
    purpose:string,
    additional:string,
};
let meetings: meeting[]= [
    {"name": "JOHN DIXON", "datetime":new Date("11/11/2025, 11:30"), "purpose":"Meeting", "additional":""},
    {"name": "EMMA WATSON", "datetime":new Date("12/11/2025,11:30"), "purpose":"Catchup", "additional":"Pls help"},
    {"name": "ALAN TURING", "datetime":new Date("22/07/2024, 12:00"), "purpose":"Enigma", "additional":"FQGAHW"}, //https://www.101computing.net/enigma-machine-emulator  
  ]
export{
    meetings,
    type meeting,
}
