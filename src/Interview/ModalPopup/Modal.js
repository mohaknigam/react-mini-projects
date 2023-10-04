import React from "react";
import nftImage from "../../images/nft.png";
import "./mod-style.css";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  if (!isModalOpen) return null;
  return (
    <div onClick={() => setIsModalOpen(false)} className="overlay">
      <div onClick={(e) => e.stopPropagation()} className="modalContainer">
        <div className="modalLeft">
          <img src={nftImage} alt="nft-image" />
        </div>
        <div className="modalRight">
          <p className="cross" onClick={() => setIsModalOpen(false)}>
            X
          </p>
          <div className="content">
            <p>Do You want a</p>
            <h2>$20 credit</h2>
            <p>for your first trade</p>
          </div>
          <div className="btn-container">
            <button>Ok</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
