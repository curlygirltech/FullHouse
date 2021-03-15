

export default function MenteeForm() {
  return (
    <div className="mentee-form">
      <h1>Mentee Form</h1>
      <label htmlFor="name"></label>
        <input type="text"/>
        <label htmlFor="about you"></label>
        <input type="text" />
        <label htmlFor="languages"></label>
        <input type="text" />
        <label htmlFor="contact"></label>
        <input type="text" />
        <button>Submit</button>
    </div>
  )
}
