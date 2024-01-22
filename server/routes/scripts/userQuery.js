const { pool } = require("../../db/connect");

const {
  addUserQuery,
  getUserQueryByEmailAndName,
} = require("../../query/loginQuery");

const getUserByMailAndName = async (email, userName) => {
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

const addNewUser = async (email, userName) => {
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

module.exports = { getUserByMailAndName, addNewUser };
