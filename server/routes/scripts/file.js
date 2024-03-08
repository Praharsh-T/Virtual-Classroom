import { pool } from "../../db/connect.js";
import {
  getFileDetailsFromClassRoomQuery,
  getFileFromClassRoomQuery,
} from "../../query/fileQuery.js";

export const getFileFromClassRoom = async (tableName, fileid) => {
  try {
    const fileContent = await pool.query(getFileFromClassRoomQuery(tableName), [
      fileid,
    ]);

    return fileContent.rows[0];
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getFileDetailsFromClassRoom = async (tableName) => {
  try {
    const fileContent = await pool.query(
      getFileDetailsFromClassRoomQuery(tableName)
    );

    return fileContent.rows;
  } catch (e) {
    console.log(e);
    return [];
  }
};
