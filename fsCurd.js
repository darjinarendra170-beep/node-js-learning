const fs = require("fs");

// fs.writeFileSync("files/banana.txt","this is a apple");

// fs.unlinkSync("files/banana.txt");

// const data = fs.readFileSync("files/apple.txt","utf-8");

// console.log(data);

// fs.appendFileSync("files/apple.txt","  and this is good for health");


const operation = process.argv[2];

if(operation=="write"){
    const name = process.argv[3];
    const content = process.argv[4];
    fs.writeFileSync("files/"+name+".txt",content);
}
else if(operation=="read"){
    const name = process.argv[3];
    
    console.log(fs.readFileSync("files/"+name+".txt","utf-8"));
}
else if(operation=="update"){
    const name = process.argv[3];
    const content = process.argv[4];
    fs.appendFileSync("files/"+name+".txt",content);
    console.log(fs.readFileSync("files/"+name+".txt","utf-8"));
    

}
else if(operation=="delete"){
    const name = process.argv[3];
    
    fs.unlinkSync("files/"+name+".txt");
}
else{
    console.log("operation not found ");
}
