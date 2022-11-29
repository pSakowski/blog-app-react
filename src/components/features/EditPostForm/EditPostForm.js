import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editPost, getPostById } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";

const EditPostForm = () => {

    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = post => {
        dispatch(editPost({ ...post, id }));
        navigate('/');
     };
     
     return (
     <PostForm 
     action={handleSubmit} 
     actionText="Edit post" 
     title={postData.title} 
     author={postData.author} 
     publishedDate={postData.publishedDate} 
     category={postData.category}
     description={postData.shortDescription} 
     content={postData.content}>
     </PostForm>
    )
}

export default EditPostForm;