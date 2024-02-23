export const getUserName = () => {
  const username = localStorage.getItem("userName");
  return username;
};

export const getAuthToken = () => {
  const token = localStorage.getItem("authToken");
  return token;
};

export const getUserProfile = () => {
  const userProfile = localStorage.getItem("picture");
  return userProfile;
};