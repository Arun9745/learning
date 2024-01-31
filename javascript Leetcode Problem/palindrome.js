 const x="madam";
    let arr = String(x);
    arr = arr.split("").reverse().join("");
    if(String(x)==arr){
        console.log("palindrome");
    }
    else{
        console.log("not Palindrome");
    } 
    