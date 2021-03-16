import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUpForm from "./components/SignUpForm"
import ConnectionPage from "./components/ConnectionPage";
import { Route } from "react-router-dom";
import axios from "axios"
import { baseURL, config } from "./services"
import {useState, useEffect } from "react"
import "./App.css";


function App() {
  const [data, setData] = useState([])
  const [role, setRole] = useState()
  useEffect(() => {
    const userData = async() => {
      const resp = await axios.get(baseURL, config)
      console.log(resp.data.records)
      setData(resp.data.records)
    }
    userData()
},[])
  
  return (
    <div>
      <Navbar />
      <Route exact path="/">FullHouse Home</Route>
      <Route path="/about">FullHouse About</Route>
      <Route path="/blog">FullHouse Blog</Route>
      <Route path="/newform">
        <SignUpForm role={role}/>
      </Route>
      <Route path="/connections">
            <ConnectionPage data={data} />
        </Route>
      <div className="app-title">
        <h1>FullHouse</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
