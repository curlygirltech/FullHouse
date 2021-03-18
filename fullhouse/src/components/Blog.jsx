import "../componentcss/blog.css";
import { blogURL, config } from "../services";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Blog(props) {
  const [name, setName] = useState([])
  const [post, setPost] = useState([]) //axios post call
  const [getblogPost, setGetBlogPost] = useState(""); // axios get call

  useEffect(() => {
    const userPost = async () => {
      const resp = await axios.get(blogURL, config);
      setGetBlogPost(resp.data.records);
      console.log(resp.data.records);
    };
    userPost();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      name,
      post,
    };
    console.log(newPost);
    const res = await axios.post(blogURL, { fields: newPost }, config);
    console.log(res);
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <div>
      <div className="post-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="post">Make a post</label>
          <input type="text" value={post} onChange={(e) => setPost(e.target.value)} placeholder="make a post" />
          <label htmlFor="author">Author</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
          <button type="submit">Post</button>
        </form>
      </div>
      {/* <div>
        {post.map((post) => {
          const  {
            name,
            post,
          } = memberPost
          console.log(rederedPost)
          return (
            <div >
              <h1>{name}</h1>
              <p>{post}</p>
            </div>
          )
        })}
      </div> */}
    </div>
  
  )
}
