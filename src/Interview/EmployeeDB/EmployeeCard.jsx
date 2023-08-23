import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import EmptyUI from "./EmptyUI";

const EmployeeCard = () => {
  const defaultImgUrl = "https://cdn-icons-png.flaticon.com/512/0/93.png";
  const { usersList, currentPerson } = useContext(UserContext);

  const {
    firstName,
    lastName,
    imageUrl,
    email,
    contactNumber,
    age,
    dob,
    address,
  } = currentPerson;
  const checkIsPersonAvailable = usersList.find(
    (item) =>
      item?.id === currentPerson?.id &&
      item?.contactNumber === currentPerson?.contactNumber
  );
  return Object.keys(currentPerson).length !== 0 &&
    checkIsPersonAvailable !== undefined ? (
    <div className="employee-card-container">
      <img src={imageUrl ?? defaultImgUrl} alt="image" />
      <h3>{firstName + " " + lastName + ` (${age})`}</h3>
      <p>{address}</p>
      <p>{email}</p>
      <p>{contactNumber}</p>
      <p>{dob}</p>
    </div>
  ) : (
    <EmptyUI
      text="No Data to Preview !!"
      description="Click on the List Tile to preview"
    />
  );
};

export default EmployeeCard;
