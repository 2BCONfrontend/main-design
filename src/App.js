import React, { Component } from 'react';
import './App.css';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

class HeaderNav extends Component {
  render(){
    return (
      <nav>
        <ul class="header-nav">
          <li class="header-item"> <a href="">2BCON</a> </li>
          <li class="header-login"> <a href=""> <FaUserAlt></FaUserAlt> USER_ID </a> </li>
        </ul>
      </nav>
    );
  }
}

class SubNav extends Component {
  render(){
    return (
      <nav>
        <ul class="main-nav">
          <li class="main-item"> <a href="">리뷰</a> </li>
          <li class="main-item"> <a href="">공구</a> </li>
          <li class="main-item"> <a href="">자유</a> </li>
          <li class="main-item"> <a href=""> <FaRegCalendarAlt></FaRegCalendarAlt> </a></li>
        </ul>
      </nav>
    );
  }
}

class UnderNav extends Component {
  render(){
    return (
      <div id="footer"></div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <HeaderNav></HeaderNav>
      <SubNav></SubNav>
      <UnderNav></UnderNav>
    </div>
  );
}

export default App;
 