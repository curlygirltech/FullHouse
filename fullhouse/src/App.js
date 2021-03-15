import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
// import {useState} from "react"
import './App.css';

function App() {
console.log(process.env)
  return (
<div>      
      <Navbar />
    <div className="app-title">
        <h1>FullHouse</h1>
    </div>
      <Footer />    
</div>
  );
}

export default App;
