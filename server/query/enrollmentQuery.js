// SELECT

export const getAllPeopleFromClassQuery = `SELECT *FROM ENROLLMENT E RIGHT JOIN USERS U ON E.classroomid=$1 where E.userid=U.userid;`;
