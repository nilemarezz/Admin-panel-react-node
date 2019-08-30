import React, { useEffect } from "react";
import Header from "./Navbar/Header";
import Menu from "./Navbar/Menu";
import Footer from "./Navbar/Footer";
import Home from "./Layout/Home";
import Login from "./Login/Login";
import { connect } from "react-redux";
import { getAdminProfile } from "../actions/AuthAdminAction";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./Layout/Profile";

const App = props => {
  useEffect(() => {
    props.getAdminProfile();
  }, []);

  console.log(props.authAdmin.token);

  if (!props.authAdmin.token) {
    return <Login />;
  } else {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Menu />
            <Route path="/" component={Home} exact />
            <Route path="/profile" component={Profile} exact />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};
const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  { getAdminProfile }
)(App);
