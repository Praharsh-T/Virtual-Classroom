export const createNewClassRoomQuery = `INSERT INTO CLASSROOM(classroomName,classroomLeaderid) VALUES($1,$2) RETURNING *`;

export const getClassesForLeadersQuery = `SELECT *FROM CLASSROOM WHERE classroomLeaderid=$1`;

export const checkValidClassRoomQuery = `SELECT *FROM CLASSROOM WHERE classroomId=$1 AND classroomName=$2`;

export const addUserToClassroomQuery = `INSERT INTO ENROLLMENT(userId,classroomid) VALUES($1,$2) RETURNING *`;

export const checkUserExistINClassroomQuery = `SELECT *FROM ENROLLMENT WHERE userid=$1 AND classroomid=$2`;
