import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Posts from "../../features/Posts/Posts";

const Home = () => {

    return (
        <>
        <h1>All posts</h1>
        <Link to="/post/add"><Button className="mb-5" variant="outline-info">Add post</Button></Link>
        <Posts />
        </>
    )
}

export default Home;