import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";

const Posts = props => {

    const posts = useSelector(getAllPosts)

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {posts.map(post => (
        <Col>
          <Card>
            <Card.Body>
              <Card.Title as="h3">{post.title}</Card.Title>
              <Card.Text as="p" className='my-0'><strong>Author: </strong>{post.author}</Card.Text>
              <Card.Text as="p" ><strong>Published: </strong>{post.publishedDate}</Card.Text>
              <Card.Text className='mb-4'>{post.shortDescription}</Card.Text>
              <Link key={props.postId} to={"/post/" + props.postId}><Button variant="primary">Read more</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Posts;