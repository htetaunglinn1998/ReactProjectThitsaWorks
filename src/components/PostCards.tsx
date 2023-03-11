import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { Post } from "../data/Types";

interface PostCardsProps {
  filteredPosts: Post[];
}

const PostCards = ({ filteredPosts }: PostCardsProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const listItem = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <m.ul variants={container} initial="hidden" animate="show">
      {filteredPosts.map((post) => (
        <Link
          key={post.id}
          to={`/posts/${post.id}`}
          className="cursor-pointer group"
        >
          <m.li className="card__design" variants={listItem}>
            <h2 className="text-lg font-medium mb-2 text-blue-500  group-hover:underline rounded-md">
              {post.title.toUpperCase()}
            </h2>
            <p className="text-gray-500">{post.body}</p>
          </m.li>
        </Link>
      ))}
    </m.ul>
  );
};

export default PostCards;
