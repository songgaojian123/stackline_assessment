// App.tsx
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { fetchSalesData } from "./store/product/productSlice";

import HeaderComponent from "./componets/HeaderComponent";
import ProductDetailComponent from "./componets/ProductDetailComponent";
import SalesGraphComponent from "./componets/SalesGraphComponent";
import SalesTableComponent from "./componets/SalesTableComponent";



function App() {
  const dispatch = useDispatch<AppDispatch>();
  const productInfo = useSelector((state: any) => state.product.product);

  useEffect(() => {
    dispatch(fetchSalesData());
  }, [dispatch]);




  return (
    <div className="App">
      <HeaderComponent />
      <main>
        <ProductDetailComponent
          image={productInfo.image}
          title={productInfo.title}
          subtitle={productInfo.subtitle}
          tags={productInfo.tags}
        />
        <SalesGraphComponent salesData={productInfo.sales} />
        <SalesTableComponent salesData={productInfo.sales} />
      </main>
    </div>
  );
};

export default App;
