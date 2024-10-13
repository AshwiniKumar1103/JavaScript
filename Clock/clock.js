let div=document.getElementById('container');
const SetClockTime=()=>{
    let currentTime=new Date();
    let AmPm="";
    if (currentTime.getHours()>=12) {
        AmPm="PM";
    }
    else{
        AmPm="AM";
    }
    div.innerText=`${currentTime.toLocaleTimeString()} ${AmPm}`;
}
SetClockTime();

setInterval(()=>{
    SetClockTime();
},1000)