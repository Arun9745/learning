var d= new Date();
console.log(d)


var a=10;
a+=20;
a-=5;
console.log(a)

const age=35;
if(age>=18 && age<=30){
      console.log("Eligible")
}
else{
      console.log("Not Eligible")
}

function welcome(name){
      const result=name?name : " noname";
      console.log("welcome"+ result);
}
welcome();

const mark=95;
const result=mark>=90? "A Grade" : mark>=80? "B Grade":"C Grade";
console.log("Grade:" + result)

let eng=95,tam=95,math=85;
let total=eng + tam + math;
let avg=total /3;
console.log("total :"+total)
console.log("percentage :"+avg.toFixed(2))
if(eng>=35 && tam>=35 && math>=35){
      console.log("Result : Pass");
      if(avg>=91 && avg<=100){
            console.log("Grade : A")
      }
      else if(avg>=81 && avg<=90){
            console.log("Grade : b")
      }
       else if(avg>=71 && avg<=80){
            console.log("Grade : c")
      }
      else{
            console.log("Grade : D")
      }
}
else {
      console.log("Result : Fail")
}
