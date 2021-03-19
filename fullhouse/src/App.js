import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUpForm from "./components/SignUpForm";
import Blog from "./components/Blog";
import ConnectionPage from "./components/ConnectionPage";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [role, setRole] = useState(""); //this is to autofill the form based on who is a mentee/mentor
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
        <div className="mentor-link">
          <Link to="/newform/mentor">
            <button onClick={() => setRole("Mentor")}>Mentor</button>
          </Link>
        </div>
        <div>
          <Link to="/newform/mentee">
            <button onClick={() => setRole("Mentee")}>Mentee</button>
          </Link>
        </div>
      </Route>
      <Route exact path="/newform/:role">
        <SignUpForm setToggleFetch={setToggleFetch} />
      </Route>

      <Route path="/about">FullHouse About</Route>

      <Route path="/blog">
        FullHouse Blog
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
