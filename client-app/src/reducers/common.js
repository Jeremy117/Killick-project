const defaultState = {
  appName: "Killick",
  token: null,
  articles: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "APP_LOAD":
      return {
        ...state,
        token: action.token || null,
        appLoaded: true
      };
    case "REDIRECT":
      return { ...state, redirectTo: null };
    case "LOGIN": {
      return {
        ...state,
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user,
        redirectTo: action.error ? null : "/"
      };
    }
    default:
      return state;
  }
};
