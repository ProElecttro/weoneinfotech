import { NavLink } from "react-router-dom";
import styles from "../styles/addtocart.module.css";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";

export default function AddToCart(props: any){
    const [quantity, setQuantity] = useState(1);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    
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
                    <strong style={{fontSize: "28px"}}>{(props.salesPrice) * quantity | 0 }/-</strong>
                </span>
                <div>
                    <strong style={{fontSize: "1.3rem", marginBottom: "1rem"}}>Shipping & Fee Details</strong>
                    <table className={styles.table}>
                        <tr className={styles.price}>
                            <p>Price</p>
                            <span>
                                <sup>INR </sup>
                                <span style={{fontSize: "1.6rem"}}>{(props.salesPrice) * quantity | 0 }/-</span>
                            </span>
                        </tr>
                        <tr className={styles.price}>
                            <p>Shipping</p>
                            <span>
                                <sup>INR </sup>
                                <span style={{fontSize: "1.6rem"}}>{props.shippingPrice | 0}/-</span>
                            </span>
                        </tr>
                        <tr className={styles.price}>
                            <p>Import Fees</p>
                            <span>
                                <sup>INR </sup>
                                <span style={{fontSize: "1.6rem"}}>{props.importFees | 0}/-</span>
                            </span>
                        </tr>
                        <hr style={{borderColor: "black", borderWidth: "1px"}}/>
                        <tr className={styles.price}>
                            <strong>Total</strong>
                            <span>
                                <sup>INR </sup>
                                <span style={{fontSize: "1.6rem"}}>{(props.salesPrice) * quantity}/-</span>
                            </span>
                        </tr>
                    </table>
                    <div className={styles.location}>
                        <p><CiLocationOn style={{ fontSize: "24px" }} /></p>
                        <NavLink to='/editLocation'>
                            <p><strong>Deliver to</strong> {props.address || "Your address here, your city, your state - 000000"}</p>
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
                        <NavLink to='/payment'><p>Add To Cart</p></NavLink>
                    </button>
                    <button className={styles.btn} id={styles.buyNowBtn}>
                        <NavLink to='/payment'><p>Buy Now</p></NavLink>
                    </button>
                </div>
            </div>
        </>
    );
}

