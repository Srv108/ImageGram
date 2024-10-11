import express from "express";

const PORT = 3000;

const app = express(); // create a server

app.get('/',(req,res) => {
    return res.send("You are at HOME");
})

app.get('/about',(req,res) => {
    return res.json({message : "my name is Saurav"});
})

app.get('/hello',(req,res) => {
    return res.json({message : "Hello World!"});
})

app.listen(PORT,() => {
    console.log(`server is listening on port ${PORT}`);
})


6RR7nuswndFC7vHK