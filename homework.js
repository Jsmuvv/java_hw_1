// Day 2 Homework

// Question 1

var dogNames = ["Max","Fido","Gizmo","Nala"]

var teststring = "Hello, my dog is Max, and they have purple eyes!"

let ex1 = dogNames.filter(dog => teststring.includes(dog))
console.log(ex1)

var teststring2 = "My dog is fast, her name is Tippi"

let ex2 = dogNames.filter(dog => teststring2.includes(dog))
console.log(ex2)

// Question 2

var heightInInches = [66,64,60,52,72,80,51]

let heightsInFeet = heightInInches.map(inches => inches/12)
console.log(heightsInFeet)

// Question 3

var tmnt = ["Leonardo","Michelangelo","Donatello","Raphael"]

console.log(tmnt.map(turtle => (turtle[turtle.length-1]==='o') ? turtle + ' is eating pizza': turtle + ' is being rude'))

// question 4

var findAMax = [123,5436,45784,1234,34,65,234125,645,3452,13216,49]

let leader = 0;
for (let num of findAMax){
    if (num > leader){
        leader = num
    }
}

console.log(leader)


// Question 5

// var bingo = "B-I-N-G-O"
// var ognib = ""
// for (let i=bingo.length-1;i>=0;i++){
//     ognib+=(bingo[i])
// }

// bingo value is B-I-N-G-O

// ognib value is "O-G"

// i value is 5