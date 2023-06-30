const express = require('express');
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/users.controller');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await getAllUsers();
        res.json(data);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getUserById(id);
        if (!data) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({ error: 'Failed to retrieve user' });
    }
});

router.post('/', async (req, res) => {
    try {
        const user = req.body;
        await createUser(user);
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = req.body;
        await updateUser(id, user);
        res.json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Failed to update user' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await deleteUser(id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Failed to delete user' });
    }
});

module.exports = router;
