const Set = require('../models/Set')
const QA = require('../models/QA')

const quest1 = new QA({
    question: "The name of Sonic's sidekick",
    answer: "Tails (Miles Prower)"
})
const quest2 = new QA({
    question: "In the game Destiny, the name of the guardian's companions built from machinery and the Traveler's light",
    answer: "Ghost"
})
const quest3 = new QA({
    question: "Captain Americas Real Name",
    answer: "Steve Rogers"
})
const quest4 = new QA({
    question: "Meaning of Superman's symbol",
    answer: "Hope"
})
const quest5 = new QA({
    question: "What was Mario's original name",
    answer: "Jupman"
})
const quest6 = new QA({
    question: "What was Nintendo's first mobile console",
    answer: "The GameBoy"
})
const quest7 = new QA({
    question: "Equasion for Area of a Triangle",
    answer: "A = 1/2bh"
})
const quest8 = new QA({
    question: "Mathmatics Order of Operations",
    answer: "Parenthesis, Exponents, Multiply, Divide, Add, Subtract"
})
const quest9 = new QA({
    question: "Equasion for Circumference of a circle",
    answer: "C = 2 pi r"
})
const quest10 = new QA({
    question: "the 5 Primitive Javascript datatypes are:",
    answer: "String - Number - Boolean - Undefined - Null "
})
const quest11 = new QA({
    question: "For loop vs While loop",
    answer: "a for loop goes a certain number of iterations vs a while loop goes while a condition is is true"
})
const quest12 = new QA({
    question: "Filter() vs find()",
    answer: "Filter() will return all array items that meet a condition vs find will return the first to meet a condition"
})
const quest13 = new QA({
    question: "Im a question 1",
    answer: "Im answer 1"
})
const quest14 = new QA({
    question: "Im a question 2",
    answer: "Im answer 2"
})
const quest15 = new QA({
    question: "Im a question 3",
    answer: "Im answer 3"
})
const quest16 = new QA({
    question: "Im a question 4",
    answer: "Im answer 4"
})
const quest17 = new QA({
    question: "Im a question 1",
    answer: "Im answer 1"
})
const quest18 = new QA({
    question: "Im a question 2",
    answer: "Im answer 2"
})
const quest19 = new QA({
    question: "Im a question 3",
    answer: "Im answer 3"
})
const ques20 = new QA({
    question: "Im a question 4",
    answer: "Im answer 4"
})
const quest21 = new QA({
    question: "Im a question 1",
    answer: "Im answer 1"
})
const quest22 = new QA({
    question: "Im a question 2",
    answer: "Im answer 2"
})
const quest23 = new QA({
    question: "Im a question 3",
    answer: "Im answer 3"
})
const quest24 = new QA({
    question: "Im a question 4",
    answer: "Im answer 4"
})
const quest25 = new QA({
    question: "Im a question 1",
    answer: "Im answer 1"
})
const quest26 = new QA({
    question: "Im a question 2",
    answer: "Im answer 2"
})
const quest27 = new QA({
    question: "Im a question 3",
    answer: "Im answer 3"
})
const quest28 = new QA({
    question: "Im a question 4",
    answer: "Im answer 4"
})
const quest29 = new QA({
    question: "Im a question 1",
    answer: "Im answer 1"
})
const quest30 = new QA({
    question: "Im a question 2",
    answer: "Im answer 2"
})
const quest41 = new QA({
    question: "Im a question 3",
    answer: "Im answer 3"
})
const quest42 = new QA({
    question: "Im a question 4",
    answer: "Im answer 4"
})
const quest43 = new QA({
    question: "Im a question 4",
    answer: "Im answer 4"
})
const quest44 = new QA({
    question: "Im a question 2",
    answer: "Im answer 2"
})
const quest45 = new QA({
    question: "Im a question 3",
    answer: "Im answer 3"
})
const quest46 = new QA({
    question: "Im a question 4",
    answer: "Im answer 4"
})
const quest47 = new QA({
    question: "Im a question 4",
    answer: "Im answer 4"
})
const quest48 = new QA({
    question: "Im a question 2",
    answer: "Im answer 2"
})
const quest49 = new QA({
    question: "Im a question 3",
    answer: "Im answer 3"
})
const ques50 = new QA({
    question: "Im a question 4",
    answer: "Im answer 4"
})

const set1 = new Set({
    name: "Fun Trivia",
    stack: [quest1, quest2, quest3, quest4, quest5, quest6]
})
const set2 = new Set({
    name: "Math Equasions",
    stack: [quest7, quest8, quest9]
})
const set3 = new Set({
    name: "JavaScript",
    stack: [quest10, quest11, quest12]
})


//     , quest13, quest14, quest15, quest16, quest17, quest18, quest19, quest20,
//     quest21, quest22, quest23, quest24, quest25, quest26, quest27, quest28, quest29, quest30, 
//     quest31, quest32, quest33, quest34, quest35, quest36, quest37, quest38, quest39, quest40,
//     quest41, quest42, quest43, quest44, quest45, quest46, quest47, quest48, quest49, quest50

Set.deleteMany({})
    .then(() => QA.deleteMany({}))
    .then(() => QA.insertMany([quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10, quest11, quest12]))
    .then(() => set1.save())
    .then(() => set2.save())
    .then(() => set3.save())
console.log("Data Repopulated")

