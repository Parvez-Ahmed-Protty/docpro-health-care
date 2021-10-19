import {
  BrowserRouter as Router, Route,
  Switch
} from "react-router-dom";
import "./App.css";
import AuthProvider from "./Pages/context/AuthProvider";
import AboutUs from "./Pages/Home/AboutUs/AboutUs";
import Contact from "./Pages/Home/Contact/Contact";
import DoctorDetails from "./Pages/Home/DoctorDetails/DoctorDetails";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Home/Login/Login";
import NotFound from "./Pages/Home/NotFound/NotFound";
import Process from "./Pages/Home/Process/Process";
import Register from "./Pages/Home/Register/Register";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/doctorDetails/:id">
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>
            <Route exact path="/process">
              <Process></Process>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route> 
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
