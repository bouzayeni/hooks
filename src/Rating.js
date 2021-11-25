import ReactStars from "react-rating-stars-component";
import React from "react";

const Rating = ({ stars }) => {
    // const changerating = (newRating) => {
    //     console.log(newRating);
    // };

    return (
        <div>
            <ReactStars
                count={5}
                edit={false}
                size={24}
                value={stars}
                activeColor="#ffd700"
            />
        </div>
    )
}

export default Rating