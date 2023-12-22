var isPalindrome = function(x) {
    let arr = String(x);
    arr = arr.split("").reverse().join("");
    if(String(x)==arr) return true;
    else return false;
    };