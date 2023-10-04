import React, { useState } from "react";
import Modal from "./Modal";
import "./mod-style.css";

const ModalParent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="mod-container">
      <button onClick={() => setIsModalOpen(!isModalOpen)}>Open Modal</button>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default ModalParent;
