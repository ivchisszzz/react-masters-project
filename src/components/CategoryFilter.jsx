import { useContext } from "react";
import { ProductContext } from "../App";

function CategoryFilter(props) {
  const { filters, onFilterChange } = useContext(ProductContext);
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor="category">
        Sort by category
      </label>
      <select
        className="form-select"
        id="category"
        name="category"
        value={filters.category}
        onChange={onFilterChange}
      >
        <option value="">Choose product category</option>
        <option value="powder">Powder</option>
        <option value="cream">Cream</option>
        <option value="pencil">Pencil</option>
        <option value="gel">Gel</option>
        <option value="palette">Palette</option>
        <option value="contour">Contour</option>
        <option value="concealer">Concealer</option>
        <option value="mineral">Mineral</option>
        <option value="lipstick">Lipstick</option>
        <option value="lip_gloss">Lip gloss</option>
        <option value="highlighter">Highlighter</option>
      </select>
    </div>
  );
}
export default CategoryFilter;
