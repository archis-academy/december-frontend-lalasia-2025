import "./TotalProduct.scss";
import { useData } from "@/hooks/useData";
import { useState, useMemo } from "react";

interface Product {
  id: number;
  title: string;
  desc: string; // API field’ına göre "desc"
  category: string;
  price: number;
  image: string;
}

const TotalProduct = () => {
  const { data: products } = useData<Product[]>({ endpoint: "/products" });

  const [selectedIndex, setSelectedIndex] = useState<number>(0); // Sort by
  const [currentPage, setCurrentPage] = useState<number>(1); // Pagination
  const itemsPerPage = 9;

  // Sort edilmiş ürünleri hesapla
  const sortedProducts = useMemo(() => {
    if (!products) return [];
    switch (selectedIndex) {
      case 1: // Price
        return [...products].sort((a, b) => a.price - b.price);
      case 2: // Name
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return products;
    }
  }, [products, selectedIndex]);

  // Pagination hesaplamaları
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  return (
    <div className="total-product">
      {/* Header */}
      <div className="total-product-header">
        <h2>
          Total Product <span>{products?.length ?? 0}</span>
        </h2>
        <select
          value={selectedIndex}
          onChange={(e) => {
            setSelectedIndex(Number(e.target.value));
            setCurrentPage(1); // yeni sort seçilince sayfa 1’e dönsün
          }}
        >
          <option value={0}>Sort By</option>
          <option value={1}>Price</option>
          <option value={2}>Name</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {currentProducts.map((product, index) => (
          <div className="product-card" key={product.id ?? index}>
            <div className="image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="info">
              <span className="category">{product.category}</span>
              <h3 className="title">{product.title}</h3>
              <p className="desc">{product.desc}</p> {/* artık doğru field */}
              <span className="price">${product.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            className={num === currentPage ? "active" : ""}
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TotalProduct;
