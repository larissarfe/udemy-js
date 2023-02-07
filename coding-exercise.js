// DOLPHINS AND KOALAS : 

// Each team competes 3 times, and then the avarage of the  scores is calculated (so one avarage score per team).

// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins. 

// 1- create an arrow function 'calcAverage' to calculate the average of 3 scores;

// 2- use the function to calculate the average for both teams 

// 3- create a function 'checkWinner' that takes the average score of each team as parameters 
// ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, 
// acording to the rule above. ex Koalas win (30 vs. 13)

// 4- use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2 

// TEST DATA: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 


//const calcAverage = (scoreKoala, scoreDolphin) => {
  //  const averageKoala = scoreKoala / 3; 
   // const averageDolphin = scoreDolphin / 3; 
    //return averageKoala, averageDolphin; 
    
//}

//calcAverage(65 + 54 + 49, 44 + 23 + 71);
//console.log(calcAverage)
const calcAverage = (a, b, c) => (a + b + c) / 3
   


const scoreDolphins = calcAverage(44, 23, 71);
console.log(scoreDolphins);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreKoalas);

function checkWinner (averageDolphin, averageKoala){
    if (averageDolphin >= 2 * averageKoala){
        console.log("Dolphins are the winner");
    } else if (averageKoala >= 2 * averageDolphin){
        console.log("Koalas are the winner");
    } else {
        console.log("No one wins");
    }
      
}

checkWinner(scoreDolphins, scoreKoalas);