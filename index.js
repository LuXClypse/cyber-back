import express from "express";
import cors from "cors";
import {connectToDatabase} from "./services/database.js";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', async (req, res) => {
    async function run() {
        try {
            const database = await connectToDatabase();
            res.json({status: "Server is running!"});
        } catch (error) {
            console.error('Error handling request:', error);
            res.status(500).json({error: 'Internal server error'});
        }
    }
    run().catch(console.dir);
});

app.get('/menus/navbarItems', async (req, res) => {
    async function run() {
        try {
            const database = await connectToDatabase();
            const navbarItems = database.collection('navbar_items');
            const cursor = navbarItems.find();
            const result = await cursor.toArray()
            res.json(result);
        } catch (error) {
            console.error('Error handling request:', error);
            res.status(500).json({error: 'Internal server error'});
        }
    }
    run().catch(console.dir);
});

app.get('/categories', async (req, res) => {
    async function run() {
        try {
            const database = await connectToDatabase();
            const categories = database.collection('categories');
            const cursor = categories.find();
            const result = await cursor.toArray()
            res.json(result);
        } catch (error) {
            console.error('Error handling request:', error);
            res.status(500).json({error: 'Internal server error'});
        }
    }
    run().catch(console.dir);
});

// app.get('/', async (req, res) => {
//   async function run() {
//     try {
//       const database = await connectToDatabase();
//       const users = database.collection('users');
//       const cursor = users.find();
//       const result = await cursor.toArray()
//
//       res.json(result);
//     } catch (error) {
//       console.error('Error handling request:', error);
//       res.status(500).json({error: 'Internal server error'});
//     }
//   }
//
//   run().catch(console.dir);
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
