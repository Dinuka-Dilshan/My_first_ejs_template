const express = require("express");
const ejs = require("ejs");

const app = express();
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');
//to say that we are using static files in the public folder
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index",{
        displayDate:`${getDate()}..!`
     });
    
 });
 
 function getDate(){

    let sendDate;
    let today = new Date().getDay();
  
    switch (today) {
        case 0:
            sendDate = "Sunday";
            break;
        case 1:
            sendDate = "Monday";
            break;
            
        case 2:
            sendDate = "Tuesday";
            break;
            
        case 3:
            sendDate = "Wednesday";
            break;    
    
        case 4:
            sendDate = "Thursday";
            break;
            
        case 5:
            sendDate = "Friday";
            break;
            
        case 6:
            sendDate = "Saturday";
            break;
  
        default:
            console.log(today);
    }
  
    return sendDate;
  }
app.listen(3000,()=>{
    console.log("server started on port 3000");
});
