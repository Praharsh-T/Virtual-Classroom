// INSERT

export const uploadFileToClassroomQuery = (tableName) =>
  `INSERT INTO ${tableName}(fileName,fileType,fileDescription,fileContent) VALUES($1,$2,$3,$4)`;

// SELECT
export const getFileFromClassRoomQuery = (tableName) =>
  `SELECT  *FROM ${tableName} WHERE fileid=$1`;
