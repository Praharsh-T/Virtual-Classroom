export const createNewClassRoomQuery = `INSERT INTO CLASSROOM(classroomName,classroomLeaderid) VALUES($1,$2) RETURNING *`;

export const getClassesForLeadersQuery = `SELECT *FROM CLASSROOM WHERE classroomLeaderid=$1`;
