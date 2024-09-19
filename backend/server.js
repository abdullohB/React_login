

const express= require('express');
const mysql =require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json())

const port = 3010;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '8889',
    password: 'root',
    database: 'singup'
});

db.connect(function(err) {
    if (err) {
        console.log("Error connecting to the database:", err);
    } else {
        console.log("Connected to the database");
    }
});



//********************************* Inser  */
app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (name, email ,password) VALUES (?, ?,?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Error inserting data" });
        }
        return res.json(data);
    });
});

app.post('/insert', (req, res) => {
    const sql = "INSERT INTO detail (sex, age ,date) VALUES (?, ?,?)";
    const values = [
        req.body.sex,
        req.body.age,
        req.body.date
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Error inserting data" });
        }
        return res.json(data);
    });
});
//********************************************  insert  */


//************************************select  table */
app.get('/users', (req,res)=>{
    const sql = "SElECT * FROM login";
    db.query(sql, (err,data)=>{
      if(err) return res.json(err);
      return res.json(data);
    })
  })

  app.get('/detail', (req,res)=>{
    const sql = "SElECT * FROM detail";
    db.query(sql, (err,data)=>{
      if(err) return res.json(err);
      return res.json(data);
    })
  })





//************************************select  table */
// app.listen(8081,() =>{
//     console.log("listening");
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/test', (req, res) => {
    res.send('Server is up and running');
});
