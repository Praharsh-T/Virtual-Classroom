export const getUserName = () => {
  const username = localStorage.getItem("userName");
  return username;
};

export const getAuthToken = () => {
  const token = localStorage.getItem("authToken");
  return token;
};

export const getEmail = () => {
  const email = localStorage.getItem("email");
  return email;
};

export const getUserProfile = () => {
  const userProfile = localStorage.getItem("picture");
  return userProfile;
};

export const logOut = () => {
  sessionStorage.clear();
  localStorage.clear();
};