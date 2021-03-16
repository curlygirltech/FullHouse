import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUpForm from "./components/SignUpForm"
import ConnectionPage from "./components/ConnectionPage";
import { Link, Route } from "react-router-dom";
import axios from "axios"
import { baseURL, config } from "./services"
import {useState, useEffect } from "react"
import "./App.css";


function App() {
  const [data, setData] = useState([])
  const [role, setRole] = useState() //this is to autofill the form based on who is a mentee/mentor
  useEffect(() => {
    const userData = async() => {
      const resp = await axios.get(baseURL, config)
      setData(resp.data.records)
      console.log(resp.data.records)
      const relationship = Object.keys(resp.data.records)
      setRole(relationship) 
      // console.log(setRole(relationship))

    }
    userData()
},[])
  
  return (
    <div>
      <Navbar />
      <div className="app-title">
        <h1>FullHouse</h1>
      </div>
      <Route exact path="/">FullHouse Home
        <Link to="/newform"> 
          <button>Mentor</button>
        </Link>
        <Link to="/newform" >
          <button>Mentee</button>
        </Link>
      </Route>
      <Route path="/about">FullHouse About</Route>
      <Route path="/blog">FullHouse Blog</Route>
      <Route path="/newform">
        <SignUpForm key={role} role={role}/>
      </Route>
      <Route path="/connections">
            <ConnectionPage data={data} />
        </Route>
    <Footer />
    </div>
  );
}

export default App;

//Questions: Is there a neater/more effienct way to do lines 32-38?
