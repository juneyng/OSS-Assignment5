import React, { useState, useEffect } from "react";
import FormContainer from "../FormContainer";
import StudentList from "../StudentList";
import Modal from "../Modal";

const API_URL = "https://672ef45a229a881691f16451.mockapi.io/students";

const ShowList = () => {
  const [students, setStudents] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [modalType, setModalType] = useState(null); // "create", "update", or "delete"

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      alert("Failed to fetch students");
    }
  };

  const handleSave = async (data) => {
    try {
      if (modalType === "create") {
        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } else if (modalType === "update") {
        await fetch(`${API_URL}/${data.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }
      fetchStudents();
      setModalData(null);
    } catch (error) {
      alert("Failed to save data");
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      fetchStudents();
    } catch (error) {
      alert("Failed to delete data");
    }
  };

  return (
    <div>
      <h1>Student Management System</h1>
      <div className="main-container">
        <FormContainer
          onCreate={() => {
            setModalType("create");
            setModalData({ name: "", age: "", gender: "Male", studentID: "" });
          }}
          onUpdate={() => {
            const id = prompt("Enter the ID to update:");
            const student = students.find((s) => s.id === id);
            if (student) {
              setModalType("update");
              setModalData(student);
            } else {
              alert("Student not found");
            }
          }}
          onDelete={() => {
            const id = prompt("Enter the ID to delete:");
            if (id) handleDelete(id);
          }}
        />
        <StudentList students={students} />
      </div>
      {modalData && (
        <Modal
          data={modalData}
          type={modalType}
          onClose={() => setModalData(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default ShowList;
