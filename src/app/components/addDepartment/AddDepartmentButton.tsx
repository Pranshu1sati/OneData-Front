"use client";
import ReactModal from "react-modal";
import { useState } from "react";

import AddDepartment from "../FormComponents/AddDepartment";

export default function AddDepartmentButton() {
  // ... Your existing code ...

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleModalOpen}>Add Department</button>
      <ReactModal
        isOpen={modalOpen}
        onRequestClose={handleModalClose}
        shouldCloseOnOverlayClick={true}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "0",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "600px",
            minWidth : "418px"
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
        }}
        ariaHideApp={false} // This is to avoid an accessibility warning
        
      ><div className="my-auto">
        <AddDepartment/>
        </div>
      </ReactModal>
    </div>
  );
}
