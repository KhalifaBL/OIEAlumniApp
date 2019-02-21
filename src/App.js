import React, { Component } from "react";
// Calling bootsrap
import "bootstrap/dist/css/bootstrap.css";
import Alumni from "./Components/Alumni";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import AddAlumni from "./Components/AddAlumni";
// confirmAlert is for the popup for confirmation that the user want to delete an alumni
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
//Notification when alumni is added
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

class App extends Component {
  state = {
    // showMe is a state of the Add Alumni form-pop up, false it's hidden, true it's visible
    showMe: false,
    // alumnis is a table containing state of the Alumni List
    alumnis: [
      {
        name: "Hachem",
        lastName: "Gaieb",
        age: 25,
        graduation: "2017-05-12",
        email: "hgaib@g.emporia.edu",
        id: 1
      },

      {
        name: "Munashe ",
        lastName: "Mangwendeza",
        age: 23,
        graduation: "2018-12-09",
        email: "mmangwen@g.emporia.edu",

        id: 2
      },

      {
        name: "Grayce ",
        lastName: "McAllister",
        age: 23,
        graduation: "2018-12-09",
        email: "gmcallis@g.emporia.edu",
        id: 3
      }
    ]
  };
  createNotification = type => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success("Success message", "Title here");
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
      }
    };
  };
  /* this function is responsible for adding a new alumni to the table above
   It takes as parameter an " alumni" then add it to this state
   When it's passed in parameter in <AddAlumni>, <AddAlumni will take care
   of displaying a form to fill in the information about the new alumni*/
  addAlumni = alumni => {
    alumni.id = Math.floor(Math.random() * 10);
    let alumnis = [...this.state.alumnis, alumni];
    this.setState({
      alumnis: alumnis
    });
  };
  closeForm = () => {
    this.setState({ showMe: false });
  };
  /*this function is responsible for deleting an Alumni
    It takes as a parameter an id, then it will passed itself as a parameter for 
    <Alumni> which is the component that is taking care of displaying our Alumnis in a nice table*/
  deleteAlumni = id => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          // this is for creating a confirmation pop up
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
  /* this method will update the state once it's clicked, and it will be executed 
     every time the AddAlumni div is clicked to display the AddAlumni Form*/
  HandleShowMe = () => {
    this.setState({
      showMe: !this.state.showMe
    });
  };
  /*
   *******************************************************************
   *******************************************************************
   *******************************************************************
   *******************************************************************
   */
  /*The render for App.js is the main method that handle the ReactDom to display
     all the components that we just created */
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="row both-sides">
          <div className="col-md-2">
            {/*Sidebar is the left part of the screen*/}
            <Sidebar />
          </div>
          {/*Core App is the right part of the screen( exclude Navbar and SideBar from the screen*/}
          <div className="Core-App col-md-10">
            {/*MainTable is the element that contains all the buttons and the list of the alumnis*/}
            <div className="MainTable crop-bottom-right-corner">
              <h1 className="TableHeader"> List of ESU Alumni</h1>

              <div className="ButtonNavBar">
                <div className="arrow">
                  <button className="fontaweButton ">
                    <i class="fas fa-angle-double-right" />
                  </button>
                </div>

                {/*Add Button for adding an alumni and it will run HandleShowMe to show the toggle*/}
                <div
                  onClick={() => {
                    this.HandleShowMe();
                  }}
                  className="AddButton"
                >
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
            {this.state.showMe ? (
              <AddAlumni
                addAlumni={this.addAlumni}
                closeForm={this.closeForm}
              />
            ) : (
              <div className="fake" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
