import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Alumni from "./Components/Alumni";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import AddAlumni from "./Components/AddAlumni";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class App extends Component {
  state = {
    alumnis: [
      {
        name: "ahmed",
        lastName: "ben mazroug",
        age: 25,
        graduation: "2018-05-12",
        email: "ahmed@gmail.com",
        id: 1
      },

      {
        name: "khalifa",
        lastName: "arfa",
        age: 22,
        graduation: "2017-05-12",
        email: "khalifa@gmail.com",

        id: 2
      },

      {
        name: "aymen",
        lastName: "rajhi",
        age: 21,
        graduation: "2016-05-12",
        email: "aymen@gmail.com",
        id: 3
      }
    ]
  };

  addAlumni = alumni => {
    alumni.id = Math.floor(Math.random() * 10);
    let alumnis = [...this.state.alumnis, alumni];
    this.setState({
      alumnis: alumnis
    });
  };

  deleteAlumni = id => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui popup">
            <div className="ConfirmText">
              <p>Are you sure you want to delete this Alumni?</p>
            </div>
            <div className="wrapButtons">
              <button className="CancelButton" onClick={onClose}>
                Cancel
              </button>
              <button
                className="DeleteButton"
                onClick={() => {
                  let alumnis = this.state.alumnis.filter(alumni => {
                    return alumni.id !== id;
                  });
                  this.setState({
                    alumnis: alumnis
                  });
                  onClose();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="row both-sides">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="Core-App col-md-10">
            <div className="MainTable ">
              <h1 className="TableHeader"> List of ESU Alumni</h1>

              <div className="ButtonNavBar">
                <div className="arrow">
                  <button className="fontaweButton ">
                    <i class="fas fa-angle-double-right" />
                  </button>
                </div>
                <div className="AddButton">
                  {" "}
                  Add Alumni <i class="fas fa-user-plus" />
                </div>
                <div className="AddButton">
                  {" "}
                  Add Alumni List <i class="fas fa-clipboard-list" />
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Age</th>
                      <th scope="col">Graduation</th>
                      <th scope="col">Email</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <Alumni
                      alumniJsonList={this.state.alumnis}
                      deleteAlumni={this.deleteAlumni}
                    />
                  </tbody>
                </table>
              </div>
            </div>
            <AddAlumni addAlumni={this.addAlumni} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
