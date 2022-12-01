import { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useForm } from "react-hook-form";

import Select from 'react-select'
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || "");
    const [author, setAuthor] = useState(props.author || "");
    const [shortDescription, setShortDescription] = useState(props.shortDescription || "");

    const [content, setContent] = useState(props.content || "");
    const [contentError, setContentError] = useState(false);

    const [publishedDate, setPublishedDate] = useState(props.publishedDate || "");
    const [dateError, setDateError] = useState(false);

    const categories = useSelector(getAllCategories);
    const [category, setCategory] = useState(props.category || "");
    const [categoryError, setCategoryError] = useState(false);

    const { 
        register, 
        handleSubmit: validate, 
        formState: { errors } 
    } = useForm();
    
    const handleSubmit = () => {
        setContentError(!content);
        setDateError(!publishedDate);
        setCategoryError(!category);
        if(content && publishedDate) {
            action({ title, author, publishedDate, shortDescription, content, category });
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

                    {/* <FormGroup>
                    <Form.Label>Category</Form.Label>
                        <Select 
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        >
                        <option value='' disabled>Select category...</option>
                        {categories.map((category) => <option key={category} value={category}>{category}</option>
                        )}
                        </Select>
                        {categoryError && <small className="d-block form-text text-danger mt-2">Category can't be empty</small>}
                    </FormGroup> */}

                    <FormGroup>
                    <Form.Label>Category</Form.Label>
                        <Form.Select 
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        >
                        <option value='' disabled>Select category...</option>
                        {categories.map((category) => <option key={category} value={category}>{category}</option>
                        )}
                        </Form.Select>
                        {categoryError && <small className="d-block form-text text-danger mt-2">Category can't be empty</small>}
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