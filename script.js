function clock(){
    let datenow = new Date();
// console.log(datenow.getHours());
// console.log(datenow.getMinutes());
// console.log(datenow.getSeconds());
let min=datenow.getMinutes();
let hour=datenow.getHours();
let sec=datenow.getSeconds();
let flag="PM";
if(hour == 0){ // 0=12بليل

    hour=12;
    // flag="AM";
}
if(hour > 12){ // بهد الظهر
    hour-=12;
    flag="Pm";


}else{
    flag="Am"
}
if(hour < 10){
    hour= "0" + hour;

}
if(sec < 10){
    sec= ` 0${sec}`;

}

// setTimeout(() => {
//     clock();
// }, 1000);
// setInterval(() => {
//     clock();
// }, 1000);
document.querySelector(".clock").innerHTML=` ${hour}:${min}:${sec}  ${flag} `;

}
setInterval(() => {
    clock();
    
}, 1000);


