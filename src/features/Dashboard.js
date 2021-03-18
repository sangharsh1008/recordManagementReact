import React from "react";
import { Table, Button } from "react-bootstrap";
import { ModalComponent } from "./components/ModalComponent";
import "bootstrap/dist/css/bootstrap.min.css";

const RAW_DATA = [
  {
    name: "abc",
    age: 10,
    gender: "male",
    profession: "Engineer"
  },
  {
    name: "abc",
    age: 10,
    gender: "male",
    profession: "Doctor"
  },
  {
    name: "abc",
    age: 10,
    gender: "male",
    profession: "Lawyer"
  }
];

export default class Dashboard extends React.Component {
  state = {
    studentCount: 0,
    studentData: RAW_DATA,
    selectedStudent: {},
    showModal: false,
    selected: false
  };

  updateStudentData(data) {
    const { studentData, selected } = this.state;
    const newData = [...studentData];
    newData[selected] = data;
    this.setState({
      studentData: newData,
      selected: false,
      selectedStudent: {}
    });
  }

  displayTable() {
    const { studentData } = this.state;

    return (
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th scope="col">Sr</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Wanna be</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {studentData.length &&
            studentData.map((data, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.gender}</td>
                  <td>{data.profession}</td>
                  <td>
                    {" "}
                    <Button
                      variant="secondary"
                      onClick={() =>
                        this.setState({
                          selectedStudent: data,
                          showModal: true,
                          selected: index
                        })
                      }
                    >
                      Edit
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        const newStudentData = studentData.filter(
                          (data1) => data1 !== data
                        );
                        this.setState({
                          studentData: newStudentData
                        });
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    );
  }

  render() {
    const { studentData, selected, selectedStudent, showModal } = this.state;
    if (showModal) {
      return (
        <ModalComponent
          show={showModal}
          setShow={(value) => this.setState({ showModal: value })}
          selectedStudent={selectedStudent}
          addNewStudent={(data) => {
            const newData = [...studentData];
            newData.push(data);
            this.setState({
              studentData: newData
            });
          }}
          selected={selected}
          updateStudentData={(data) => this.updateStudentData(data)}
        />
      );
    }
    return (
      <div>
        {this.displayTable()}
        <Button
          onClick={() => {
            this.setState({ showModal: true });
          }}
        >
          Add new Student
        </Button>
      </div>
    );
  }
}
