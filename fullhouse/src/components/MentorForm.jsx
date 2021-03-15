

export default function MentorForm() {
  return (
    <div className="mentor-form">
      <h1>Mentor Form</h1>
      <form>
        <label htmlFor="name"></label>
        <input type="text"/>
        <label htmlFor="about you"></label>
        <input type="text" />
        <label htmlFor="languages"></label>
        <input type="text" />
        <label htmlFor="contact"></label>
        <input type="text" />
        <button>Submit</button>
      </form>

    </div>
  )
}
