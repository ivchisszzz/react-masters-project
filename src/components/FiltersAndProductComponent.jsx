import { Col, Row } from "react-bootstrap";
import BrandSortFilter from "./BrandSortFilter";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import ProductTypeFilter from "./ProductTypeFilter";
import ResultComponent from "./ResultComponent";

function FiltersAndProductComponent(props) {
  return (
    <>
      <Row>
        <Col sm={3}>
          <ProductTypeFilter></ProductTypeFilter>
          <CategoryFilter></CategoryFilter>
          <BrandSortFilter></BrandSortFilter>
          <PriceFilter></PriceFilter>
        </Col>
        <ResultComponent></ResultComponent>
      </Row>
    </>
  );
}
export default FiltersAndProductComponent;
