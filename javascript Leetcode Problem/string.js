let first_name="Arun";
let last_name="Prasanth"

//concantenation
let c=first_name +" "+ last_name;
console.log(c)

//concat
 let a=first_name.concat(' '+last_name)
 console.log(a)

 //Append
  let v="Joes";
  v+="Tutor";
  console.log(v)

  //length
   let j=first_name.length;
   console.log(j)

   //uppercase
   let k=first_name.toUpperCase();
   console.log(k)

   //index of
   let t=first_name.indexOf('P');
   console.log(t)

   //Substring
   let m;
   let table= "0123456789";
    m=table.substring(2,5);
    console.log(m)

    //Slice
    let g;
    g=table.slice(-3);
    console.log(g)

    //Split
    let r;
    let y="Tutor joes Computer Education";
    r=y.split(" ");
    console.table(r)

    //Padstart Padend
    let q="5"
    q=q.padEnd(3,7)
    console.log(q)

     let w="5"
    w=w.padStart(3,7)
    console.log(w)