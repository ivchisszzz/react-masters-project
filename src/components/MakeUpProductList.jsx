import "../scss/style.css";

function MakeUpProductList({ product }) {
  return (
    <>
      <div className="d-flex py-1">
        <img
          className="product-thumbnail"
          src={`http:${product.api_featured_image}`}
          alt="img"
        />
        <div className="px-3 flex-grow-1">
          <div className="d-flex align-items-start justify-content-between">
            <div>
              <div className="fw-bold makeup-product-name fs-30">
                {product.name}
              </div>
              <div className="product-brand">{product.brand}</div>

              <div
                className="product-description"
                style={{ height: "246px", overflow: "hidden" }}
              >
                {product.description}
              </div>
            </div>
            <div>
              <span className="product-price fs-6">{product.price}</span>
              <span className="product-price-sign">{product.price_sign}</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-1" />
    </>
  );
}
export default MakeUpProductList;
