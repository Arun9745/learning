const lower=2;
const higher=10;
for(let i=lower;i<=higher;i++){
    let flag=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=1;
            break;
        }
    }
}