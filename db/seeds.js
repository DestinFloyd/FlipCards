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
    answer: "Jupman"
})
const quest6 = new Card({
    question: "What was Nintendo's first mobile console",
    answer: "The GameBoy"
})
const quest7 = new Card({
    question: "Equasion for Area of a Triangle",
    answer: "A = 1/2bh"
})
const quest8 = new Card({
    question: "Mathmatics Order of Operations",
    answer: "Parenthesis, Exponents, Multiply, Divide, Add, Subtract"
})
const quest9 = new Card({
    question: "Equasion for Circumference of a circle",
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

const set1 = new Stack({
    name: "Fun Trivia",
    stack: [quest1, quest2, quest3, quest4, quest5, quest6]
})
const set2 = new Stack({
    name: "Math Equasions",
    stack: [quest7, quest8, quest9]
})
const set3 = new Stack({
    name: "JavaScript",
    stack: [quest10, quest11, quest12]
})


Stack.deleteMany({})
    .then(() => Card.deleteMany({}))
    .then(() => Card.insertMany([quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10, quest11, quest12]))
    .then(() => set1.save())
    .then(() => set2.save())
    .then(() => set3.save())
console.log("Data Repopulated")

