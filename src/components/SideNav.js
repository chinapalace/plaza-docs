import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Overview from "../components/Overview";
import CommonIssues from "../pages/CommonIssues";
import HowTo from "../pages/HowTo";
import Basics from "../pages/Basics";
import PhmBasics from "../pages/PhmBasics";
import Components from "../pages/Components";
import CheckList from "../pages/CheckList";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

class SideNav extends Component {
  render() {
    return (
      <Router>
        <div className="f-menu-active">
          <div className="f-menu">
            <h3 id="title">Plaza Devs 2019</h3>
            <ul>
              <li>
                <NavLink className="f-menu__heading" to="/">
                  Overview
                </NavLink>
              </li>
            </ul>
            <ul>
              <h5>Breeze</h5>

              <li>
                <NavLink className="f-menu__heading" to="/basics">
                  Basics
                </NavLink>
              </li>

              <li>
                <NavLink className="f-menu__heading" to="/how-to">
                  How-To
                </NavLink>
              </li>
              <li>
                <NavLink className="f-menu__heading" to="/common-issues">
                  Common Issues
                </NavLink>
              </li>
            </ul>
            <ul>
              <h5>plazahomemortgage.com</h5>
              <li>
                <NavLink className="f-menu__heading" to="/phm-basics">
                  Basics
                </NavLink>
              </li>

              <li>
                <NavLink className="f-menu__heading" to="/components">
                  Components
                </NavLink>
              </li>
            </ul>
            <ul>
              <h5>New Devs</h5>
              <li>
                <NavLink className="f-menu__heading" to="/checklist">
                  Checklist
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="f-container">
            <div className="f-control-bar">
              <div className="f-control f-menu-toggle">
                <svg>
                  <a href="#f-icon-menu" />
                </svg>
              </div>
            </div>
            <Route exact path="/" component={Overview} />
            <Route path="/how-to" component={HowTo} />
            <Route path="/basics" component={Basics} />
            <Route path="/common-issues" component={CommonIssues} />
            <Route path="/phm-basics" component={PhmBasics} />
            <Route path="/components" component={Components} />
            <Route path="/checklist" component={CheckList} />
          </div>
        </div>
      </Router>
    );
  }
}
export default SideNav;
