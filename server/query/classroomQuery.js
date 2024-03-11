// INSERT

export const createNewClassRoomQuery = `INSERT INTO CLASSROOM(classroomName,classroomLeaderid) VALUES($1,$2) RETURNING *`;

export const addUserToClassroomQuery = `INSERT INTO ENROLLMENT(userId,classroomid) VALUES($1,$2) RETURNING *`;

// SELECT

export const getClassesForLeadersQuery = `SELECT *FROM CLASSROOM WHERE classroomLeaderid=$1`;

export const checkValidClassRoomQuery = `SELECT *FROM CLASSROOM WHERE classroomId=$1 AND classroomName=$2`;

export const checkUserExistINClassroomQuery = `SELECT *FROM ENROLLMENT WHERE userid=$1 AND classroomid=$2`;

export const getJoinedClassesQuery = `SELECT E.enr_date, E.classroomid, C.classroomName, U.username
FROM ENROLLMENT E, CLASSROOM C, USERS U
WHERE E.userid=$1 AND E.classroomid=C.classroomid AND U.userid=c.classroomleaderid
`;

// UPDATE

export const incremntStudentCount = `UPDATE CLASSROOM SET studentcount=studentcount+1 WHERE classroomid=$1`;

// CREATE

export const createFileTableQuery = (tableName) => `create table ${tableName} (
  fileId SERIAL unique,
  fileName varchar(50),
  fileDescription varchar(500),
  fileType varchar(10),
  fileContent bytea not null,
  uploadDate DATE not null default now()
)`;

export const createMSGTableQuery = (tableName) => `create table ${tableName} (
  msgId SERIAL unique,
  msgSenderID int,
  msgSenderName varchar(50),
  msgContent varchar(500),
  sendDate DATE not null default now(),
  foreign key(msgSenderID) references USERS(userId) on delete cascade
)`;
