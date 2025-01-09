import express, { response } from 'express';
import { MongoClient } from 'mongodb';
import ViteExpress from 'vite-express';

const CONNECTION_STRING = "mongodb+srv://jackiealexandar:xFFkcZvDos61TmYB@selvtest.5s5hf.mongodb.net/?retryWrites=true&w=majority&appName=SelvTest";
const client = new MongoClient(CONNECTION_STRING);
const database = client.db("sample_mflix")

// const allUsers = await users.find()

const server = express()
server.get("/message", (_, res) => res.send("Hello from express!"));


server.get('/api/users', async(_,response)  => {
    const users = database.collection("users")
    const userData= await users.find().toArray()
const filteredUserDataJSON = userData.map(user => { return {name:user.name, email: user.email, id: user._id} })


response.json(filteredUserDataJSON)
// response.json(userEmail)
// response.json(userID)


})
ViteExpress.listen(server, 3000, async () => console.log("Server is running it at http://localhost:3000"));
// ViteExpress.listen(server, 3000, () => console.log("Server is listening..."));