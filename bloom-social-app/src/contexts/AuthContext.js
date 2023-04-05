import AuthReducer from "./AuthReducer";

const { useReducer } = require("react");
const { createContext } = require("react");

const INITIAL_STATE = {
  user: {
    "username": "Rishabh",
    "email": "rishabh@test.com",
    "profilePicture": "",
    "coverPicture": "",
    "followers": [
      "6428ee9b2f93eb4cbaecd571"
    ],
    "isAdmin": true,
    "desc": "Hey there",
    "City": "Mumbai",
    "from": "India",
    "relationship": "Not disclosed",
    "createdAt": "2023-04-02T02:56:36.239Z",
    "updatedAt": "2023-04-03T05:46:48.434Z",
    "followings": [
      "6428ee9b2f93eb4cbaecd571"
    ],
    "id": "6428eee42f93eb4cbaecd578"
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


