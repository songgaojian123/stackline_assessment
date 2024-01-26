import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductDataType } from "../../types/Types";
// 初始 state
const initialState: ProductDataType = {
  product: {
    id: "",
    title: "",
    image: "",
    subtitle: "",
    brand: "",
    reviews: [],
    retailer: "",
    details: [],
    tags: [],
    sales: [],
  },
};

export const fetchSalesData = createAsyncThunk(
  "productData/fetchProductData",
  async () => {
    const response = await fetch(
      "/stackline_frontend_assessment_data_2021.json"
    );
    const data = await response.json();
    return data[0];
  }
);


const productSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSalesData.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});



export default productSlice.reducer;
