import { useState } from 'react';
import styles from "./corousel.module.css";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

export default function Carousel() {
    const images = [
        "https://imgs.search.brave.com/iNdia1bD3rKW8UvKjZco-enuBdhhU3oJ4p0ropyYfjw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8wNS8xMC8xOC90/cmVlLTgzMjA3OV82/NDAuanBn",
        "https://imgs.search.brave.com/z9TDJUH81hH_8optH4cxG3GOQAuzcRJP0zXoYi4rH8A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/NS8wNS8wMi8zNy9z/dW5zZXQtMTM3MzE3/MV82NDAuanBn"
    ];

    const [index, setIndex] = useState(0);
    
    // setInterval(() => {
    //     setIndex((index) => (index === 0 ? images.length - 1 : index - 1));
    // }, 3000)

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={styles.carousel} style={{ backgroundImage: `url(${images[index]}`, backgroundSize: "cover" }}>
            <div className={styles.btn} onClick={handlePrev}>
                <CiCircleChevLeft className={styles.icon} />
            </div>
            <div className={styles.btn} onClick={handleNext}>
                <CiCircleChevRight className={styles.icon} />
            </div>
        </div>
    );
}