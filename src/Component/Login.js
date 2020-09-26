import React, { useEffect } from "react";
import database from "../firebase";
function Login({ login, deleteUser }) {
  const [people, setpeople] = React.useState([]);
  useEffect(() => {
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setpeople(snapshot.docs.map((doc) => doc.data()))
      );
  }, [people]);
  const user = people.map((user) => {
    return (
      <div className="login" key={user.userName}>
        <p>
          {" "}
          {user.userName}{" "}
          <button onClick={() => deleteUser(user.userName)}> Delete</button>
        </p>
      </div>
    );
  });
  return (
    <div className="loginuser">
      {user}
      <p>this is not it</p>
    </div>
  );
}
export default Login;
