import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  return (
    <div>
      <div>Ürün {id}</div>
    </div>
  );
};

export default ProductDetail;
