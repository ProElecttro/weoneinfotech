import 'react'
import { CiStar } from 'react-icons/ci'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

export default function Rating(props: {Rating: number, noOfRatings: number}){
    console.log(props.Rating);
    console.log(props.noOfRatings);
  return (
    <div className="rating">
        {props.Rating < 0.5 ? <CiStar className="star"/> : props.Rating < 1 ? <FaStarHalfAlt className="star"/> : <FaStar className="star"/>}
        {props.Rating < 1.5 ? <CiStar className="star"/> : props.Rating < 2 ? <FaStarHalfAlt className="star"/> : <FaStar className="star"/>}
        {props.Rating < 2.5 ? <CiStar className="star"/> : props.Rating < 3 ? <FaStarHalfAlt className="star"/> : <FaStar className="star"/>}
        {props.Rating < 3.5 ? <CiStar className="star"/> : props.Rating < 4 ? <FaStarHalfAlt className="star"/> : <FaStar className="star"/>}
        {props.Rating < 4.5 ? <CiStar className="star"/> : props.Rating < 5 ? <FaStarHalfAlt className="star"/> : <FaStar className="star"/>}
        <p style={{marginLeft: "12px"}}>{props.noOfRatings} rating{props.noOfRatings> 1 && <span>s</span>}</p>
    </div>
  )
}