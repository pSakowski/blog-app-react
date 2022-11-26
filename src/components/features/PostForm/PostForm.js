import { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useForm } from "react-hook-form";

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || "");
    const [author, setAuthor] = useState(props.author || "");
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || "");
    const [shortDescription, setShortDescription] = useState(props.shortDescription || "");
    const [content, setContent] = useState(props.content || "");

    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    
    const handleSubmit = () => {
        setContentError(!content);
        setDateError(!publishedDate);
        if(content && publishedDate) {
            action({ title, author, publishedDate, shortDescription, content });
        }
    };

    return (
        <Row className="justify-content-center">
            <Col className="col-7">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                        {...register("title", { required: true, minLength: 3 })}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type="text"
                        placeholder="Enter title"
                        />
                        {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
                    </Form.Group>

                    <FormGroup>
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                        {...register("author", { required: true, minLength: 3 })} 
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                        type="text"
                        placeholder="Enter author"
                        />
                        {errors.author && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3)</small>}
                    </FormGroup>

                    <FormGroup>
                        <Form.Label>Published</Form.Label>
                        {/* <Form.Control value={publishedDate} onChange={e => setPublishedDate(e.target.value)} placeholder="Enter date" /> */}
                        <DatePicker 
                        selected={publishedDate} 
                        onChange={(date) => setPublishedDate(date)}
                        />
                        {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
                    </FormGroup>

                    <FormGroup>
                        <Form.Label>Short description</Form.Label>
                        <Form.Control 
                        {...register("shortDescription", { required: true, minLength: 20 })}
                        value={shortDescription} 
                        onChange={e => setShortDescription(e.target.value)} 
                        type="text"
                        placeholder="Leave a comment here" 
                        />
                        {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Description is too short (min is 20)</small>}
                    </FormGroup>
                    
                    <FormGroup>
                        <Form.Label>Main content</Form.Label>
                        {/* <Form.Control value={content} onChange={e => setContent(e.target.value)} placeholder="Leave a comment here" style={{ width: "360px", height: "200px" }}/> */}
                        <ReactQuill 
                        theme="snow" 
                        value={content} 
                        onChange={setContent} 
                        placeholder="Leave a comment here" 
                        />
                        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
                    </FormGroup>

                    <Button 
                    onClick={validate(handleSubmit)} 
                    className="my-3">Add post
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

export default PostForm;