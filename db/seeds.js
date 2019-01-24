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

const set1 = new Set({
    name: "Name of Set 1",
    stack: [quest1, quest2]
})
const set2 = new Set({
    name: "Name of Set 2",
    stack: [quest3, quest4]
})


Set.remove({})
    .then(() => QA.remove({}))
    .then(() => QA.insertMany([quest1, quest2, quest3, quest4]))
    .then(() => set1.save())
    .then(() => set2.save())
console.log("Data Repopulated")

