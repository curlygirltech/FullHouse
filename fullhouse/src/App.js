import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUpForm from "./components/SignUpForm";
import Blog from "./components/Blog";
import About from "./components/About";
import ConnectionPage from "./components/ConnectionPage";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [role, setRole] = useState("mentee"); //this is to autofill the form based on who is a mentee/mentor
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const userData = async () => {
      const resp = await axios.get(baseURL, config);
      setData(resp.data.records);
    };
    userData();
  }, [toggleFetch]);

  return (
    <div className="extra-body-div">
      <Navbar />
      <div className="app-title">
        <Link to="/">
          <img src="https://imgur.com/k1mgdye.png" alt="app-logo" />
        </Link>
      </div>
        <div className="body-2"> 
        <Route exact path="/">
          <div className="home-text">
        <h2>Welcome to Full House</h2>
        <p>A home for beginner coders to connect with coding professionals</p>
          </div>
        <div className="button-container">
          <Link to="/newform/mentor">
            <button className="home-page-buttons" onClick={() => setRole("mentor")}>Mentor</button>
          </Link>        
        <Link to="/newform/mentee">
            <button className="home-page-buttons" onClick={() => setRole("mentee")}>Mentee</button>
          </Link>
        </div>
      </Route>
      <Route exact path="/newform/:role">
        <SignUpForm setToggleFetch={setToggleFetch} />
      </Route>

      <Route path="/about">
          <About/>
      </Route>
      <Route path="/blog">
        <Blog setToggleFetch={setToggleFetch} />
      </Route>

      <Route path="/connections">
        <ConnectionPage
          data={data}
          role={role}
          setToggleFetch={setToggleFetch}
          />
      </Route>
      <Footer />
          </div>
    </div>
  );
}

export default App;

//Questions: Is there a neater/more effienct way to do lines 32-38?
