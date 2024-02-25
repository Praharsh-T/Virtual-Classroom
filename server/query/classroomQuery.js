export const createNewClassRoomQuery = `INSERT INTO CLASSROOM(classroomName,classroomLeaderid) VALUES($1,$2) RETURNING *`;
