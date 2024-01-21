import React, { useState } from 'react'
import { useLocation } from "react-router-dom";

import styles from "../styles/product.module.css";

import Carousel from "../components/corousel";
import Rating from "../components/rating";
import AddToCart from "./addtocart";
import { RxCross1 } from "react-icons/rx";


interface Product {
    noOfRatings: number;
    rating: number;
    product_id: string;
    
    productName: string;
    category: string;
    brandName: string;
    stock: string;
    status: string;
    MRP: string;
    salesPrice: number;
    description: string;
    images: string;
    specifications: string;
  }

export default function Product(){
    let location = useLocation();
    let product: Product = location.state;
    const images = JSON.parse(product.images || "[]");
    const specifications = JSON.parse(product.specifications);

    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({key: "", value: ""});

    return(
        <>
            <div className={styles.productPage}>
                <div className={styles.productPhoto}>
                    <Carousel images = {images}/>
                    <Rating Rating={2.5} noOfRatings={12}/>
                    <div className={styles.priceSection}>

                    </div>
                </div>
                <div className={styles.productDetails}>
                    <b style={{fontSize: "1.6rem"}}>{product.productName || "Product Name"}</b>
                    <hr />
                    {product.description && <>
                        <p style={{fontSize: "24px"}}>{product.description || "product description"}</p>
                        <hr />
                    </>}

                    <b>Specifications</b>
                    {product.specifications && (
                    <div className={styles.specifications}>
                        {specifications.map((spec: any, index: number) => (
                        <>
                            <div key={index} className={styles.spec} onClick={() => {setShowModal(true), setModalData(spec)}}>
                                <p className={styles.specKey}><b>{spec.key}</b></p>
                                <p className={styles.specValue}>{spec.value}</p>
                            </div>
                            <hr />
                        </>
                        ))}
                    </div>
                    )}
                </div>
                <div className={styles.addtocart}>
                    <AddToCart price={product.MRP} salesPrice={product.salesPrice}/>
                </div>
            </div>
            { showModal && <div className={styles.modelOuter} >
                <div className={styles.modal}>
                    <div className={styles.modalTitle} >
                        <p>Specification</p>
                        <RxCross1 onClick={() => {setShowModal(false)}}/>
                    </div>
                    <hr />
                    <b>{modalData.key}:</b>
                    <p>{modalData.value}</p>
                </div>
            </div>}
        </>
    )
}
