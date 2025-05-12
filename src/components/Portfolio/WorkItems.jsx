import React, { useState } from "react";

const WorkItems = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDemoClick = (e) => {
    e.preventDefault();
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="work__card">
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href="#" className="work__button" onClick={handleDemoClick}>
        Demo
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>

      {/* Modal */}
      {showModal && (
  <>
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.modalImage || item.image}
          alt={`Preview ${item.title}`}
          className="modal-img"
        />
      </div>
    </div>
    <button className="modal-close" onClick={handleCloseModal}>
      &times;
    </button>
  </>
)}
    </div>
  );
};

export default WorkItems;
