import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editPost, fetchPosts } from "../redux/action";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    const post = posts.find((post) => post.id === Number(id));
    if (post) {
      setTitle(post.title);
      setContent(post.body);
    }
  }, [posts, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPost(id, { title, body: content }))
      .then((status) => {
        alert(`Post updated successfully: ${status}`);
        navigate("/");
      })
      .catch((status) => {
        console.error(`Error updating post. Status code: ${status}`);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4"> Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          className="form-control"
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-3">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditPost;
