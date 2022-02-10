import React from 'react';
import { Link } from 'react-router-dom';

export const reviewArr = [
    { id: "1", review: "Ipsum dolor sit amet." },
    { id: "2", review: "Consectetur adipisicing elit. Quaerat, ad" },
    { id: "3", review: "Animi repellendus, pariatur dolorem cupiditate." },
    { id: "4", review: "Obcaecati quidem iusto perspiciatis assumenda inventore" },
];

const Reviews = () => {
    return (
        <section className="reviews">
            <h3>Reviews page</h3>
            {reviewArr.map(item =>
                <Link
                    key={item.id}
                    id={item.id}
                    review={item.review}
                    to={`/reviews/${item.id}`}>
                    <p>Review {item.id}</p>
                </Link>
            )}
        </section>
    );
};


export default Reviews