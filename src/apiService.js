import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data.js";
import {
  UserData,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
} from "./DataModel";

async function fetchData(url, mockData) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("User not found");
      }
      throw new Error("API not available");
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Response not JSON");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null; // Retourner null en cas d'erreur pour gérer les erreurs dans le composant
  }
}

async function getUserData(userId) {
  const mockData = USER_MAIN_DATA.find((user) => user.id === parseInt(userId));
  const data = await fetchData(`http://localhost:3000/user/${userId}`, {
    data: mockData,
  });
  if (data) {
    return new UserData(data.data);
  }
  if (mockData) {
    return new UserData(mockData);
  }
  return null;
}

async function getUserActivity(userId) {
  const mockData = USER_ACTIVITY.find(
    (activity) => activity.userId === parseInt(userId)
  );
  const data = await fetchData(
    `http://localhost:3000/user/${userId}/activity`,
    { data: mockData }
  );
  if (data) {
    return new UserActivity(data.data);
  }
  if (mockData) {
    return new UserActivity(mockData);
  }
  return null;
}

async function getUserAverageSessions(userId) {
  const mockData = USER_AVERAGE_SESSIONS.find(
    (sessions) => sessions.userId === parseInt(userId)
  );
  const data = await fetchData(
    `http://localhost:3000/user/${userId}/average-sessions`,
    { data: mockData }
  );
  if (data) {
    return new UserAverageSessions(data.data);
  }
  if (mockData) {
    return new UserAverageSessions(mockData);
  }
  return null;
}

async function getUserPerformance(userId) {
  const mockData = USER_PERFORMANCE.find(
    (performance) => performance.userId === parseInt(userId)
  );
  const data = await fetchData(
    `http://localhost:3000/user/${userId}/performance`,
    { data: mockData }
  );
  if (data) {
    return new UserPerformance(data.data);
  }
  if (mockData) {
    return new UserPerformance(mockData);
  }
  return null;
}

export {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};
