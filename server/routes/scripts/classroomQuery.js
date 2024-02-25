import { pool } from "../../db/connect.js";
import { createNewClassRoomQuery } from "../../query/classroomQuery.js";

export const createNewClassRoom = async (classroomName, classroomLeaderid) => {
  try {
    const newClassRoom = await pool.query(createNewClassRoomQuery, [
      classroomName,
      classroomLeaderid,
    ]);
    if (newClassRoom && newClassRoom.rows) {
      return newClassRoom.rows[0];
    }
    return null;
  } catch (e) {
    console.log("ERROR: ", e);
    return null;
  }
};
