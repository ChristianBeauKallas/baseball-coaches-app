import executeQuery from '../db/utils.js';

const getAllUsers = async () => {
  return executeQuery('SELECT * FROM users');
};

const getUserById = async (id) => {
    return executeQuery('SELECT * FROM users WHERE id = ?', [id]);
};

const createUser = async (user) => {
    return executeQuery('INSERT INTO users (firstName, lastName, email) VALUES (?, ?, ?)', [user.firstName, user.lastName, user.email]);
};

const updateUser = async (id, user) => {
    return executeQuery('UPDATE users SET firstName = ?, lastName = ?, email = ? WHERE id = ?', [user.firstName, user.lastName, user.email, id]);
};

const deleteUser = async (id) => {
    return executeQuery('DELETE FROM users WHERE id = ?', [id]);
};

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
