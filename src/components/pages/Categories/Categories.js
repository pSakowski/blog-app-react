import { Col, Row } from "react-bootstrap";
import Category from "../../features/Category/Category";

const Categories = () => {

    return (
        <>
        <Row>
            <Col className="text-center">
            <h1>All categories</h1>
            </Col>
        </Row>

        <Category />
        </>
    )
}

export default Categories;