export type ArticleCardProps = {
  id: number;
  image: string;
  title: string;
  context: string;
  category: string;
  date: string;
  autherId: number;
  users: User[];
  className?: string;
  handleNext: () => void;
  handlePrev: () => void;
};
export type SortKey = "priceAsc" | "priceDesc" | "titleAsc" | "titleDesc";

export type User = {
  id: number;
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  image: string;
};

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
