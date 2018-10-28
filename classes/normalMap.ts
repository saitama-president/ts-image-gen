
/*
• 赤色成分R→0～255(8Bit）の値を 法線ベクトルX成分の - 1.0～1.0 （中心0.0）に標準化しています。
• 緑色成分G→0～255(8Bit）の値を 法線ベクトルY成分の - 1.0～1.0 （中心0.0）に標準化しています。
• 青色成分B→0～255(8Bit）の値を 法線ベクトルZ成分の0～1.0 （中心0.5）に標準化しています。（平面は常にZ + 方向を向いている）
*/

import jimp from "jimp";
import * as m3 from "math3d";





export function normal2Color(
    x:number,
    y:number,
    z:number
){
    jimp.rgbaToInt(x,y,z,0xff);
}