// userDataService.js
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getAllUserData = async (userIds) => {
  let allUserData = [];

  for (const userId of userIds) {
    let userInfo = await fetchData(`http://localhost:3000/user/${userId}`);
    let userActivity = await fetchData(
      `http://localhost:3000/user/${userId}/activity`
    );
    let userSessions = await fetchData(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    let userPerformance = await fetchData(
      `http://localhost:3000/user/${userId}/performance`
    );

    allUserData.push({
      id: userId,
      info: userInfo,
      activity: userActivity,
      sessions: userSessions,
      performance: userPerformance,
    });
  }

  return allUserData;
};
