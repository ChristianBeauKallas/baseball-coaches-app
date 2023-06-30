const executeQuery = require("../db/utils.js")

const getAllUsers = async () => {
  return executeQuery('SELECT * FROM users')
};

const getUserById = async (id) => {
    return executeQuery('SELECT * FROM users WHERE id = ?', [id])
};

const createUser = async (user) => {
    return executeQuery('INSERT INTO users (firstName, lastName, teamName, role, username, password, phone) VALUES (?, ?, ?, ?, ?, ?, ?)', [user.firstName, user.lastName, user.teamName, user.role, user.username, user.password, user.phone])
};

const updateUser = async (id, user) => {
    return executeQuery('UPDATE users SET firstName = ?, lastName = ?, teamName = ?, role = ?, username = ?, password = ?, phone = ? WHERE id = ?', [user.firstName, user.lastName, user.teamName, user.role, user.username, user.password, user.phone, id])
};

const deleteUser = async (id) => {
    return executeQuery('DELETE FROM users WHERE id = ?', [id])
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser }
