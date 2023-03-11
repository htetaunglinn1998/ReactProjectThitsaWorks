import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import HomePage from "./Pages/HomePage";

//Lazy Loading for the pages
const PostDetail = lazy(() => import("./Pages/PostDetail"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
