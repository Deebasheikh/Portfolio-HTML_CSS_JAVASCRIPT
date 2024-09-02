//////////slice method///////
// let a = ["uzma", "areeba","kanwal","abdulwassay","abdullah"];
//          0          1      2        3                 4
// let b = a.slice(1,4)
// document.write(b)


// let a = ["uzma", "areeba","kanwal","abdulwassay","abdullah"]
          // -5     -4      -3       -2             -1
//let b = a.slice(1)   ///no limitation print the value at the end of an array
// let b = a.slice(-5,-2) 
// document.write(b)

//////splice////
// let a = ["uzma", "areeba","kanwal","abdulwassay","abdullah"];
       //  0          1      2        3                 4
//splice  (index , how many delete, "new value")
//a.splice(1,0,"yusra")
// a.splice(1,3,"yusra")
// document.write(a)

function reset (){
    document.getElementById("textnum1").value = "0";
    document.getElementById("textnum2").value = "0";
    document.getElementById("textsum").value = "0";
}

function add(){
    let num1 = Number(document.getElementById("textnum1").value);
    let num2 = Number(document.getElementById("textnum2").value);
    let sum = num1 + num2
    document.getElementById("textsum").value = sum

    //    alert (typeof Number(document.getElementById("textnum1").value))
//    let num2 = document.getElementById("textnum2").value 
//    let sum = num1 + num2
   
}

