import { baseURL, config } from "../services";
import { Link, Route } from "react";
import ConnectionPage from "./ConnectionPage";
import "../componentcss/signupform.css";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SignUpForm(props) {
  const [name, setName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [contact, setContact] = useState("");
  const [languages, setLanguages] = useState("");
  const { role } = useParams();
  const history = useHistory();

  // useEffect(()=> )

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMember = {
      name,
      aboutMe,
      contact,
      languages,
      relationship: role,
    };
    console.log(newMember);
    const res = await axios.post(baseURL, { fields: newMember }, config);

    console.log(res);
    props.setToggleFetch((curr) => !curr);
    history.push("/connections");
  };
  return (
    <div className="mentor-form">
      <h1>{`${role} Form`}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          required
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="about you"></label>
        <input
          required
          type="text"
          placeholder="about you"
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
        />
        <label htmlFor="contact"></label>
        <input
          required
          type="text"
          placeholder="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        {/* <label htmlFor="languages"></label> */}
        {/* <input required type="text" value={languages} onChange={(e)=>setLanguages(e.target.value) } /> */}
        <div className="languages">
          <div className="icon-container">
            <i class="devicon-python-plain-wordmark"></i>
          </div>
          <div className="icon-container">
            <i class="devicon-javascript-plain"></i>
          </div>
          <div className="icon-container">
            <p><i class="devicon-php-plain"></i></p>
          </div>
          <div className="icon-container">
            <p><i class="devicon-c-plain"></i></p>
          </div>
          <div className="icon-container">
            <p><i class="devicon-react-original-wordmark"></i></p>
          </div>
          <div className="icon-container">
            <i class="devicon-java-plain-wordmark"></i>
          </div>
        </div>
        <input type="text" disabled value={role} placeholder={role} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
