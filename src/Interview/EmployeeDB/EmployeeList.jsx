import { useEffect, useState } from "react";
import ListTile from "./ListTile";
import Shimmer from "./Shimmer";
import useEmployees from "../utils/useEmployees";
import AllDeleted from "./AllDeleted";
const EmployeeList = () => {
  const dataList = useEmployees();

  const [allData, setAllData] = useState(dataList);
  const [allDeleted, setAllDeleted] = useState(false);

  useEffect(() => {
    console.log("effect");
    const sortedList = dataList
      .slice()
      .sort((a, b) => a.firstName.localeCompare(b.firstName));
    setAllData(sortedList);
  }, [dataList]);

  const handleDelete = (id) => {
    if (allData.length === 1) setAllDeleted(true);
    const reducedlist = allData.filter((item) => item.id !== id);
    setAllData(reducedlist);
  };

  return (
    <div className="list-container">
      <div>
        <div className="list-heading">Employee List - {allData.length}</div>
        <hr />
      </div>
      <div className="list">
        {allData.length === 0 ? (
          allDeleted ? (
            <AllDeleted />
          ) : (
            <Shimmer />
          )
        ) : (
          allData.map(({ firstName, lastName, id }) => {
            return (
              <ListTile
                firstName={firstName}
                lastName={lastName}
                id={id}
                key={id}
                handleDelete={handleDelete}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default EmployeeList;
