import { pool } from "../../db/connect.js";
import {
  createNewClassRoomQuery,
  getClassesForLeadersQuery,
} from "../../query/classroomQuery.js";

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
export const getClassesForLeaders = async (classroomLeaderid) => {
  try {
    const newClassRoom = await pool.query(getClassesForLeadersQuery, [
      classroomLeaderid,
    ]);
    if (newClassRoom && newClassRoom.rows) {
      return newClassRoom.rows;
    }
    return null;
  } catch (e) {
    console.log("ERROR: ", e);
    return null;
  }
};


