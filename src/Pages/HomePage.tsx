import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/features/postsSlice";
import { RootState } from "../store/store";
import store from "../store/store";
import PostCards from "../components/PostCards";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.data);

  //Fetch datas when Didmount
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  //SearchTerm from search inputbox
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) => {
    return post.title.includes(searchTerm);
  });

  return (
    <div className="container ">
      <div className="wrapper">
        <h1 className="gradient__font pb-4">JSONPlaceholder API</h1>
        <div className="w-full flex justify-center items-center">
          <input
            type="text"
            placeholder="Search posts..."
            className="border border-blue-300 focus:shadow-md focus:outline-blue-500 text-blue-500 px-4 py-2 rounded-md mb-4 w-[80%] placeholder:text-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredPosts.length === 0 ? (
          <img
            className="w-[300px] "
            src="https://res.cloudinary.com/dqu7jnyue/image/upload/v1678461961/ThitsaWorks/No_Results_Found___-_Edited_rqapec.png"
            alt="no result found"
          />
        ) : (
          <PostCards filteredPosts={filteredPosts} />
        )}
      </div>
    </div>
  );
};

export default HomePage;

type AppDispatch = typeof store.dispatch;
