import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./component.css";
export const ModalComponent = (props) => {
  const {
    show,
    setShow,
    updateStudentData,
    selectedStudent,
    addNewStudent,
    selected
  } = props;

  const handleClose = () => setShow(false);
  const [gender, handleGender] = useState(selectedStudent.gender || "Male");
  const [profession, handleProfession] = useState(selectedStudent.profession);
  const [name, handleName] = useState(selectedStudent.name);
  const [age, handleAge] = useState(selectedStudent.age);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <div style={{ background: "lightgrey", border: "1px solid black" }}>
        <Modal.Header>
          <Modal.Title>Register New Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="fild">
              <span> Name :</span>{" "}
              <input
                value={name}
                onChange={(e) => handleName(e.target.value)}
              />
            </div>
            <div className="fild">
              <span> Age :</span>{" "}
              <input
                type="number"
                value={age}
                onChange={(e) => handleAge(e.target.value)}
              />
            </div>
            <div className="fild">
              <span> Gender :</span>

              <select
                name="Gender"
                id="Gender"
                onChange={(e) => handleGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="fild">
              <span> Profession :</span>
              <div>
                <input
                  name="Profession"
                  type="radio"
                  value="Engineer"
                  onChange={(e) => handleProfession(e.target.value)}
                />
                <label for="Engineer">Engineer</label>
                <br />
                <input
                  name="Profession"
                  type="radio"
                  value="Doctor"
                  onChange={(e) => handleProfession(e.target.value)}
                />
                <label for="Doctor">Doctor</label>
                <br />
                <input
                  name="Profession"
                  type="radio"
                  value="Lawyer"
                  onChange={(e) => handleProfession(e.target.value)}
                />
                <label for="Lawyer">Lawyer</label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              const studentData = {
                name,
                age,
                gender,
                profession
              };
              if (selected) {
                updateStudentData(studentData);
              } else {
                addNewStudent(studentData);
              }
              setShow(false);
            }}
          >
            Submit Data
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};
