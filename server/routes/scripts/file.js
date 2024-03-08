import { pool } from "../../db/connect.js";
import { getFileFromClassRoomQuery } from "../../query/fileQuery.js";

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
