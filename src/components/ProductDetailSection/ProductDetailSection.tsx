import { useEffect, useState } from "react";
import styles from "./ProductDetail.module.scss";
import { setColorStorage, setBasketStorage, getBasket } from "@/utils/helpers";
import type { Product, Basket } from "@/types/types";

export default function ProductDetail(product: Product) {

    const [color, setColor] = useState<string>("");

    // lazy initialization
    const [basket, setBasket] = useState<Basket[]>(() => {
        const savedBasket = getBasket();

        return savedBasket ? savedBasket : [];
    });

    useEffect(() => {
        setBasketStorage('basket', basket);
    }, [basket]);

    useEffect(() => {
        setColorStorage('color', color);
    }, [color])

    const handleChange = (e: any): void => {
        const value = e.target.value;
        setColor(value);
    }

    const handleAddToChart = (product: Product) => {
        const basket = getBasket();

        if (!basket.length) {
            setBasket((prev) => [
                ...prev,
                { product, count: 1 }
            ]);
            return;
        }

        const isExists = basket.find((item) => (String(item.product.id) === String(product.id)));

        if (!isExists) {
            setBasket((prev) => [
                ...prev,
                { product, count: 1 }
            ]);

            return;
        }

        const index = basket.indexOf(isExists);
        const newBasket: Basket[] = [...basket];
        newBasket[index] = {
            product: newBasket[index].product,
            count: newBasket[index].count + 1
        }

        setBasket(newBasket);
    }


    return (
        <section className={styles.productDetail}>

            <div className={styles.imageWrapper}>
                <img className={styles.productImage} src={product.image} alt={product.title} />
            </div>

            <div className={styles.productInfo}>

                <h2 className={styles.title}>{product.title}</h2>
                <p className={styles.subTitle}>{product.subTitle}</p>

                <div className={styles.colorsWrapper}>
                    <h5 className={styles.colorTitle}>Color</h5>
                    <ul className={styles.colorList}>
                        {product.colorPallet.map(
                            ({ id, color }) =>
                                <li key={id} className={styles.colorListItem}>
                                    <input
                                        name='color'
                                        type="radio"
                                        id={id}
                                        value={color}
                                        className={styles.colorRadio}
                                        onChange={(e) => handleChange(e)}
                                    />
                                    <label
                                        className={styles.colorLabel}
                                        style={{ background: color }}
                                        htmlFor={id}
                                    ></label>
                                </li>
                        )}
                    </ul>
                </div>

                <div className={styles.descriptionWrapper}>
                    <p className={styles.description}>
                        {product.desc}
                        <button className={styles.readMoreBtn}>Read More</button>
                    </p>
                </div>

                <h2 className={styles.price}>{"$" + product.price}</h2>

                <div className={styles.buttonsWrapper}>
                    <a className={styles.buyNow} href="#">Buy Now</a>
                    <button className={styles.addToChart} onClick={() => handleAddToChart(product)}>Add to Chart</button>
                </div>

            </div>

        </section>
    )
}