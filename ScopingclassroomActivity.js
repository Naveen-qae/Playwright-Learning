let genderType ="female";

function printGender(){

let color ="brown";

if(genderType.startsWith("female")){

    var  age = 30;
    let color ="pink"
    console.log("color inside the block:", color); 
}
console.log("Age inside function:", age);
console.log("color outside block:", color);
 
}
printGender();
console.log("Global genderType:", genderType );
genderType ="male";
printGender();
console.log("Global genderType after change:", genderType);
