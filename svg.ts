import magick from "imagemagick"
import fs from "fs"
import ejs, { RenderFileCallback } from "ejs"


ejs.renderFile("./template/simple.ejs",{

    },
    (e,s)=>{
        fs.writeFileSync("out.svg",s);
    });




