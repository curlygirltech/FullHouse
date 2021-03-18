import "../componentcss/blog.css";
import { blogURL, config } from "../services";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Blog(props) {
  const [name, setName] = useState([]);
  const [post, setPost] = useState([]); //axios post call
  const [getBlogPost, setGetBlogPost] = useState([]); // axios get call
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    const userPost = async () => {
      const resp = await axios.get(blogURL, config);
      setGetBlogPost(resp.data.records);
      console.log(resp.data.records);
    };
    userPost();
  }, [toggle]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      name: name,
      post: post,
    };
    await axios.post(blogURL, { fields: newPost }, config);
    setToggle((curr) => !curr);
  };
  
  return (
    <div>
      <div className="post-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="post">Make a post</label>
          <input
            type="text"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="make a post"
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
          <button type="submit">Post</button>
        </form>
      </div>
      <div>
        {getBlogPost.map((
          post //you are mapping through youre info from your get call
        ) => (
          <div key={post.id} className="map-function">
            <h1>{post.fields.name}</h1>
            <p>{post.fields.post}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
