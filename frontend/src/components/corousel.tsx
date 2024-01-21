import { useState } from 'react';
import styles from "./corousel.module.css";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

export default function Carousel(props: any) {
    const images = props.images;

    const [index, setIndex] = useState(0);
    const [image, setImage] = useState (images[0]);

    // setInterval(() => {
    //     setIndex((index) => (index === 0 ? images.length - 1 : index - 1));
    //     setImage(images[index]);
    // }, 3000)

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        setImage(images[index])
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        setImage(images[index])
    };

    return (
        <div className={styles.imageShow}>
            { images.length > 0 && (<div className={styles.imagesBox}>
                {images.map((image: string, index: number) => (
                    <img key={index} src={image} alt={images} onClick={() => {setImage(image)}}/>
                ))}
            </div>) }
            <div className={styles.carousel}>   
                <div className={styles.image}>
                    <img src={image} alt="product image"/>
                </div>
                <div className={styles.slideBtns}>
                    <div className={styles.btn} onClick={handlePrev}>
                        <CiCircleChevLeft className={styles.icon} />
                    </div>
                    <div className={styles.btn} onClick={handleNext}>
                        <CiCircleChevRight className={styles.icon} />
                    </div>
                </div>
            </div>
        </div>
    );
}