import fire from "../config/firebase";

const db = fire.firestore();

export async function authentication(userName, password, role, props) {
  const snapshot = await db.collection("Students").get();
  snapshot.forEach((doc) => {
    if (role === "admin") {
      if (role === doc.data()["role"]) {
        if (
          userName === doc.data()["userName"] &&
          password === doc.data()["password"]
        ) {
          localStorage.setItem("authState", "true");
          props.history.push("/admin");
        } else return "adminFailed";
      }
    } else if (role === "student") {
      if (role === doc.data()["role"]) {
        if (
          userName === doc.data()["userName"] &&
          password === doc.data()["password"]
        ) {
          localStorage.setItem("authState", userName.toUpperCase());
          props.history.push({
            pathname: "/home",
            userName: userName,
          });
        } else return "studentFailed";
      }
    } else return "failed";
  });
}

export async function addUser(userName, password, props) {
  await db.collection("Students").add({
    userName: userName.toUpperCase(),
    password: password,
    role: "student",
  });
  props.history.push("/admin");
}
