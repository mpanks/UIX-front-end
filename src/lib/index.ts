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
  ];

interface report{
    name: string,
    datetime:Date,
    confidence: number,
    additional:string,
};
let reports: report[]=[
    {"name": "MATTHEW PANKS", "datetime":new Date("04/16/2024, 13:25"), "confidence": 5, "additional":"asd"},
    {"name": "ASH ENTWISLE", "datetime": new Date("04/15/2024, 16:03"), "confidence":4, "additional":""},
    {"name": "FILIUS BONACCI", "datetime": new Date("04/01/1235, 13:05"), "confidence":5, "additional":"1, 2, 3, 5, 8, 13, 21, 34, 55"},
]
export{
    meetings,
    type meeting,
    reports,
    type report,
}
