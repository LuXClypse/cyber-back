import express from "express";
import cors from "cors";
import { connectToDatabase } from "./services/database.js";
import bodyParser from "body-parser";


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    async function run() {
        try {
            const database = await connectToDatabase();
        } catch (error) {
            console.error('Error handling request:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
    }
    app.use(cors());

    app.get('/', (req, res) => {});

    app.get('/home', (req, res) => {
        res.json({ message: 'Welcome to Home!' });
    });

    app.get('/about', (req, res) => {
        res.json({ message: 'About Us' });
    });

    app.get('/contact', (req, res) => {
        res.json({ message: 'Contact Us' });
    });

    app.get('/blog', (req, res) => {
        res.json({ message: 'Our Blog' });
    });

    await run();
    res.json({ status: "mongo is running" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});























// app.get('/api/users', async (req, res) => {
//   try {
//     const database = await connectToDatabase();
//     const users = database.collection('users');
//     const cursor = users.find();
//     const result = await cursor.toArray();
//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
//
// app.post('/api/users', async (req, res) => {
//   try {
//     const database = await connectToDatabase();
//     const users = database.collection('users');
//     const doc = {
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//     };
//     const result = await users.insertOne(doc);
//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
//
// app.patch('/api/users/changeUser', async (req, res) => {
//   try {
//     const database = await connectToDatabase();
//     const users = database.collection('users');
//     const filter = { email: req.body.email };
//     const updateDoc = {
//       $set: { name: req.body.name },
//     };
//     const result = await users.updateOne(filter, updateDoc);
//     res.status(result.modifiedCount === 0 ? 401 : 200).json({ statusCode: result.modifiedCount === 0 ? 401 : 200, result });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
//
//
// app.delete('/api/users/deleteUser', async (req, res) => {
//   try {
//     const database = await connectToDatabase();
//     const users = database.collection('users');
//
//     const query = { email: req.body.email, password: req.body.password };
//     const result = await users.deleteOne(query);
//
//     if (result.deletedCount === 0) {
//       return res.status(404).json({ statusCode: 404, message: "User not found" });
//     }
//     res.status(result.modifiedCount === 0 ? 401 : 200).json({ statusCode: result.modifiedCount === 0 ? 401 : 200, result });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
//
// app.get('/api/theaters', async (req, res) => {
//   try {
//     const database = await connectToDatabase();
//     const theaters = database.collection('theaters');
//     const cursor = theaters.find();
//     const result = await cursor.toArray();
//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
//
// app.patch('/api/theaters/changeTheater', async (req, res) => {
//   try {
//     const database = await connectToDatabase();
//     const theaters = database.collection('theaters');
//     const filter = { name: req.body.name };
//     const updateDoc = {
//       $set: { location: req.body.location },
//     };
//     const result = await theaters.updateOne(filter, updateDoc);
//     res.status(result.modifiedCount === 0 ? 401 : 200).json({ statusCode: result.modifiedCount === 0 ? 401 : 200, result });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
//
// app.get('/api/comments', async (req, res) => {
//   try {
//     const database = await connectToDatabase();
//     const comments = database.collection('comments');
//     const cursor = comments.find();
//     const result = await cursor.toArray();
//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
//
// app.post('/api/comments', async (req, res) => {
//   try {
//     const database = await connectToDatabase();
//     const comments = database.collection('comments');
//     const date = new Date();
//     const movieObjectId = new ObjectId(req.body.movie_id);
//     const doc = {
//       name: req.body.name,
//       email: req.body.email,
//       movie_id: movieObjectId,
//       text: req.body.text,
//       date,
//     };
//     const result = await comments.insertOne(doc);
//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
//
// app.patch('/api/comments/changeComment', async (req, res) => {
//   try {
//     const database = await connectToDatabase();
//     const comments = database.collection('comments');
//     const filter = { email: req.body.email, movie_id: new ObjectId(req.body.movie_id) };
//     const updateDoc = {
//       $set: { text: req.body.text },
//     };
//     const result = await comments.updateOne(filter, updateDoc);
//     res.status(result.modifiedCount === 0 ? 401 : 200).json({ statusCode: result.modifiedCount === 0 ? 401 : 200, result });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


