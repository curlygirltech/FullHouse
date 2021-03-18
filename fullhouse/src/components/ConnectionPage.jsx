import axios from "axios";
import "../componentcss/connection.css"
import { baseURL, config } from "../services"
import { useParams } from "react-router-dom"


export default function ConnectionPage(props) {
  const { data, role,} = props;
  
  
  const deleteMember = async (memberId) => {
    console.log(memberId)
    
    const memberURL = `${baseURL}/${memberId}`
    await axios.delete(memberURL, config)
    props.setToggleFetch((curr)=>!curr)
  }
    
  const filtered = data.filter((member) => {
    return member.fields.relationship !== role;
  });
  // console.log(filtered);

  //use filter method through entries based on whats in props, get the mentees or mentors
  //output that on the page
  return (
    <div>
      <div className="post-container">
        <form>
          <label htmlFor="post">Make a post</label>
          <input type="text" placeholder="make a post" />
          <label htmlFor="author">Author</label>
          <input type="text" placeholder="Author" />
          <button>Post</button>
        </form>
      </div>
      <div className="connect-container">
        <h3>Let's Connect</h3>
        {filtered.map((person) => {
          console.log(person)
          const {
            name,
            contact,
            aboutMe,
            relationship,
            languages,
          } = person.fields;
          return (
            <div >
              <h1>{name}</h1>
              <p>{languages}</p>
              <p>{aboutMe}</p>
              <p>{relationship}</p>
              <p>{contact}</p>
              <button onClick={()=>deleteMember(person.id)}>Delete</button>
              {/* //calling the function with an argument. i need to invoke the function inside of an anonoymous function */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
