import { motion as m } from "framer-motion";
import { Comment } from "../data/Types";

interface CommentCardsProps {
  comments: Comment[];
}

const CommetCards = ({ comments }: CommentCardsProps) => {
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
      {comments.map((comment) => (
        <m.li key={comment.id} className="card__design" variants={listItem}>
          <h3 className="text-lg font-medium">{comment.name}</h3>
          <p className="text-gray-500">{comment.body}</p>
          <a className="text-blue-500" href={`mailto:${comment.email}`}>
            {comment.email}
          </a>
        </m.li>
      ))}
    </m.ul>
  );
};

export default CommetCards;
