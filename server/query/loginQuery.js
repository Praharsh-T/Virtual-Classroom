// login and user queries
const addUserQuery = `INSERT INTO USERS(email,userName) VALUES($1,$2) RETURNING *`;

const getUserQueryByEmailAndName = `SELECT *FROM USERS WHERE email=$1 AND userName=$2`;

module.exports = { addUserQuery, getUserQueryByEmailAndName };
