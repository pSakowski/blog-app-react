import { Col, Row } from "react-bootstrap";
import Categories from "../../features/Categories/Categories";

const Category = () => {

    return (
        <>
        <Row>
            <Col className="text-center">
            <h1>All categories</h1>
            </Col>
        </Row>

        <Categories />
        </>
    )
}

export default Category;