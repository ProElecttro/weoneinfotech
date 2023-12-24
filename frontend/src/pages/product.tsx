import Carousel from "../components/corousel";
import styles from "../styles/product.module.css";
import AddToCart from "./addtocart";

export default function Product(props: any){
    return(
        <div className={styles.productPage}>
            <div className={styles.product}>
                <div className={styles.productPhoto}>
                    <Carousel />
                </div>
                <div className={styles.productDetails}>
                <b style={{fontSize: "32px"}}>{props.name || "Product Name"}</b>
                <hr />
                <p style={{fontSize: "24px"}}>{props.details || "product details"}</p>
                </div>
            </div>
            <AddToCart />
        </div>
    )
}