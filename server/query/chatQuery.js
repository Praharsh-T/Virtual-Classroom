// SELECT

export const getChatHistoryFromClassRoomQuery = (tableName) =>
  `SELECT *FROM ${tableName}`;

export const addMessageToChatClassRoomQuery = (tableName) =>
  `INSERT INTO ${tableName}(msgSenderID, msgSenderName, msgContent) VALUES($1,$2,$3) RETURNING *`;
