import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserInfos from "./userInfos.js";
import {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "./apiService";

const ParentComponent = () => {
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageSessionsData, setAverageSessionsData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const [error, setError] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    async function loadData() {
      const user = await getUserData(userId);
      const activity = await getUserActivity(userId);
      const averageSessions = await getUserAverageSessions(userId);
      const performance = await getUserPerformance(userId);

      if (!user || !activity || !averageSessions || !performance) {
        setError(true);
      } else {
        setUserData(user);
        setActivityData(activity.sessions);
        setAverageSessionsData(averageSessions.sessions);
        setPerformanceData(performance.data);
        setError(false);
      }
    }

    loadData();
  }, [userId]);

  return (
    <UserInfos
      userData={userData}
      activityData={activityData}
      averageSessionsData={averageSessionsData}
      performanceData={performanceData}
      error={error}
    />
  );
};

export default ParentComponent;
