import { baseURL, config } from "../services"
import { Link, Route } from "react"
import ConnectionPage from "./ConnectionPage"
import {useState, useEffect} from "react"
import axios from "axios"


export default function SignUpForm(props) {
  const [name, setName] = useState("")
  const [aboutYou, setAboutYou] = useState("")
  const [contact, setContact] = useState("")
  const [languages, setLanguages] = useState("")
  const { role } = props


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMember = {
      name,
      aboutYou,
      contact,
      languages,
    }
    await axios.post(baseURL, {fields: newMember }, config)
  }
  return (
    <div className="mentor-form">
      <h1>{`${role} Form`}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value) }/>
        <label htmlFor="about you"></label>
        <input type="text-area" placeholder="about you" value={aboutYou}onChange={(e)=>setAboutYou(e.target.value) }/>
        <label htmlFor="languages"></label>
        <input type="text" value={languages} onChange={(e)=>setLanguages(e.target.value) } />
        <label htmlFor="contact"></label>
        <input type="text" placeholder="contact" value={contact} onChange={(e)=>setContact(e.target.value) }/>
        <input type="text" value={role} placeholder={role}/>
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}
