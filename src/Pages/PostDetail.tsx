import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import CommetCards from "../components/CommetCards";
import { Post } from "../data/Types";
import { Comment } from "../data/Types";

function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  //Fetch with axios
  useEffect(() => {
    axios
      .get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      });
    axios
      .get<Comment[]>(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      )
      .then((response) => {
        setComments(response.data);
      });
  }, [id]);

  if (!post) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="wrapper">
        {/* Post Area */}
        <div className="p-4">
          <h1 className="gradient__font mb-4 text-center">
            {post.title.toUpperCase()}
          </h1>
          <p className="text-gray-500 mb-4">{post.body}</p>
        </div>

        {/* Comment Area */}
        <h2 className="text-lg text-gray-600 font-medium my-4">Comments</h2>
        {comments.length === 0 ? (
          <p>No comments found.</p>
        ) : (
          <CommetCards comments={comments} />
        )}
      </div>
    </div>
  );
}

export default PostDetail;
