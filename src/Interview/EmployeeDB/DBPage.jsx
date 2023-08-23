import "./style.css";
import Header from "./Header";
import EmployeeList from "./EmployeeList";
import EmployeeOverview from "./EmployeeOverview";
import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import useEmployees from "../utils/useEmployees";

const DBPage = () => {
  const data = useEmployees();
  const [usersList, setUsersList] = useState([]);
  const [currentPerson, setCurrentPerson] = useState({});

  useEffect(() => {
    const sortedData = data
      .slice()
      .sort((a, b) => a.firstName.localeCompare(b.firstName));
    setUsersList(sortedData);
  }, [data]);
  return (
    <UserContext.Provider
      value={{
        usersList,
        currentPerson,
        setUsersList,
        setCurrentPerson,
      }}
    >
      <div className="db-container">
        <div className="header-container">
          <Header />
        </div>

        <div className="body-container">
          <EmployeeList />
          <EmployeeOverview />
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default DBPage;
