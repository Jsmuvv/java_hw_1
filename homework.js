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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// homeWork 2

// Question 1


// Use the array of shop items provided and present the the information in the following format

// =======================================
// Name: 	 Air Max 97
// Price: 	 130
// About: 	 The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. 
// Category: shoes
// =======================================
// Name: 	 Adidas NMD R1
// Price: 	 128
// About: 	 New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.
// Category: shoes
// =======================================
// Name: 	 Gucci Oversize T-shirt with Interlocking G
// Price: 	 580
// About: 	 The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.
// Category: shirts
// =======================================
// Name: 	 Nike Sportswear Club
// Price: 	 18.97
// About: 	 The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.
// Category: shirts
// =======================================
// Name: 	 Spanx Flare Jeans, Vintage Indigo
// Price: 	 148
// About: 	 These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.
// Category: pants
// =======================================
// Name: 	 Bonobos Premium Stretch Jeans
// Price: 	 69
// About: 	 Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.
// Category: pants

var shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

for (let key of shopItems){
    console.log("==============================================")
    console.log(key)
}

// Question 2

// Write a function that parses through the below object and displays all of their favorite food dishes as shown:

// pizza contains:
// Deep Dish
// South Side Thin Crust
// tacos contains:
// Anything not from Taco bell
// burgers contains:
// Portillos Burgers
// ice_cream contains:
// Chocolate
// Vanilla
// Oreo
// shakes contains:
// oberwise contains:
// Chocolate
// dunkin contains:
// Vanilla
// culvers contains:
// All of them
// mcDonalds contains:
// Sham-rock-shake
// cupids_candies contains:
// Chocolate Malt
// Note: The solution should work on any object with values of strings, numbers, objects, and arrays not just this specific object



var hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function parse(obj){
    if (typeof obj ==="string" ){
        console.log(obj)
    } else if (Array.isArray(obj)){
        for (let i of obj){
            parse(i)
        }
    } else if (typeof obj === "object"){
        for (let i in obj){
            console.log(`${i} constains:`)
            parse(obj[i])
        }
    }

}
parse(hwPerson)
// let personList = hwPerson

// personList

// ===============================================================================================================================================================

// Create a base class of GameMember and 2 children classes of Dealer, Player

// both dealer and player have:

// hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers

// hit() : ability to add a random number [1-13] to their hand

// When a Dealer trys to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)

// When a Play hits they can hit as long as their total is under 21

// Use the randomNumber function provided below to gernerate a random number 1-12

let getRandomNumber = () =>Math.floor(Math.random() * 13) + 1;

class GameMember{
    constructor(){
        this.hand = []
    }

    nhand(){
        this.hand = [getRandomNumber(),getRandomNumber()]
        console.log(this.hand)
    }

    hit(){
        if (this.hand.reduce((a,b) => a+b) <= 21){
            this.hand.push(getRandomNumber())
            console.log(this.hand)

        }
    }
}

class dealer extends GameMember{
    hit(){
        if (this.hand.reduce((a,b) => a+b) <= 16){
            this.hand.push(getRandomNumber())
            console.log(this.hand)

        }
    }
}

class player extends GameMember{
    hand(){
        console.log("players Hand:",this.hand)
    }

}

let javan = new player()
let jason = new dealer()
console.log(("==================="))

javan.nhand()
jason.nhand()