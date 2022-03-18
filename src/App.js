import NavBar from "./components/NavBar";
import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import './scss/app.scss';
import { Row, Container } from 'react-bootstrap';
import Home from "./components/Home";
import FiltersAndProductComponent from "./components/FiltersAndProductComponent";

export const ProductContext = React.createContext();
const routes = [
  {
    path: 'home',
    component: <Home />,
    exact: true
  },
  {
    path: 'products',
    component: <FiltersAndProductComponent />,
    exact: true
  }


]
function App() {
  const getRoutes = () => {
    return routes.map((route, index) => {
      return <Route key={index}
        exact={route.exact}
        path={route.path}
        element={route.component}
      />
    })
  }
  const [filters, setFilters] = useState({
    productType: "blush",
    category: "",
    sortBrand: "",
    priceGreaterThan: "",
    priceLessThan: "",
  });

  const onFilterChange = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <ProductContext.Provider value={{ filters, onFilterChange }}>
      <Router>
        <NavBar />
        <Container>
          <Row className='mt-5'>
            <Routes>
              {getRoutes()}
            </Routes>
          </Row>
        </Container>

      </Router>
    </ProductContext.Provider>


  );
}

export default App;
