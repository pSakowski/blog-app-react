import { Col, Card, Row, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPostByCategory } from '../../../redux/postsRedux';
import { dateToStr } from '../../../utils/dateToStr';

const SingleCategory = () => {

  const { categoryId } = useParams();
  
  const posts = useSelector(state => getPostByCategory(state, categoryId));
  
  if (posts.length === 0)
  return (
  <Row>
    <Card.Title className="mb-4"><strong><h1>Category: {categoryId}</h1></strong></Card.Title>
    <Card.Text>No posts in this category...</Card.Text>
  </Row>
  );
  
  else
  
  return (
  <>
  <Card.Title className="mb-4"><strong><h1>Category: {categoryId}</h1></strong></Card.Title>
  <Row xs={1} md={1} lg={3}>
    {posts.map(post => (
    <Col key={post.id}>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text className="my-0"><strong>Author: </strong>{post.author}</Card.Text>
          <Card.Text className="my-0"><strong>Published: </strong>{dateToStr(post.publishedDate)}</Card.Text>
          <Card.Text><strong>Category: </strong>{post.category}</Card.Text>
          <Card.Text className="mb-3">{post.shortDescription}</Card.Text>
          <Link to={"/post/" + post.id}>
            <Button variant="primary">Read more</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
    ))}
  </Row>
  </>
  );
}

export default SingleCategory;