import { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || "");
    const [author, setAuthor] = useState(props.author || "");
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || "");
    const [shortDescription, setShortDescription] = useState(props.shortDescription || "");
    const [content, setContent] = useState(props.content || "");
    
    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
    };

    return (
        <Row className="justify-content-center">
        <Col className="col-7">
            <FormGroup style={{ width: "260px" }}>
                <Form.Label>Title</Form.Label>
                <Form.Control value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter title"/>
                <Form.Label>Author</Form.Label>
                <Form.Control value={author} onChange={e => setAuthor(e.target.value)} placeholder="Enter author"/>
                <Form.Label>Published</Form.Label>
                <Form.Control value={publishedDate} onChange={e => setPublishedDate(e.target.value)} placeholder="Enter date" />
                <Form.Label>Short description</Form.Label>
                <Form.Control value={shortDescription} onChange={e => setShortDescription(e.target.value)} placeholder="Leave a comment here" style={{ width: "400px", height: "100px" }}/>
                <Form.Label>Main content</Form.Label>
                {/* <Form.Control value={content} onChange={e => setContent(e.target.value)} placeholder="Leave a comment here" style={{ width: "360px", height: "200px" }}/> */}
                <ReactQuill theme="snow" value={content} onChange={setContent} placeholder="Leave a comment here" style={{ width: "400px" }}/>
            </FormGroup>
            <Button onClick={handleSubmit} className="my-3">Add post</Button>
        </Col>
    </Row>
    )
}

export default PostForm;