import { baseURL, config } from "../services";
import "../componentcss/signupform.css";
import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUpForm(props) {
  const [name, setName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [contact, setContact] = useState("");
  const [languages, setLanguages] = useState([])
  // const [multipleLanguages, setMultilpleLanguages] = useState([])
  const { role } = useParams();
  const history = useHistory();
  const languageIcons = [
    {
      icon: <i class="devicon-python-plain-wordmark"></i>,
      name: "Python"
    },

    {
      icon: <i class="devicon-javascript-plain"></i>,
      name: "javascript"
    },

    {
      icon: <i class="devicon-php-plain"></i>,
      name: "PHP"
    },

    {
      icon: <i class="devicon-react-original-wordmark"></i>,
      name: "React"
    },

    {
      icon: <i class="devicon-java-plain-wordmark"></i>,
      name: "Java"
    },
  ];

  const clickedLanguages = (name) => {
    setLanguages([...languages, name])
  };

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
    const res = await axios.post(baseURL, { fields: newMember, typecast: true }, config);

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
        <div className="languages">
          {languageIcons.map((language, index) => (
            <div key={index} onClick={()=>clickedLanguages(language.name)}> 
              {language.icon}
            </div>
          ))}
        </div>
        <input type="text" disabled value={role} placeholder={role} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
