import { useData } from "@/hooks/useData";
import type { Product } from "@/types/types";
import { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "../ProductCard/ProductCard";
import style from "./ProductsSection.module.scss";
import { type SortKey } from "@/types/types";

export default function ProductsSection() {
  const { data: products = [] } = useData<Product[]>({ endpoint: "products" });

  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [page, setPage] = useState(0);

  // 1) Responsive perPage
  useEffect(() => {
    const calc = () => (window.innerWidth <= 768 ? 5 : 9);
    const apply = () => setItemsPerPage(calc());

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  // 2) sort veya perPage değişince sayfayı başa al
  useEffect(() => {
    setPage(0);
  }, [sortKey, itemsPerPage]);

  // 3) Sort (her zaman slice'tan önce)
  const sorted = useMemo(() => {
    const arr = [...(products ?? [])];

    const byPrice = (a: Product, b: Product) =>
      Number(a.price) - Number(b.price);
    const byTitle = (a: Product, b: Product) => a.title.localeCompare(b.title);

    switch (sortKey) {
      case "priceAsc":
        return arr.sort(byPrice);
      case "priceDesc":
        return arr.sort((a, b) => byPrice(b, a));
      case "titleAsc":
        return arr.sort(byTitle);
      case "titleDesc":
        return arr.sort((a, b) => byTitle(b, a));
      default:
        return arr;
    }
  }, [products, sortKey]);

  // 4) Pagination
  const pageCount = Math.ceil(sorted.length / itemsPerPage);
  const currentItems = sorted.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage,
  );
  const sortLabel: Record<SortKey, string> = {
    priceAsc: "Price: Low → High",
    priceDesc: "Price: High → Low",
    titleAsc: "Title: A → Z",
    titleDesc: "Title: Z → A",
  };
  return (
    <div className={style.productsSection}>
      <div className={style.header}>
        <div className={style.headerLeft}>
          <h1 className={style.totalProduct}>Total Product</h1>
          <span className={style.totalProductCount}>
            {(products ?? []).length}
          </span>
        </div>

        <details className={style.sortDropdown}>
          <summary className={style.sortSummary}>
            <img
              src="/icons/productSection/sort.svg"
              alt=""
              className={style.chevron}
            />
            <span className={style.sortText}>{sortLabel[sortKey]}</span>
          </summary>

          <div className={style.sortMenu}>
            <button
              type="button"
              onClick={(e) => {
                setSortKey("priceAsc");
                (
                  e.currentTarget.closest("details") as HTMLDetailsElement
                )?.removeAttribute("open");
              }}
            >
              Price: Low → High
            </button>

            <button
              type="button"
              onClick={(e) => {
                setSortKey("priceDesc");
                (
                  e.currentTarget.closest("details") as HTMLDetailsElement
                )?.removeAttribute("open");
              }}
            >
              Price: High → Low
            </button>

            <button
              type="button"
              onClick={(e) => {
                setSortKey("titleAsc");
                (
                  e.currentTarget.closest("details") as HTMLDetailsElement
                )?.removeAttribute("open");
              }}
            >
              Title: A → Z
            </button>

            <button
              type="button"
              onClick={(e) => {
                setSortKey("titleDesc");
                (
                  e.currentTarget.closest("details") as HTMLDetailsElement
                )?.removeAttribute("open");
              }}
            >
              Title: Z → A
            </button>
          </div>
        </details>
      </div>

      <div className={style.productsGrid}>
        {currentItems.map((p) => (
          <ProductCard
            key={p.id}
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
          forcePage={page}
          pageCount={pageCount}
          onPageChange={({ selected }) => setPage(selected)}
          previousLabel={
            <img src="/icons/productSection/leftArrow.svg" alt="" />
          }
          nextLabel={<img src="/icons/productSection/rightArrow.svg" alt="" />}
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
