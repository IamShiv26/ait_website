const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bp = require('body-parser');
const cp = require('cookie-parser');


app.use(express.static('public'));

app.use(bp.json());
// app.use(cp());


app.get('/index', (req, res) => {
    // console.log(path.join(__dirname, 'public','index.html'));
    res.status(200).sendFile(path.join(__dirname, 'public','index.html'));
})

app.get('/blog', (req, res) => {
    // console.log(path.join(__dirname, 'public','index.html'));
    res.status(200).sendFile(path.join(__dirname, 'public','blog.html'));
})


app.get('/candidate', (req, res) => {
    // console.log(path.join(__dirname, 'public','index.html'));
    res.status(200).sendFile(path.join(__dirname, 'public','candidate.html'));
})

app.get('/contact', (req, res) => {
    // console.log(path.join(__dirname, 'public','index.html'));
    res.status(200).sendFile(path.join(__dirname, 'public','contact.html'));
})

app.get('/elements', (req, res) => {
    // console.log(path.join(__dirname, 'public','index.html'));
    res.status(200).sendFile(path.join(__dirname, 'public','elements.html'));
})

app.get('/job_details', (req, res) => {
    // console.log(path.join(__dirname, 'public','index.html'));
    res.status(200).sendFile(path.join(__dirname, 'public','job_details.html'));
})

app.get('/jobs', (req, res) => {
    // console.log(path.join(__dirname, 'public','index.html'));
    res.status(200).sendFile(path.join(__dirname, 'public','jobs.html'));
})

app.get('/single-blog', (req, res) => {
    // console.log(path.join(__dirname, 'public','index.html'));
    res.status(200).sendFile(path.join(__dirname, 'public','single-blog.html'));
})

// app.get('/loginsignup', (req, res) => {
//     // console.log(path.join(__dirname, 'public','index.html'));
//     res.status(200).sendFile(path.join(__dirname, 'public','loginsignup.html'));
// })

// app.get('/users', (req, res) => {
//     const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json')));
//     console.log(users);
//     // const email_id = Object.keys(users);
//     // console.log(email_id);
//     res.status(200).json(users);

// })

app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public','error.html'));
})


app.listen(3000, () => console.log("listening on port 3000"));