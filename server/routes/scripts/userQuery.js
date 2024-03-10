import { pool } from "../../db/connect.js";

import {
  addUserQuery,
  getUserQueryByEmailAndName,
  getUserQueryByEmailAndPass,
  signupThroughPasswordQuery,
} from "../../query/loginQuery.js";

export const getUserByMailAndName = async (email, userName) => {
  try {
    const user = await pool.query(getUserQueryByEmailAndName, [
      email,
      userName,
    ]);
    if (user && user.rows) {
      return user.rows[0];
    }
    return null;
  } catch (e) {
    console.log("ERROR: ", e);
    return null;
  }
};

export const getUserByMailAndPassword = async (email, password) => {
  try {
    const user = await pool.query(getUserQueryByEmailAndPass, [
      email,
      password,
    ]);
    if (user && user.rows && user.rows.length) {
      return user.rows[0];
    }
    return null;
  } catch (e) {
    console.log("ERROR: ", e);
    return null;
  }
};

export const addNewUser = async (email, userName) => {
  try {
    const user = await pool.query(addUserQuery, [email, userName]);

    if (user && user.rows) {
      return user.rows[0];
    }
    return null;
  } catch (e) {
    console.log("ERROR: ", e);
    return null;
  }
};

export const addUserToDB = async (email, username, password, phone) => {
  try {
    const user = await pool.query(signupThroughPasswordQuery, [
      email,
      username,
      password,
      phone,
    ]);

    if (user && user.rows) {
      return user.rows[0];
    }
    return null;
  } catch (e) {
    console.log("ERROR: ", e);
    return null;
  }
};
