const Stack = require('../models/Stack')
const Card = require('../models/Card')

const quest1 = new Card({
    question: "The name of Sonic's sidekick",
    answer: "Tails (Miles Prower)"
})
const quest2 = new Card({
    question: "In the game Destiny, the name of the guardian's companions built from machinery and the Traveler's light",
    answer: "Ghost"
})
const quest3 = new Card({
    question: "Captain Americas Real Name",
    answer: "Steve Rogers"
})
const quest4 = new Card({
    question: "Meaning of Superman's symbol",
    answer: "Hope"
})
const quest5 = new Card({
    question: "What was Mario's original name",
    answer: "Jumpman"
})
const quest6 = new Card({
    question: "What was Nintendo's first mobile console",
    answer: "The GameBoy"
})
const quest7 = new Card({
    question: "Equation for Area of a Triangle",
    answer: "A = 1/2bh"
})
const quest8 = new Card({
    question: "Mathematics Order of Operations",
    answer: "Parenthesis, Exponents, Multiply, Divide, Add, Subtract"
})
const quest9 = new Card({
    question: "Equation for Circumference of a circle",
    answer: "C = 2 pi r"
})
const quest10 = new Card({
    question: "the 5 Primitive Javascript datatypes are:",
    answer: "String - Number - Boolean - Undefined - Null "
})
const quest11 = new Card({
    question: "For loop vs While loop",
    answer: "a for loop goes a certain number of iterations vs a while loop goes while a condition is is true"
})
const quest12 = new Card({
    question: "Filter() vs find()",
    answer: "Filter() will return all array items that meet a condition vs find will return the first to meet a condition"
})
const quest13 = new Card({
    question: "2 x 2",
    answer: " 4"
})
const quest14 = new Card({
    question: "3 x 5",
    answer: "15"
})
const quest15 = new Card({
    question: "7 x 4",
    answer: "28"
})
const quest16 = new Card({
    question: "6 x 8 ",
    answer: " 48"
})
const quest17 = new Card({
    question: "5 x 5",
    answer: "25"
})
const quest18 = new Card({
    question: "6 x 5",
    answer: "30"
})
const quest19 = new Card({
    question: "7 x 9",
    answer: "63"
})

const set1 = new Stack({
    name: "Fun Trivia",
    stack: [quest1, quest2, quest3, quest4, quest5, quest6]
})
const set2 = new Stack({
    name: "Math Equation",
    stack: [quest7, quest8, quest9]
})
const set3 = new Stack({
    name: "JavaScript",
    stack: [quest10, quest11, quest12]
})
const set4 = new Stack({
    name: "FlashCards",
    stack: [quest13, quest14, quest15, quest16, quest17, quest18, quest19]
})


Stack.deleteMany({})
    .then(() => Card.deleteMany({}))
    .then(() => Card.insertMany([quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10, quest11, quest12, quest13, quest14, quest15, quest16, quest17, quest18, quest19]))
    .then(() => set1.save())
    .then(() => set2.save())
    .then(() => set3.save())
    .then(() => set4.save())
console.log("Data Repopulated")

