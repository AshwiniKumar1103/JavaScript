let Div = document.getElementById("stopWatch");
let ResetValue=0;
let IntervalId;
Div.innerHTML = `<div><h1 class="timmer" id="timmer">${ResetValue}</h1></div>
<div><button id="start">Start</button>
<button id="stop">Stop</button></div>
<div><button id="reset">Reset</button>
<button id="getTime">Get Time</button></div>
<div><button id="clearTime">Clear Time</button></div>`;

const stopWatchStart=()=>{
    IntervalId= setInterval(()=>{
        ResetValue++;
        console.log();
        document.getElementById('timmer').innerText=ResetValue;
    },1000)
}

const stopWatchStopped=()=>{
    clearInterval(IntervalId);
}

const stopWatchReset=()=>{
    stopWatchStopped();
    ResetValue=0;
    document.getElementById('timmer').innerText=ResetValue;
}

const stopWatchGetTime=()=>{
    let newElement=document.createElement('p');
    newElement.innerText=ResetValue;
    let newDiv=document.createElement('div');
    newDiv.className='newDiv';
    newDiv.appendChild(newElement);
    document.getElementById('stopWatch').appendChild(newDiv);
}

const stopWatchClearTime=()=>{
    for(let element of document.querySelectorAll('.newDiv')){
        element.remove();
    }
}


document.getElementById('clearTime').addEventListener('click',stopWatchClearTime);
document.getElementById('getTime').addEventListener('click',stopWatchGetTime);
document.getElementById('reset').addEventListener('click',stopWatchReset);
document.getElementById('stop').addEventListener('click',stopWatchStopped);
document.getElementById('start').addEventListener('click',stopWatchStart);

