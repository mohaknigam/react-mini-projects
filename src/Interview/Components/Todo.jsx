import { dummyList } from "../Constants";
import bin from "../../images/delete-icon.png";
import { useState } from "react";

const ListTile = ({ name, handleDelete, idx }) => {
  return (
    <div className="list-tile">
      <p className="employee-name">{name}</p>
      <img
        src={bin}
        alt="img"
        className="icon"
        onClick={() => handleDelete(idx)}
      />
    </div>
  );
};
const Todo = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState(dummyList);
  const handleDelete = (index) => {
    const reducedlist = list.filter((_, idx) => idx !== index);
    setList(reducedlist);
  };

  const handleAdd = () => {
    const finalList = [...list, input];
    setList(finalList);
    setInput("");
  };
  return (
    <div className="todo-container">
      <div className="input-container">
        <input
          type="text"
          className="input-box"
          placeholder="Type your name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="list-div">
        {list.map((item, idx) => {
          return <ListTile name={item} handleDelete={handleDelete} idx={idx} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
