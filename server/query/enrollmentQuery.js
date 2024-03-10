// SELECT

export const getAllPeopleFromClassQuery = `SELECT *FROM ENROLLMENT E RIGHT JOIN USERS U ON E.classroomid=$1 where E.userid=U.userid;`;

export const getLeaderOfClassQuery = `SELECT U.username FROM CLASSROOM C, USERS U WHERE C.classroomleaderid=$1 AND C.classroomleaderid=U.userid `;