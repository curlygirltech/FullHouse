

export default function SignUpForm(props) {
  const { role } = props
  
  return (
    <div className="mentor-form">
      <h1>{`${role} Form`}</h1>
      <form>
        <label htmlFor="name"></label>
        <input type="text"/>
        <label htmlFor="about you"></label>
        <input type="text" />
        <label htmlFor="languages"></label>
        <input type="text" />
        <label htmlFor="contact"></label>
        <input type="text" />
        <input type="text" value={role}/>
        <button>Submit</button>
      </form>

    </div>
  )
}
