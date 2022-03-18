const fs = require("fs"); //type common.js


const date_Time = new Date().toLocaleString();

//To create a file date-time.txt with timestamp details

fs.writeFile("current date-time.txt", date_Time, (err) => {
  console.log(`Date and Time ${date_Time}`);
  if (err) {
    console.log(err);
  }
});


//To retrieve the data from a folder and
// create a folder with files
const content = `💕💕💕💕👩‍❤️‍👨👩‍❤️‍👨👩${date_Time}👩‍❤️‍👨👩‍❤️‍👨❤️❤️❤️❤️`;
for(let i = 1;i <= 10;i++){
    fs.writeFile(`./folder/text-${i}`,content,(err)=>{
        console.log(`${i} file created ${date_Time}`);
    });

    fs.readFile(`./folder/text-${i}`, "utf-8",(err,data)=>
    {
        console.log(`${data} reading completed from ${i}`);
    })
}