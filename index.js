import inquirer from "inquirer";
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    {
        "message":"type in your URL:", 
        "name":"URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('url-qr-image.png'));
    fs.writeFile("URL.txt", url, (err) => {
      if (err) {
        console.error("Error writing URL.txt:", err);
      } else {
        console.log("The file URL.txt has been saved");
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("Something else went wrong:", error);
    }
  });
