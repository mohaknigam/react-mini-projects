import { useContext, useEffect, useState } from "react";
import ListTile from "./ListTile";
import Shimmer from "./Shimmer";
import useEmployees from "../utils/useEmployees";
import UserContext from "../utils/UserContext";
import EmptyUI from "./EmptyUI";
const EmployeeList = () => {
  const { usersList, setUsersList } = useContext(UserContext);
  const [allDeleted, setAllDeleted] = useState(false);

  return (
    <div className="list-container">
      <div>
        <div className="list-heading">Employee List - {usersList?.length}</div>
        <hr />
      </div>
      <div className="list">
        {usersList?.length === 0 ? (
          allDeleted ? (
            <EmptyUI text="Empty !!" description="Add Employee Please" />
          ) : (
            <Shimmer />
          )
        ) : (
          usersList?.map((item) => {
            return (
              <ListTile
                key={item?.id}
                item={item}
                setAllDeleted={setAllDeleted}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default EmployeeList;
