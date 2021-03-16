

export default function ConnectionPage(props) {
  const {data} = props
  console.log(data)
  //use filter method through entries based on whats in props, get the mentees or mentors 
  //output that on the page 
  return (
    <div className="connection-container">   
      {data.map((person) => {
        const {name, contact, aboutMe, relationship, language} = person.fields
        return <div>
          <h1>{name}</h1>
          <p>{language}</p>
          <p>{aboutMe}</p>      
          <p>{relationship}</p>      
          <p>{contact}</p>      
        </div>
      })}
      <h1>Connection Page</h1>
    </div>
  )
}
