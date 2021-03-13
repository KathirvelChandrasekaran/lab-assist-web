import "./App.css";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./pages/admin";
import Home from "./pages/home";
import ApproveHardware from "./pages/approveHardware";
import ApproveSoftware from "./pages/approveSoftware";
import ApproveRemote from "./pages/approveRemote";
import ViewStudents from "./pages/viewStudents";
import AddStudent from "./pages/addStudent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/home" component={Home} />
        <Route path="/approveHardware" component={ApproveHardware} />
        <Route path="/approveSoftware" component={ApproveSoftware} />
        <Route path="/approveRemote" component={ApproveRemote} />
        <Route path="/viewStudents" component={ViewStudents} />
        <Route path="/addStudent" component={AddStudent} />
      </div>
    </BrowserRouter>
  );
}

export default App;
