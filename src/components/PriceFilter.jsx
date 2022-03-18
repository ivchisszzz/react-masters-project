import { useContext } from "react";
import { ProductContext } from "../App";

function PriceFilter(props) {
  const { filters, onFilterChange } = useContext(ProductContext);
  return (
    <>
      <div className="mb-3">
        <label className="form-label" htmlFor="price_greater_than">
          Price greater than:
        </label>
        <input
          type="number"
          id="price_greater_than"
          name="priceGreaterThan"
          value={filters.priceGreaterThan}
          onChange={onFilterChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="price_less_than">
          Price less than:
        </label>
        <input
          type="number"
          id="price_less_than"
          name="priceLessThan"
          value={filters.priceLessThan}
          onChange={onFilterChange}
        />
      </div>
    </>
  );
}
export default PriceFilter;
