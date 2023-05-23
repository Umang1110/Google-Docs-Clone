import React from "react";
import "./styles.css"; // Import your CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faTable,
  faFilePowerpoint,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import driveIcon from "./icons/drive.png";
import calendarIcon from "./icons/calendar.png";
import keepIcon from "./icons/keep.png";
import mapsIcon from "./icons/maps.png";
class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <a href="https://calendar.google.com">
              {/* <FontAwesomeIcon icon={faFileAlt} /> */}
              <img src={calendarIcon} alt="Docs" className="icon" />
            </a>
          </li>
          <li>
            <a href="https://keep.google.com">
              {/* <FontAwesomeIcon icon={faTable} /> */}
              <img src={keepIcon} alt="Docs" className="icon" />
            </a>
          </li>
          <li>
            <a href="https://drive.google.com">
              {/* <FontAwesomeIcon icon={faFilePowerpoint} /> */}
              <img src={driveIcon} alt="Docs" className="icon" />
            </a>
          </li>
          <li>
            <a href="https://maps.google.com">
              {/* <FontAwesomeIcon icon={faFolder} /> */}
              <img src={mapsIcon} alt="Docs" className="icon" />
            </a>
          </li>
          {/* Add more Google Apps links */}
        </ul>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="main-content">{/* Your main content */}</div>
      </div>
    );
  }
}

export default App;
