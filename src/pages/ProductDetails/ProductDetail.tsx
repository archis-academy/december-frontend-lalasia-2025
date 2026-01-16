import { useParams } from "react-router";
import ProductDetailSection from "@/components/ProductDetailSection/ProductDetailSection";
import { useData } from "@/hooks/useData";
import type { Product } from "@/types/types";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useData<Product[]>({ endpoint: "products" });
  const product = data?.find((element) => String(element.id) === String(id));

  if (isLoading)
    return <div>Loading</div>

  if (!product)
    return <div>Ürün bulunamadı!</div>

  return (
    <>
      <ProductDetailSection {...product} />
    </>
  );
};

export default ProductDetail;
