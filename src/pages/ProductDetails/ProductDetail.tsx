import { useParams } from "react-router";
import ProductDetailSection from "@/components/ProductDetailSection/ProductDetailSection";

const seed = {
  image: "/images/product-detail-image.jpg",
  title: "White Aesthetic Chair",
  subTitle: "Combination of wood and wool",
  description: "Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere, Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere",
  price: 99.98
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <ProductDetailSection {...seed} />
    </div>
  );
};

export default ProductDetail;
