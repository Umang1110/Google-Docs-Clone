import React from "react";
import "./styles.css"; // Import your CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faTable,
  faFilePowerpoint,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import docsIcon from "./icons/docs.png";
import shareIcon from "./icons/lock.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <a href="https://docs.google.com">
          <img src={docsIcon} alt="Docs" className="icon" />
        </a>
        <h1 className="file-name">Untitled Document</h1>
        <span className="share">Share</span>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="main-content"></div>
      </div>
    );
  }
}

export default App;
