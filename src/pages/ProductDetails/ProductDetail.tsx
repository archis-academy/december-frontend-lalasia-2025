import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <div>Ürün {id}</div>
    </div>
  );
};

export default ProductDetail;
