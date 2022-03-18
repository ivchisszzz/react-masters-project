import { Col } from "react-bootstrap";

function MakeUpProductGrid({ product }) {
  return (
    <>
      <Col sm={4} className="img-thumbnail">
        <div className="grid-product-container mb-3">
          <div className="d-flex">
            <img
              className="product-thumbnail h-50 w-100"
              src={`http:${product.api_featured_image}`}
              alt="img"
            />
          </div>
          <div className="fw-bold makeup-product-name py-1">{product.name}</div>
          <div className="product-brand">{product.brand}</div>
          <div>
            <span className="product-price fs-10">{product.price}</span>
            <span className="product-sign">{product.price_sign}</span>
          </div>
          <div
            className="product-description"
            style={{ height: "150px", overflow: "clip" }}
          >
            {product.description}
          </div>
        </div>
      </Col>
    </>
  );
}
export default MakeUpProductGrid;
