

export default function SignUpForm(props) {
  const { role } = props
  
  return (
    <div className="mentor-form">
      <h1>{`${role} Form`}</h1>
      <form>
        <label htmlFor="name"></label>
        <input type="text" placeholder="name"/>
        <label htmlFor="about you"></label>
        <input type="text-area" placeholder="about you"/>
        <label htmlFor="languages"></label>
        <input type="text" />
        <label htmlFor="contact"></label>
        <input type="text" placeholder="contact" />
        <input type="text" value={role} placeholder={role}/>
        <button>Submit</button>
      </form>

    </div>
  )
}
