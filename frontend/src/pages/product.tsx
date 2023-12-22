import styles from "../styles/product.module.css";
import AddToCart from "./addtocart";

export default function Product(){
    return(
        <div className={styles.productPage}>
            <div className={styles.product}>
                <div className={styles.productPhoto}>
                    <img className={styles.Image} src="https://s.yimg.com/fz/api/res/1.2/hroQGVvH17eUmCZE7WR9fA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/5786c0c1-8291-3b0b-afb7-72608a3feb82/t_500x300" alt="Example" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos sunt eum magni, est architecto laudantium. Quibusdam quas numquam ex quasi quae itaque, sint facilis accusantium quos consequuntur, quo maxime?</p>
                </div>
                <div className={styles.productDetails}>
                <p style={{fontSize: "24px", fontWeight: "bold"}}>Product Complete Name With specification Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio sint tempora?</p>
                <hr />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium a ex voluptatum natus nihil accusamus suscipit, animi earum labore veritatis tenetur, quasi sunt id nesciunt iure atque doloribus ab maiores, rerum hic provident laboriosam. Ratione rerum earum quas placeat dolorem accusamus perferendis aliquid. Necessitatibus minus quidem recusandae excepturi explicabo hic ex. Neque facere, culpa dignissimos sequi aliquid quo aperiam sed consequuntur cum soluta expedita, eum molestiae numquam eveniet eaque! Aspernatur fugit ex error magnam labore cum totam sapiente, praesentium, voluptatum a aperiam unde itaque maiores ipsa, accusamus cumque asperiores iusto ea magni. Consequatur provident tempora distinctio omnis. Minima, mollitia deleniti. Voluptates tempore illo sapiente magni asperiores, molestiae sed assumenda quo dicta dolorum eius provident, vitae est dolorem maiores fugit at quidem distinctio, recusandae nulla repellat modi id. Aspernatur iste hic quidem nobis quod nulla omnis explicabo suscipit debitis eaque, error dignissimos ad quo eius distinctio sit, dolores tenetur aliquam veritatis!</p>
                </div>
            </div>
            <AddToCart />
        </div>
    )
}