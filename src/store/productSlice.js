import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { init_previewProducts } from '../data/initProducts';
import { API, SORT } from '../constants/constants';
import axios from 'axios';


export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId) => {

    const response = await axios.get(`${API}/products/id/${productId}`);
    return response.data[0];
  }
);


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (category) => {

    const response = await axios.get(`${API}/products/category/${category}`);
    return response.data;
  }
);


export const fetchSearchProducts = createAsyncThunk(
  'products/fetchSearchProducts',
  async (searchValue) => {
    const response = await axios.get(`${API}/products/search/${searchValue}`);
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    product: null,
    products: [],
    noSort_products: [],
    filterReady_products: [],
    loading: false,
    error: null,
  },
  reducers: {
    sortProducts(state, action) {
      let result = state.products;
      switch (action.payload) {
        case 'popular':
          result = SORT.sortMinMax(state.products, 'id');
          break;
        case 'a-y':
          result = SORT.sortAZ(state.products, 'header');
          break;
        case 'y-a':
          result = SORT.sortZA(state.products, 'header');
          break;
        case 'chaper':
          result = SORT.sortMinMax(state.products, 'price');
          break;
        case 'expensive':
          result = SORT.sortMaxMin(state.products, 'price');
          break;
        default:
          state.products = result;
          break;
      }
      state.products = result;
    },
    sortProductsForDevelopments(state, action) {
      if (action.payload == null || (Array.isArray(action.payload) && action.payload.length === 0)) {
        state.filterReady_products = [];
        state.products = state.noSort_products;
        return
      }
      const developments = action.payload;
      const data = Array.from(state.noSort_products);
      state.filterReady_products = data.filter(item => developments.includes(item.development));
    },
    setProductsFiltres(state, action) {
      state.products = state.filterReady_products;
    },
    resetProductsFiltres(state, action) {
      state.products = state.noSort_products;
      state.filterReady_products = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.noSort_products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSearchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.noSort_products = action.payload;
      })
      .addCase(fetchSearchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { sortProducts, sortProductsForDevelopments, setProductsFiltres, resetProductsFiltres } = productSlice.actions;
export default productSlice.reducer;


