import ProductCard from "@/components/ProductCard/ProductCard";
import type { Products } from "@/types/types";
import { useData } from "@/hooks/useData";

export default function ProductList() {
  const { data, isLoading, error } = useData<Products[]>({
    endpoint: "products",
  });

  if (isLoading) return <div>Yükleniyor…</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <div className="grid">
      {data?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
