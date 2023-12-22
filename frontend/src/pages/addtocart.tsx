import { NavLink } from "react-router-dom";
import styles from "../styles/addtocart.module.css";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";

export default function AddToCart(props: any){
    const [quantity, setQuantity] = useState(1);
    // const [totalFee, setTotalFee] = useState(0);
    
    function incQuantity(){
        setQuantity(quantity + 1);
    }
    function decQuantity(){
        setQuantity((quantity - 1 > 0) ? quantity - 1 : 0);
    }
    return(
        <>
            <div className={styles.addtocart}>
                <span>
                    <strong><sup>INR </sup></strong>
                    <strong style={{fontSize: "28px"}}>{(props.price) * quantity | 1250 * quantity}/-</strong>
                </span>
                <div>
                    <strong style={{fontSize: "24px", marginBottom: "12px"}}> Shipping & Fee Details </strong>
                    <table className={styles.table}>
                        <tr className={styles.price}>
                            <p>Price</p>
                            <span>
                                <sup>INR </sup>
                                <span style={{fontSize: "28px"}}>{props.price | 1250 * quantity}/-</span>
                            </span>
                        </tr>
                        <tr className={styles.price}>
                            <p>Shipping</p>
                            <span>
                                <sup>INR </sup>
                                <span style={{fontSize: "28px"}}>{props.shippingPrice | 0}/-</span>
                            </span>
                        </tr>
                        <tr className={styles.price}>
                            <p>Import Fees</p>
                            <span>
                                <sup>INR </sup>
                                <span style={{fontSize: "28px"}}>{props.importFees | 0}/-</span>
                            </span>
                        </tr>
                        <hr style={{borderColor: "black", borderWidth: "1px"}}/>
                        <tr className={styles.price}>
                            <strong>Total</strong>
                            <span>
                                <sup>INR </sup>
                                <span style={{fontSize: "28px"}}>{props.total | 0}/-</span>
                            </span>
                        </tr>
                    </table>
                    <div className={styles.location}>
                        <p><CiLocationOn style={{ fontSize: "24px" }} /></p>
                        <NavLink to='/editLocation'>
                            <strong>Deliver to</strong> {props.address || "Your address here, your city, your state - 000000"}
                        </NavLink>
                    </div>
                </div>

                <div>
                    <strong style={{fontSize: "18px", color: `${!props.instock ? "green" : "red"}`}}>{!props.instock ? "In Stock" : "Out of Stock"}</strong><br />
                    <div className={styles.Quantity}>
                        <p>Quantity: {quantity}</p>
                        <div>
                            <button className={styles.changeQunatityBtn} onClick={decQuantity}>-</button>
                            <button className={styles.changeQunatityBtn} onClick={incQuantity}>+</button>
                        </div>
                    </div>
                </div>
                <div>
                    <button className={styles.btn} id={styles.addtocartBtn}>
                        Add to Cart
                    </button>
                    <button className={styles.btn} id={styles.buyNowBtn}>
                        Buy Now
                        {/* <NavLink to="/payment">Buy Now</NavLink> */}
                    </button>
                </div>
            </div>
        </>
    );
}