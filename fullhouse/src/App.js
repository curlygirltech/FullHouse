import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUpForm from "./components/SignUpForm";
import Blog from "./components/Blog"
import ConnectionPage from "./components/ConnectionPage";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [role, setRole] = useState(""); //this is to autofill the form based on who is a mentee/mentor
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const userData = async () => {
      const resp = await axios.get(baseURL, config);
      setData(resp.data.records);
      // console.log(resp.data.records);
      // const relationship = Object.keys(resp.data.records);
      // setRole(relationship);
      // console.log(setRole(relationship))
    };
    userData();
  }, [toggleFetch]);

  return (
    <div>
      <Navbar />
      <div className="app-title">
        <h1>FullHouse</h1>
      </div>
      <Route exact path="/">
        FullHouse Home
        <div className="mentor-link">
          <Link to="/newform/mentor">
            <div onClick={()=>setRole('mentor')}>Mentor</div>
          </Link>
        </div>
        <div>
          <Link to="/newform/mentee">
            <button onClick={()=>setRole('mentee')}>Mentee</button>
          </Link>
        </div>
      </Route>
      <Route exact path="/newform/:role">
        <SignUpForm setToggleFetch={setToggleFetch}/>
      </Route>

      <Route path="/about">FullHouse About</Route>

      <Route path="/blog">FullHouse Blog</Route>

      <Route path="/connections">
        <ConnectionPage data={data} role={role}/>
      </Route>
      <Footer />
    </div>
  );
}

export default App;

//Questions: Is there a neater/more effienct way to do lines 32-38?
