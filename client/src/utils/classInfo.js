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

export const getJoinedClasses = () => {
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

export const setJoinedClasses = (ownedClass) => {
  if (ownedClass.length)
    sessionStorage.setItem("ownedClass", JSON.stringify(ownedClass));
};

export const clearJoinedClasses = () => {
  sessionStorage.removeItem("ownedClass");
};

export const getOwnedClassInfoFromSession = (classRoomId) => {
  try {
    const ownedClass = sessionStorage.getItem("ownedClass");
    const ownedClassJson = JSON.parse(ownedClass);
    console.log(classRoomId);
    return ownedClassJson.find((details) => details.classroomid == classRoomId);
  } catch (e) {
    return {
      classroomid: 14,
      classroomname: "-",
      classroomleaderid: 2,
      studentcount: 1,
      description: "-",
    };
  }
};
