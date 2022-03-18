import { Form } from "react-bootstrap";
import { useContext } from "react";
import { ProductContext } from "../App";

function ProductTypeFilter(props) {
  const { filters, onFilterChange } = useContext(ProductContext);
  return (
    <>
      <h3>Filters</h3>
      <Form>
        <div className="mb-3">
          <label className="form-label" htmlFor="productType">
            Sort by product type
          </label>
          <select
            className="form-select"
            id="productType"
            name="productType"
            value={filters.productType}
            onChange={onFilterChange}
          >
            <option value="blush">Blush</option>
            <option value="bronzer">Bronzer</option>
            <option value="eyebrow">Eyebrow</option>
            <option value="eyeliner">Eyeliner</option>
            <option value="eyeshadow">Eyeshadow</option>
            <option value="foundation">Foundation</option>
            <option value="lip_liner">Lip liner</option>
            <option value="lipstick">Lipstick</option>
            <option value="mascara">Mascara</option>
            <option value="nail_polish">Nail polish</option>
          </select>
        </div>
      </Form>
    </>
  );
}
export default ProductTypeFilter;
