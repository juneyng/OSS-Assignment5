import React from "react";
import "./FormContainer.css";

const FormContainer = ({ onCreate, onUpdate, onDelete }) => {
  return (
    <div className="form-container">
      <button onClick={onCreate}>Create DATA</button>
      <button onClick={onUpdate}>Update DATA</button>
      <button onClick={onDelete}>Delete DATA</button>
    </div>
  );
};

export default FormContainer;
