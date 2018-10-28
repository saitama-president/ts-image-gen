import jimp from "jimp"
import mag from "imagemagick"

//convert -size 960x1136 "xc:#00ff00" launch.png
let width=1<<4;
let height=1<<4;

let j=new jimp(width,height,(e:Error,i:jimp)=>{
  //console.dir(i);
  for(var y=0;y<height;y++)
    for(var x=0;x<width;x++){

      
      jimp.rgbaToInt(
        x<<4,
        y<<4,
        //0x88,
        0x88,
        0xFF,
        (e,a)=>{
          console.log(a.toString(16));
          j.setPixelColor(a,x,y);

        }
      );
    }

  i.write("out.png");
  i.write("out.normal.png");
})