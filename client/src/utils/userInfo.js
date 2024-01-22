export const getUserName = () => {
  const username = localStorage.getItem("userName");
  return username;
};

export const getAuthToken = () => {
  const token = localStorage.getItem("authToken");
  return token;
};
