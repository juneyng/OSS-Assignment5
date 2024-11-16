import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ data, type, onClose, onSave }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="modal" style={{ display: "block" }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>{type === "create" ? "Create Student" : "Update Student"}</h3>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label>Student ID:</label>
        <input
          type="number"
          name="studentID"
          value={formData.studentID}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};

export default Modal;
