export type Review = {
  customer: string;
  review: string;
  score: number;
}

export type Sale = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}


export type ProductDataType = {
  product: {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: Array<Review>;
    retailer: string;
    details: Array<string>;
    tags: Array<string>;
    sales: Array<Sale>;
  };
};


