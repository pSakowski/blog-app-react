import { Link } from "react-router-dom";
import { Card, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";

const Category = () => {
  
  const categories = useSelector(getAllCategories);

  return (
    <Row xs={1} md={1} lg={1}>
      {categories.map(category => (
          <Card key={category}>
            <Card.Body>
              <Link to={"/category/" + category}>{category}</Link>
            </Card.Body>
          </Card>
      ))}
    </Row>
  );
}

export default Category;