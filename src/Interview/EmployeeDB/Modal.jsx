import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const Modal = ({ closeModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const { userList, setUsersList } = useContext(UserContext);
  const handleAdd = () => {
    const newObj = {
      firstName,
      lastName,
      url,
      email,
      contact,
      age,
      date,
      address,
    };

    setUsersList((prevList) => [...prevList, newObj]);
    closeModal();
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Add an Employee</h3>
        <div className="name-container">
          <input
            type="text"
            className="first-name"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="last-name"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <input
          type="text"
          className="img-url"
          placeholder="Image URL (Optional)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          className="input-email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="input-contact"
          placeholder="Mobile Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          type="text"
          className="input-age"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          className="input-salary"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <input
          type="text"
          className="input-address"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="date"
          className="input-date"
          placeholder="dd/mm/yy"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div className="but-container">
          <button className="add" onClick={handleAdd}>
            Add
          </button>
          <button className="cancel" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
