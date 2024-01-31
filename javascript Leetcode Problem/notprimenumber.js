const lower=1, higher=100;
for(let i=lower;i<=higher;i++){
    let flag=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            console.log(i)
            break;
        }
    }
    if(i>1 && flag==0){
      flag=1;
    }
}