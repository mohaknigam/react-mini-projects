import { useContext } from "react";
import bin from "../../images/delete-icon.png";
import UserContext from "../utils/UserContext";
const ListTile = ({ item, setAllDeleted }) => {
  const { usersList, setCurrentPerson, setUsersList } = useContext(UserContext);
  const { firstName, lastName, id } = item;

  const handleImageClick = (event) => {
    if (usersList?.length === 1) setAllDeleted(true);
    const reducedlist = usersList.filter((item) => item.id !== id);
    setUsersList(reducedlist);
    event.stopPropagation();
  };

  const handleTileClick = () => {
    setCurrentPerson(item);
  };
  return (
    <div className="list-tile" onClick={handleTileClick}>
      <p className="employee-name">{firstName + " " + lastName}</p>
      <div className="icon-container">
        <img
          src={bin}
          alt="delete icon"
          className="icon"
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
};

export default ListTile;
