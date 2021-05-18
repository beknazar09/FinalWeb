const express = require('express')
const bodyParser = require('body-parser')
const { Client } = require('pg')
const app = express()
const newConnection = require('./dbConnect.js')
const cors = require('cors')

var nextTaskID = 0;

var client = new Client(newConnection.newCon());
client.connect()

app.use(cors({
	origin: '*'
}))
app.use(bodyParser.urlencoded({extended: false}))

app.listen(3000, () => {
    console.log("Listening on Port 3000")
})

async function getTasks() {
    let tasks = await client.query('SELECT * FROM "ToDo" ORDER BY "DueDate" ASC, "Implementation" ASC, "Impact" DESC')
    return tasks.rows;
}

app.get('/api/tasks', async (req, res) => {
    let myTasks = await getTasks();
    if (myTasks.length)
        nextTaskID = myTasks[myTasks.length - 1].ID
    res.send(myTasks)
})

app.delete('/api/delete/:id', async (req, res) => {
    await client.query('DELETE FROM "ToDo" WHERE "ID"= $1', [req.params.id])
    nextTaskID--
    res.send(await getTasks())
})

app.post('/api/add', async (req, res) => {
    let impl = parseInt(req.body.Implementation, 10);
    let impa = parseInt(req.body.Impact, 10);
    await client.query(`INSERT INTO "ToDo" ("TaskName", "Implementation", "Impact", "ID", "DueDate") VALUES ('${req.body.Task_Name}', ${impl}, ${impa}, ${++nextTaskID},'${req.body.Due_Date}')`)
    res.redirect('http://localhost:8080')
})
