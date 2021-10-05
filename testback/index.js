const express = require("express")

const app = express();

const port = 8000

app.get('/', (req, res) => {
    return res.send('HI AVINASH BATCHALA')
})

app.get('/signout', (req, res) => {
    return res.send('You are signed out')
})

app.get('/avinash', (req, res) => {
    return res.send('You are visiting Avinash site')
})

app.get('/signup', (req, res) => {
    return res.send('You are signed up')
})
app.listen(port, () => {
    console.log("Server is running at port", port)
})