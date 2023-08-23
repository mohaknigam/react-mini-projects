import { useState } from "react";
import Modal from "./Modal";
const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="header">
      <h1 className="header-heading">Employee Database Management</h1>
      <button className="btn" onClick={openModal}>
        Add Employee
      </button>
      {modalOpen ? <Modal closeModal={closeModal} /> : null}
    </div>
  );
};

export default Header;
