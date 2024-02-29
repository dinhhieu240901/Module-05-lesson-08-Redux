import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/action";
import { Link, useNavigate } from "react-router-dom";

function Post() {
  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);
  const hasErrors = useSelector((state) => state.hasErrors);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    return posts.map((post) => (
      <div key={post.id} className="card mb-3">
        <div className="card-body">
          <h1 className="card-title">{post.title}</h1>
          <p className="card-text">{post.body}</p>
          <Link to={`/edit-post/${post.id}`} className="btn btn-primary">
            Update
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <h1 className="text-center text-4xl">Posts</h1>
      <Link to="/add-post" className="btn btn-primary">
        Add New Post
      </Link>

      {renderPosts()}
    </div>
  );
}

export default Post;
