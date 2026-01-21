import { useData } from "@/hooks/useData";
import type { Product } from "@/types/types";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "../ProductCard/ProductCard";
import style from "./ProductsSection.module.scss";

export default function App() {
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const { data: products = [] } = useData<Product[]>({ endpoint: "products" });

  const [page, setPage] = useState(0);

  const start = page * itemsPerPage;
  const currentItems = products.slice(start, start + itemsPerPage);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // ✅ Mobilde 10, desktopta 9 (tam doğru pagination)
  useEffect(() => {
    const calc = () => (window.innerWidth <= 768 ? 5 : 9);

    const apply = () => {
      setItemsPerPage(calc());
      setPage(0); // ✅ perPage değişince sayfayı sıfırla
    };

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);
  return (
    <div className={style.productsSection}>
      <div className={style.header}>
        <h1 className={style.totalProduct}>Total Product</h1>
        <span className={style.totalProductCount}>184</span>
      </div>

      <div className={style.productsGrid}>
        {currentItems.map((p) => (
          <ProductCard
            colorPallet={p.colorPallet}
            id={p.id}
            title={p.title}
            subTitle={p.subTitle}
            desc={p.desc}
            category={p.category}
            image={p.image}
            price={p.price}
          />
        ))}
      </div>

      <div className={style.paginate}>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={({ selected }) => setPage(selected)}
          previousLabel={
            <span>
              {" "}
              <img src="/icons/productSection/leftArrow.svg" alt="" />
            </span>
          }
          nextLabel={
            <span>
              <img src="/icons/productSection/rightArrow.svg" alt="" />
            </span>
          }
          breakLabel={"..."}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          containerClassName={style.paginationContainer}
          pageClassName={style.paginationPageItem}
          pageLinkClassName={style.paginationPageLink}
          previousClassName={style.paginationPrevItem}
          previousLinkClassName={style.paginationPrevLink}
          nextClassName={style.paginationNextItem}
          nextLinkClassName={style.paginationNextLink}
          breakClassName={style.paginationBreakItem}
          breakLinkClassName={style.paginationBreakLink}
          activeClassName={style.paginationActive}
          disabledClassName={style.paginationDisabled}
        />
      </div>
    </div>
  );
}
