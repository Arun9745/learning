const numbers=[1,2,3,4,5,6,7,8,9];
let sqrt=numbers.map((value)=>{
    return Math.sqrt(value).toFixed(2);
});
console.log(sqrt )

const users=[
    {full_name:"Arun",age:17,city:"Salem",salary:20000},
    {full_name:"prasanth",age:23,city:"cbe",salary:20000},
    {full_name:"ravi",age:18,city:"pall",salary:20000},
    {full_name:"joe",age:20,city:"tir",salary:20000},
    {full_name:"kiru",age:25,city:"udt",salary:20000},
    {full_name:"ban",age:10,city:"salem",salary:20000},
];
console.log(users);
 
let eligible=users.map((user)=>({
    ... users,
    status:user.age>=18?"Eligible" : "Not Eligible"

}));
console.table(eligible)
