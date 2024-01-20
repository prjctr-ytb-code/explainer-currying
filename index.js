import {addNewProduct, getAllProducts, getAllProductsCategories} from './auth-fetch.js'

(async () => {
    try {
        const allProductsResponse = await getAllProducts({
            method: 'GET',
        });
        const allProductsData = await allProductsResponse.json();
        console.log(allProductsData);
    } catch (error) {
        throw new Error(error)
    }

    try {
        const allProductsCategoriesResponse = await getAllProductsCategories({
            method: 'GET',
        });
        const allProductsCategoriesData = await allProductsCategoriesResponse.json();
        console.log(allProductsCategoriesData);
    } catch (error) {
        throw new Error(error)
    }

    try {
        const newProductResponse = await addNewProduct({
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: 'BMW Pencil',
            })
        });
        const newProductData = await newProductResponse.json();
        console.log(newProductData);
    } catch (error) {
        throw new Error(error)
    }
})();
