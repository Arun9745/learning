let i=1;
while(i<=9){
    console.log(i);
    i++;
}

let table=5;limit=10;i=1;
do{
    console.log(table + "x" + i +"="+(table*i));
    i++;
}while(i<=limit)


let arr=[];
 for(let i=0;i<=99;i+=3){
    arr.push(i);
 }
 console.log(arr)


 let num=[]

 for(let i=0;i<4;i++){
    num.push([]);
    for(let j=0;j<4;j++)
    num[i].push(j);
}
console.table(num)    