import axios from "axios";
const apiBaseUrl = "http://makeup-api.herokuapp.com/api/v1/products.json";



export function getProducts(filters) {

    return axios({

        method: "GET",
        url: `${apiBaseUrl}`,
        params: {
            product_type: filters.productType,
            product_category: filters.category,
            brand: filters.sortBrand,
            price_greater_than: filters.priceGreaterThan,
            price_less_than: filters.priceLessThan

        }

    });

}
