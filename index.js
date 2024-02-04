//inquirer code starts here

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs"; 
import { error } from "console";

inquirer
.prompt([
    {message:"Type in your URL:", 
    name:"URL",
}
])
.then((answers) => {
    const url = answers.URL; 
    var qr_svg = qr.image(url);     //qr image code for generating it
qr_svg.pipe(fs.createWriteStream('qr_image.png'));
//Saving the input of the user 
fs.writeFile("URL.txt", url, (err)=>{
        if (err) throw err;
        console.log("The file has been sucessfully Saved");
        });
})
.catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});