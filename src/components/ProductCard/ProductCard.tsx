import style from "./ProductCard.module.scss";
import type { Product } from "@/types/types";

const ProductCard = ({
  image,
  desc,
  title,
  subTitle,
  price,
  category
}: Product) => (
  <div className={style.productCard}>
    <div className={style.imageContainer}>
      <img src={image} alt={title} />
    </div>
    <div className={style.productInfo}>
      <h5>{category}</h5>
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
