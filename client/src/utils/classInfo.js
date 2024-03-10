export const getOwnedClasses = () => {
  try {
    const ownedClass = sessionStorage.getItem("ownedClass");
    if (ownedClass) {
      return JSON.parse(ownedClass);
    }
    return null;
  } catch (e) {
    return null;
  }
};

export const setOwnedClasses = (ownedClass) => {
  if (ownedClass.length)
    sessionStorage.setItem("ownedClass", JSON.stringify(ownedClass));
};

export const clearOwnedClasses = () => {
  sessionStorage.removeItem("ownedClass");
};
