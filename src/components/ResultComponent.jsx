import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useState } from "react";
import { ProductContext } from "../App";
import { useEffect } from "react";
import { getProducts } from "../api/GetProducts";
import MakeUpProductList from "./MakeUpProductList";
import MakeUpProductGrid from "./MakeUpProductGrid";

function ResultComponent(props) {
  const { filters } = useContext(ProductContext);
  const [makeUpProducts, setMakeUpProducts] = useState([]);
  useEffect(() => {
    getProducts(filters).then((response) => setMakeUpProducts(response.data));
  }, [filters]);

  const [isGrid, setIsGrid] = useState(false);

  return (
    <>
      <Col sm={9}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h3>Products</h3>

          <div className="btn-group" role="group" aria-label="Switch view">
            <Button
              id="list-view"
              type="button"
              variant={isGrid ? "outline-dark" : "dark"}
              onClick={() => setIsGrid(false)}
            >
              <FontAwesomeIcon icon={faList} />
            </Button>
            <Button
              id="grid-view"
              type="button"
              variant={!isGrid ? "outline-dark" : "dark"}
              onClick={() => setIsGrid(true)}
            >
              <FontAwesomeIcon icon={faGrip} />
            </Button>
          </div>
        </div>
        <Row>
          {makeUpProducts
            .filter((p) => p.price > 0)
            .map((product) =>
              isGrid ? (
                <MakeUpProductGrid key={makeUpProducts.id} product={product} />
              ) : (
                <MakeUpProductList key={makeUpProducts.id} product={product} />
              )
            )}
        </Row>
      </Col>
    </>
  );
}
export default ResultComponent;
