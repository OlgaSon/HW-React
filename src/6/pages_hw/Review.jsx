import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { reviewArr } from './Reviews';


export default function Review() {
    const { reviewId } = useParams();
    let reviewItem = reviewArr.find(item => item.id == reviewId);
    
    return (<>
        <Link to="/reviews">to Reviews page</Link>
        <h4>Review {reviewId}</h4>
        <p>{reviewItem.review}</p>
    </>)
};