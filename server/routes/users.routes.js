import express from 'express';
import executeQuery from '../db/utlis.js';
import pool from '../db/index.js';

const router = express.Router ();

router.get('/:id?', async (req, res, next) => {
    try {
        const { id } = req.params;
        let data;
        
        if (id) {
            const query = 'SELECT * FROM users WHERE id = ?';
            const values = [id];
            data = await executeQuery(query, values);
        } 
        else {
            const query = 'SELECT * FROM users';
            data = await executeQuery(query);
        }
        res.json(data);
    } 
    catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

  // Create a new user
router.post('/', async (req, res, next) => {
    try {
        const { firstName, lastName, teamName, role, username, password, phone } = req.body;
        const query = `INSERT INTO users (firstName, lastName, teamName, role, username, password, phone)
                        VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const values = [firstName, lastName, teamName, role, username, password, phone];
        await executeQuery(query, values);
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;