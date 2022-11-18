import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home/Home"
import PostId from "./components/pages/PostId/PostId"
import PostAdd from "./components/pages/PostAdd/PostAdd"
import PostEdit from "./components/pages/PostEdit/PostEdit"
import About from "./components/pages/About/About"
import NotFound from "./components/pages/NotFound/NotFound";

const App = () => {
  return (
    <div>
      <h1>helloWorld!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostId />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
