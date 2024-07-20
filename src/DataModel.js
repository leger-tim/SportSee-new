class UserData {
  constructor(data) {
    this.id = data.id;
    this.userInfos = data.userInfos;
    this.todayScore = data.todayScore || data.score;
    this.keyData = data.keyData;
  }
}

class UserActivity {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = Array.isArray(data.sessions)
      ? data.sessions.map((session) => ({
          day: session.day,
          pv: session.kilogram,
          uv: session.calories,
        }))
      : [];
  }
}

class UserAverageSessions {
  constructor(data) {
    const dayMap = ["L", "M", "M", "J", "V", "S", "D"];
    this.userId = data.userId;
    this.sessions = Array.isArray(data.sessions)
      ? data.sessions.map((session) => ({
          day: dayMap[session.day - 1],
          sessionLength: session.sessionLength,
        }))
      : [];
  }
}

class UserPerformance {
  constructor(data) {
    const customSubjects = {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    };
    this.userId = data.userId;
    this.data = Array.isArray(data.data)
      ? data.data.map((item) => ({
          subject: customSubjects[item.kind],
          A: item.value,
          fullMark: 250,
        }))
      : [];
  }
}

export { UserData, UserActivity, UserAverageSessions, UserPerformance };
