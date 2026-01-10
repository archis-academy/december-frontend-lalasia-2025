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
      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt={title}
      />
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
