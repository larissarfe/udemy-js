

// Mark and John are trying to compare their BMI, which is calculated using the formula
// BMI = mass / height ** 2 = mass / (height * height)

// 1- store mark`s and jOhn`s mass and height in variables 

// 2- calculate both BMIs using the formula 

// 3- create a boolean variable 'markHigherBMI' containf information about whether Mark has a higher BMI than john 



const johnMass = 92;
const johnHeight = 1.95;

const markMass = 78;
const markHeight = 1.69;

const bmiMark = markMass / markHeight ** 2;
const bmiJohn = johnMass / johnHeight ** 2;

const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);

if(markHigherBMI){
    console.log("Mark's BMI is higher than John's");

} else {
    "John's BMI is higher than Mark's" ;
}


