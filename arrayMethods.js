let age=new Array(1,0,2,3,4,5,6,6,6);
for(let i=1;i<=age.length;i++){
    console.log(age.indexOf(i));
}

const ageFilter=age.filter((arr)=>{
    return arr>2;
})
console.log(`this is agefilter ${ageFilter}`);

age.push(5)
console.log( age);

const uniqueAge=age.filter((item,index,arr)=>{
    console.log(arr.indexOf(item));
    console.log(index);
return arr.indexOf(item)===index;
});
console.log(uniqueAge);

console.log(age.lastIndexOf(5,5));
age.pop(5);
console.log( age);

age.shift();
console.log( age);

age.splice(1,2,5);
console.log( age);
const ageMapping =age.map((age,index,arr)=>{
    return `${age} ${index} ${arr}`;
});
console.log(ageMapping);