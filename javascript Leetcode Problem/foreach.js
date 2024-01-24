const fruits=['apple','orange','banana','cherry']
console.log(fruits);
fruits.forEach(fruit=>console.log(fruit));

const numbers=[1,2,3,4,5]
let total=0;
numbers.forEach(number=>{
    total+=number;
});
console.log(total)

//Double numbers
const doublenumbers=[];
numbers.forEach(number=>{
    doublenumbers.push(number*2);
});
console.log(doublenumbers)

//find the max value
console.log(numbers);
let max=numbers[0];
numbers.forEach(number=>{
    if(number>max){
        max=number;
    }
});
console.log(max)

//filter an array

const num=[2,3,4,5,6,7,8];
let evennum=[];
num.forEach(num=>{
    if(num%2===0){
        evennum.push(num);
    }
});
console.log(evennum)

//update an array
const upper=['arun','prasanth'];
upper.forEach((upper,index)=>{
upper[index]=upper .toUpperCase();
});
console.log(upper)