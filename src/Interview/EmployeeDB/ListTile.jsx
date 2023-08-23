import bin from "../../images/delete-icon.png";
const ListTile = ({ firstName, lastName, id, handleDelete }) => {
  const handleImageClick = (event) => {
    console.log("abc");
    handleDelete(id);
    event.stopPropagation();
  };

  const handleTileClick = () => {
    console.log("tile clicked");
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
