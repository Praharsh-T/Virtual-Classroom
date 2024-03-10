// login and user queries
// INSERT

export const addUserQuery = `INSERT INTO USERS(email,userName) VALUES($1,$2) RETURNING *`;

export const signupThroughPasswordQuery = `INSERT INTO USERS(email,userName,password,phone) VALUES($1,$2,$3,$4) RETURNING *`;
// SELECT

export const getUserQueryByEmailAndName = `SELECT *FROM USERS WHERE email=$1 AND userName=$2`;

export const getUserQueryByEmailAndPass = `SELECT *FROM USERS WHERE email=$1 AND password=$2`;
