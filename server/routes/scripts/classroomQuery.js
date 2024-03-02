import { pool } from "../../db/connect.js";
import {
  addUserToClassroomQuery,
  checkUserExistINClassroomQuery,
  checkValidClassRoomQuery,
  createFileTableQuery,
  createMSGTableQuery,
  createNewClassRoomQuery,
  getClassesForLeadersQuery,
  getJoinedClassesQuery,
  incremntStudentCount,
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

export const addUserToTheClass = async (userid, classroomid) => {
  try {
    const alreadyJoined = await pool.query(checkUserExistINClassroomQuery, [
      userid,
      classroomid,
    ]);

    await pool.query(incremntStudentCount, [classroomid]);

    if (alreadyJoined && alreadyJoined.rows.length) {
      return {
        success: true,
        row: alreadyJoined.rows[0],
        warn: "Already Enrolled to the class",
      };
    }
    const joinNow = await pool.query(addUserToClassroomQuery, [
      userid,
      classroomid,
    ]);
    if (joinNow && joinNow.rows.length) {
      return { success: true, row: joinNow.rows[0] };
    }
    return { success: false, fetchError: "SERVER ERROR" };
  } catch (e) {
    console.log("ERROR: ", e);
    return { success: false, fetchError: "SERVER ERROR" };
  }
};

export const checkValidClassRoom = async (classroomid, classroomname) => {
  try {
    const classroom = await pool.query(checkValidClassRoomQuery, [
      classroomid,
      classroomname,
    ]);
    if (classroom && classroom.rows.length) {
      return { valid: true };
    }
    return { valid: false };
  } catch (e) {
    console.log("ERROR: ", e);
    return { valid: false, fetchError: "SERVER ERROR" };
  }
};

export const getJoinedClasses = async (userId) => {
  try {
    const joinedClasses = await pool.query(getJoinedClassesQuery, [userId]);
    if (joinedClasses && joinedClasses.rows) {
      return joinedClasses.rows;
    } else {
      return null;
    }
  } catch (e) {
    console.log("ERROR" + e);
    return null;
  }
};

export const createFileTableForClassRoom = async ({ name, id }) => {
  const tableName = "FILE" + name + id;
  try {
    await pool.query(createFileTableQuery(tableName));
    return true;
  } catch (e) {
    console.log("FILE TABLE ERROR" + e);
    return false;
  }
};

export const createMSGTableForClassRoom = async ({ name, id }) => {
  const tableName = "MSG" + name + id;
  try {
    await pool.query(createMSGTableQuery(tableName));
    return true;
  } catch (e) {
    console.log("MSG TABLE ERROR" + e);
    return false;
  }
};