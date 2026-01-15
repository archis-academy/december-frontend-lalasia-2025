export type ArticleCardProps = {
  id: number,
  image: string,
  title: string,
  context: string,
  category: string,
  date: string,
  autherId: number,
  users: User[],
  className?: string,
  handleNext: () => void,
  handlePrev: () => void
}


export type User = {
  id: number,
  fullName: string,
  email: string,
  password: string,
  phoneNumber: string,
  image: string
}
export type Products = {
  id: string;
  title: string;
  subTitle: string;
  desc: string;
  image: string;
  price: number;
};

