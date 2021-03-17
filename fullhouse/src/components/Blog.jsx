

export default function Blog() {
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
    </div>
  )
}
