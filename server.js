const express = require('express')
const app = express()
const routes = require('./routes/index')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())



// app.use(express.static(__dirname + '/client/build/'))

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/client/build/index.html')
// })


if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
 }
 app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
 });


app.use('/api', routes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)

}) 
     