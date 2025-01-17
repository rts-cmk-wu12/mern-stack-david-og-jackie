import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import ViteExpress from 'vite-express';

const CONNECTION_STRING = "mongodb+srv://jackiealexandar:C2hTLPG0h0MauT3K@cluster0.t5lji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(CONNECTION_STRING);
const database = client.db("DJ")

// const allUsers = await users.find()

const server = express()
server.use(express.json())
server.get("/message", (_, res) => res.send("Hello from express!"));


server.get('/posts', async (_, response) => {
    const users = database.collection("posts")
    const userData = await users.find().toArray()



    response.json(userData)
    // response.json(userEmail)
    // response.json(userID)


})

server.post("/newposts", (request, response) => {
   
    console.log(request.body);
const posts= database.collection("posts")
posts.insertOne(request.body)
    
})

server.get('/posts/:id', async(request,response)=>{
    const id = new ObjectId(request.params.id)
    const query = { _id: id };
    const collection = database.collection("posts")
    const singlePost = await collection.findOne(query)
    response.json(singlePost)
    console.log(id);
    
});






ViteExpress.listen(server, 3000, async () => console.log("Server is running it at http://localhost:3000"));
// ViteExpress.listen(server, 3000, () => console.log("Server is listening..."));