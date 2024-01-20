import {createAuthFetch} from './create-auth-fetch.js';
import {getToken} from './auth-provider.js';

const token = getToken();

const authFetch = createAuthFetch(token);

export const getAllProducts = authFetch('https://dummyjson.com/products');
export const getAllProductsCategories = authFetch('https://dummyjson.com/products/categories');
export const addNewProduct = authFetch('https://dummyjson.com/products/add');
