const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

process.env.ECHO_SVC = process.env.ECHO_SVC || 'http://localhost:3000'
process.env.SERVICE_NAME = process.env.SERVICE_NAME || 'Name'

app.get('/', (req, res) => {
    console.log(`Request recieved`);

    axios.get(`${process.env.ECHO_SVC}/ended`)
        .then(response => {
            console.log(`Successful response from ${process.env.ECHO_SVC}`)
            res.send(`${process.env.SERVICE_NAME} -> ${response.data}`);
        })
        .catch(error => {
            console.log(`Request to ${process.env.ECHO_SVC} failed!`)
            res.status(500).send({ error: `Request to ${process.env.ECHO_SVC} failed!` })
        });
})

app.get('/ended', (req, res) => {
    console.log(`Successful completion`)
    res.send(`${process.env.SERVICE_NAME} ended the chain!`);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))