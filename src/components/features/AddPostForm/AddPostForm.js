
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../redux/postsRedux";
import shortid from "shortid";

const ListForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [published, setPublished] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({ title, author, published, description, content, id: shortid() }));
        navigate('/');
     };

	return (
        <Row className="justify-content-center">
            <Col className="col-7">
                <FormGroup style={{ width: "260px" }}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter title" type="text"/>
                    <Form.Label>Author</Form.Label>
                    <Form.Control value={author} onChange={e => setAuthor(e.target.value)} placeholder="Enter author" type="text"/>
                    <Form.Label>Published</Form.Label>
                    <Form.Control value={published} onChange={e => setPublished(e.target.value)} placeholder="Enter date" type="date"/>
                    <Form.Label>Short description</Form.Label>
                    <Form.Control value={description} onChange={e => setDescription(e.target.value)} placeholder="Leave a comment here" type="text" style={{ width: "360px", height: "100px" }}/>
                    <Form.Label>Main content</Form.Label>
                    <Form.Control value={content} onChange={e => setContent(e.target.value)} placeholder="Leave a comment here" type="text" style={{ width: "360px", height: "200px" }}/>
                </FormGroup>
                <Button onClick={handleSubmit} className="my-3">Add post</Button>
            </Col>
        </Row>
	);
};

export default ListForm;