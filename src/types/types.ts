export type ArticleCardProps = {
  id?: number;
  image: string;
  title: string;
  subtitle?: string;
  context: string;
  category: string;
  autherId: number;
};

export type User = {
  id: number;
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  image: string;
};

// export type Products = {
//   id: string;
//   title: string;
//   subTitle: string;
//   desc: string;
//   image: string;
//   price: number;
// };

export type Product = {
  id: string;
  title: string;
  subTitle: string;
  category: string;
  desc: string;
  image: string;
  price: string;
  colorPallet: [];
};

export type Basket = {
  product: Product;
  count: number;
};
