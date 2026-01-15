import styles from "./ProductDetail.module.scss";

type ProductDetailProps = {
    image: string,
    title: string,
    subTitle: string,
    description: string,
    price: number
}

const colors: string[] = [
    "#151411",
    "#314443",
    "#C5A26E",
    "#D8DBE0"
]

export default function ProductDetail({ image, title, subTitle, description, price }: ProductDetailProps) {
    return (
        <section className={styles.productDetail}>

            <div className={styles.imageWrapper}>
                <img className={styles.productImage} src={image} alt={title} />
            </div>

            <div className={styles.productInfo}>

                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subTitle}>{subTitle}</p>

                <div className={styles.colorsWrapper}>
                    <h5 className={styles.colorTitle}>Color</h5>
                    <ul className={styles.colorList}>
                        {colors.map(
                            (color) =>
                                <li key={color} className={styles.colorListItem}>
                                    <input className={styles.colorCheckbox} type="checkbox" id={color} name={color} />
                                    <label className={styles.colorLabel} htmlFor={color}></label>
                                </li>
                        )}
                    </ul>
                </div>

                <div className={styles.descriptionWrapper}>
                    <p className={styles.description}>
                        {description}
                        <button className={styles.readMoreBtn}>Read More</button>
                    </p>
                </div>

                <h2 className={styles.price}>{"$" + price}</h2>

                <div className={styles.buttonsWrapper}>
                    <a className={styles.buyNow} href="#">Buy Now</a>
                    <button className={styles.addToChart}>Add to Chart</button>
                </div>

            </div>

        </section>
    )
}