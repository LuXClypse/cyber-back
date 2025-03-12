import { MongoClient } from 'mongodb';
import express from 'express';
import cors from "cors";
const app = express();
const uri = 'mongodb+srv://luka_mirotadze:9VTq2BaZXOW4pj5X@cluster0.8p2gd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to the database');
        return client.db('cyber_DB');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw new Error('Database connection failed');
    }
}
async function closeConnection() {
    try {
        await client.close();
        console.log('Database connection closed');
    } catch (error) {
        console.error('Error closing the database connection:', error);
    }
}

export { connectToDatabase, client, closeConnection };
