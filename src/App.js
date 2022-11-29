import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./components/pages/Home/Home"
import SinglePost from "./components/pages/SinglePost/SinglePost.js"
import PostAdd from "./components/pages/PostAdd/PostAdd"
import PostEdit from "./components/pages/PostEdit/PostEdit"
import About from "./components/pages/About/About"
import NotFound from "./components/pages/NotFound/NotFound";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import Categories from "./components/pages/Category/Category";
import SingleCategory from "./components/pages/SingleCategory/SingleCategory";

const App = () => {
  return (
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/post/add" element={<PostAdd />} />
          <Route path="/post/edit/:id" element={<PostEdit />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="categories/:category" element={<SingleCategory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
  );
}

export default App;
