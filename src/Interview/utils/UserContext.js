import { createContext } from "react";

// we want data as array of objects, hence initializing our context store as empty array
//const UserContext = createContext([]);

// or to use setData functionality we can define it as a object
const UserContext = createContext({
  usersList: [],
  currentPerson: {},
  setUsersList: () => {}, // Empty function as a placeholder
  setPerson: () => {}, // Empty function as a placeholder
});

export default UserContext;
