const number=parseInt(prompt('Enter the number of terms: '));
let n1=0,n2=1,n;

for(let i=1;i<=n;i++){
    console.log("Fibonacci Series")
    n=n1+n2;
    n1=n2;
    n2=n;
}