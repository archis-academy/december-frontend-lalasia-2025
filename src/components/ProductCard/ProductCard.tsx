import style from "./ProductCard.module.scss";

import type { Products } from "@/types/types";

type ProductCardProps = Products;

const ProductCard = ({
  image,
  desc,
  title,
  subTitle,
  price,
}: ProductCardProps) => (
  <div className={style.productCard}>
    <div className={style.imageContainer}>
      <img src={image} alt={title} />
    </div>
    <div className={style.productInfo}>
      <h5>{subTitle}</h5>
      <div className={style.content}>
        <div className={style.productDetails}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <h4>${price}</h4>
      </div>
    </div>
  </div>
);

export default ProductCard;
