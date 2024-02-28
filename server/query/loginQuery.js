// login and user queries
// INSERT

export const addUserQuery = `INSERT INTO USERS(email,userName) VALUES($1,$2) RETURNING *`;

// SELECT

export const getUserQueryByEmailAndName = `SELECT *FROM USERS WHERE email=$1 AND userName=$2`;
