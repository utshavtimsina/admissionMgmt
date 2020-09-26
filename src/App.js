import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";
import database from "./firebase";
import SignIn from "./Login/SignIn";
import { Button } from "@material-ui/core";

class App extends Component {
  state = {
    login: [
      {
        user: "utshav",
      },
      {
        user: "timsina",
      },
    ],
    auth: false,
    authError: false,
    role: null,
  };
  addUser = (e) => {
    let login = [...this.state.login, e];
    this.setState({
      login: login,
    });
  };
  deleteUser = (e) => {
    let login = this.state.login.filter((user) => {
      return user.user !== e ? true : false;
    });
    this.setState({
      login: login,
    });
  };
  setpeople = (e) => {
    console.log(e);
  };
  checkAuth = (e) => {
    console.log(e);
  };
  setauth = (username, password) => {
    console.log(username, password);
    var data = database
      .collection("user")
      .where("email", "==", username)
      .where("password", "==", password)
      .get()
      .then((snapshot) => {
        snapshot.size === 0
          ? this.setState({
              ...this.state,
              authError: true,
            })
          : snapshot.forEach((doc) => {
              this.setState({
                ...this.state,
                auth: true,
                role: doc.data().role,
                authError: false,
              });
            });
      })
      .catch((err) => alert(err));

    // console.log(data);

    // .get()
    // .then(function (querySnapshot) {
    //   querySnapshot.forEach(function (doc) {

    //     checkAuth(doc);
    //     console.log(doc.id, "  auth:", doc.data());
    //   });
    // })
    // .catch(function (error) {
    //   console.log("Error getting documents: ", error);
    // });

    // .collection("user")
    // .onSnapshot((snapshot) =>
    //   this.setpeople(snapshot.docs.map((doc) => doc.data()))
    // );
  };
  logout = () => {
    this.setState({
      ...this.state,
      auth: false,
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.auth === false ? (
          <SignIn setauth={this.setauth} authError={this.state.authError} />
        ) : (
          <Button onClick={this.logout}> logout</Button>
        )}
        <BrowserRouter>
          <Route path="/" exact></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
