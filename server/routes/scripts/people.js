import { pool } from "../../db/connect.js";
import { getAllPeopleFromClassQuery } from "../../query/enrollmentQuery.js";

export const getPeopleFromClass = async (classroomid) => {
  try {
    const people = await pool.query(getAllPeopleFromClassQuery, [classroomid]);

    return people.rows;
  } catch (e) {
    console.log(e);
    return [];
  }
};
