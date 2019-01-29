const Set = require('../models/Set')
const QA = require('../models/QA')

const quest1 = new QA({
    question: "Im a question 1",
    answer: "Im answer 1"
})
const quest2 = new QA({
    question: "Im a question 2",
    answer: "Im answer 2"
})
const quest3 = new QA({
    question: "Im a question 3",
    answer: "Im answer 3"
})
const quest4 = new QA({
    question: "Im a question 4",
    answer: "Im answer 4"
})
const quest5 = new QA({
    question: "Im a question 1",
    answer: "Im answer 1"
})
const quest6 = new QA({
    question: "Im a question 2",
    answer: "Im answer 2"
})
const quest7 = new QA({
    question: "Im a question 3",
    answer: "Im answer 3"
})
const quest8 = new QA({
    question: "Im a question 4",
    answer: "Im answer 4"
})
const quest9 = new QA({
    question: "Im a question 1",
    answer: "Im answer 1"
})
const quest10 = new QA({
    question: "Im a question 2",
    answer: "Im answer 2"
})
const quest11 = new QA({
    question: "Im a question 3",
    answer: "Im answer 3"
})
const quest12 = new QA({
    question: "Im a question 4",
    answer: "Im answer 4"
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
const ques20 = new QA({
    question: "Im a question 4",
    answer: "Im answer 4"
})

const set1 = new Set({
    name: "Name of Set 1",
    stack: [quest1, quest2]
})
const set2 = new Set({
    name: "FlashCard Review (3 and 5 times tables)",
    stack: [quest3, quest4]
})


Set.remove({})
    .then(() => QA.remove({}))
    .then(() => QA.insertMany([quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10,
    quest11, quest12, quest13, quest14, quest15, quest16, quest17, quest18, quest19, quest20,
    quest21, quest22, quest23, quest24, quest25, quest26, quest27, quest28, quest29, quest30, 
    quest31, quest32, quest33, quest34, quest35, quest36, quest37, quest38, quest39, quest40]))
    .then(() => set1.save())
    .then(() => set2.save())
console.log("Data Repopulated")

