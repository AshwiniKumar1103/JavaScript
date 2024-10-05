let btn1=document.getElementById('btn1');
let btn2=document.getElementById('btn2');
let myHexaCode='0123456789ABCDEF';


const hexCode=()=>{
    let colors="#"
    for(let i=0;i<6;i++){
        colors=colors+myHexaCode[Math.floor(Math.random()*16)];
    }
    return colors;
}
const handleBtn1=()=>{
     const result=hexCode();
     btn1.innerText=result;
    document.getElementById('rgb1').innerText=result;
    let bgcolor=document.getElementById('copyCode').innerText;
    document.body.style=bgcolor;
    console.log(document.body.style);
}
const handleBtn2=()=>{
    const result=hexCode();
    btn2.innerText=result;
    document.getElementById('rgb2').innerText=result;
    let bgcolor=document.getElementById('copyCode').innerText;
    document.body.style=bgcolor;
    console.log();
}

const copyToClipboard=()=>{
    navigator.clipboard.writeText(document.getElementById('copyCode').innerText);
    if (navigator) {
        let copybutton=document.getElementById('copy');
        copybutton.innerText="copied";
        copybutton.style.background='green';
    }
}

document.getElementById('copy').addEventListener('click',copyToClipboard);
btn1.addEventListener('click',handleBtn1);
btn2.addEventListener('click',handleBtn2);