const arr=["ash","ahzam","shubham"];
const uppercase=arr.map((arr)=>{
    return arr.toUpperCase();
})
console.log(uppercase);
let num=[1,2,3,4,5,6,7,8];
let returnEven=num.map((x)=>{
    if(x%2===0){
        return x;
    }
}).filter((x)=>{
    if(x!==undefined){
        return x;
    }
});
console.log(returnEven)