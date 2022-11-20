import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../../../redux/postsRedux";

const PostId = () => {

    const { postId } = useParams();
    const postData = useSelector(state => getPostById(state, postId));

    return (
        <>
        <Row className="justify-content-center">
        <Col className="col-7">
          <Card className="border-0">
            <Card.Body>
              <Card.Title className=""><h1>{postData.title}</h1></Card.Title>
              <Card.Text className="my-0"><strong>Author: </strong>{postData.author}</Card.Text>
              <Card.Text><strong>Published: </strong>{postData.publishedDate}</Card.Text>
              <Card.Text className="mb-3">{postData.shortDescription}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-3">
            <Link to={"/post/edit/:id" + postData.id}><Button className="my-3 mx-3" variant="outline-info">Edit</Button></Link>
            <Link to={"/"}><Button variant="outline-danger">Delete</Button></Link>
        </Col>
        </Row>
        </>
    )
}

export default PostId;