import { useContext } from "react";
import { ProductContext } from "../App";

function BrandSortFilter(props) {
  const { filters, onFilterChange } = useContext(ProductContext);
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor="brand-sort">
        Sort by brand
      </label>
      <select
        className="form-select"
        id="brand-sort"
        name="sortBrand"
        value={filters.sortBrand}
        onChange={onFilterChange}
      >
        <option value="">Choose brand</option>
        <option value="almay">almay</option>
        <option value="pacifica">pacifica</option>
        <option value="milani">milani</option>
        <option value="annabelle">annabelle</option>
        <option value="benefit">benefit</option>
        <option value="boosh">boosh</option>
        <option value="nyx">nyx</option>
        <option value="butter-london">butter london</option>
        <option value="cest-moi">c'est moi</option>
        <option value="physicians-formula">physicians formula</option>
        <option value="china-glaze">china glaze</option>
        <option value="clinique">clinique</option>
        <option value="colourpop">colourpop</option>
        <option value="covergirl">covergirl</option>
        <option value="dalish">dalish</option>
        <option value="deciem">deciem</option>
        <option value="dior">dior</option>
        <option value="e.l.f.">e.l.f.</option>
        <option value="essie">essie</option>
        <option value="fenty">fenty</option>
        <option value="glossier">glossier</option>
        <option value="green-people">green people</option>
        <option value="maybelline">maybelline</option>
        <option value="deciem">deciem</option>
        <option value="revlon">revlon</option>
        <option value="stila">stila</option>
        <option value="smashbox">smashbox</option>
      </select>
    </div>
  );
}
export default BrandSortFilter;
