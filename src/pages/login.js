import { Input, makeStyles, Button, Radio } from "@material-ui/core";
import React, { useState } from "react";
import { authentication } from "../services/authService";
import auth from "../assets/auth.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Login = (props) => {
  const classes = useStyles();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName === "" || password === "" || role === "")
      alert("All fields are required");
    else authentication(userName, password, role, props);
  };

  return (
    <div>
      <div style={{ margin: "5em" }}>
        <img style={{ height: "10em" }} src={auth} alt="" />
      </div>
      <div style={{ margin: "5em" }}>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleLogin}
        >
          <Input
            placeholder="User Name"
            name="userName"
            value={userName}
            style={{ width: "20em" }}
            required="true"
            inputProps={{ "aria-label": "description" }}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <br />
          <Input
            style={{ width: "20em" }}
            value={password}
            name="password"
            placeholder="Password"
            type="password"
            required="true"
            inputProps={{ "aria-label": "description" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Radio
            checked={role === "admin"}
            onChange={(e) => setRole("admin")}
            value="admin"
            name="admin"
          ></Radio>
          Admin
          <Radio
            checked={role === "student"}
            onChange={(e) => setRole("student")}
            value="student"
            name="student"
          ></Radio>
          Student
          <br />
          <br />
          <Button
            variant="contained"
            type="submit"
            style={{
              width: "20em",
              backgroundColor: "#D64550",
              color: "white",
            }}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
