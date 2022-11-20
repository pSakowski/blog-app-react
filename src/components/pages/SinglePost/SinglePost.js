import { useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { getPostById } from "../../../redux/postsRedux";
import { removePost } from "../../../redux/postsRedux";

const SinglePost = () => {

    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    const removePostClick = () => {
        dispatch(removePost(postData.id))
        setShow();
    };

    if(!postData) return <Navigate to="/" />;
    else
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
            <Link to={"/post/edit/" + postData.id}><Button className="my-3 mx-3" variant="outline-info">Edit</Button></Link>
            <Button onClick={handleShow} variant="outline-danger">Delete</Button>
        </Col>
    </Row>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
    </Modal.Header>
    <Modal.Body>This operation will completely remove this post from the app. Are you sure you want to do that?
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="danger" onClick={removePostClick}>Remove</Button>
    </Modal.Footer>
    </Modal>
    </>
    )
}

export default SinglePost;