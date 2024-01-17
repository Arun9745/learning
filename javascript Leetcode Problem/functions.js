function sum(ss){
    let total=0;
    for(let i=0;i<arguments.length;i++){
        total+=arguments[i];
    }
    return total;
}
console.log(sum(12,45,50));

//Arrow function with map

let numbers=[1,2,3,4,5]
console.log(numbers);
let Doublenumbers=numbers.map(number=>number*2);
console.log(Doublenumbers)

//Arrow function with Filter

let styles=['apple','orange','banana','pinapple']
console.log(styles)
let filterstyles=styles.filter(style=>style.length>=6);
console.log(filterstyles)

//Set time out
/*setTimeout(function(){ console.log("hello world");
},5000);

//set interval
setInterval(function(){ console.log("hello Arun");
},10  00);*/

//ForEach method

const users=[
    {full_name:"Arun",age:23,city:"Salem",salary:20000},
    {full_name:"prasanth",age:23,city:"cbe",salary:20000},
    {full_name:"ravi",age:23,city:"pall",salary:20000},
    {full_name:"joe",age:23,city:"tir",salary:20000},
    {full_name:"kiru",age:23,city:"udt",salary:20000},
    {full_name:"ban",age:23,city:"salem",salary:20000},
];

users.forEach((value)=>{
    console.log(value.full_name);
});