import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Filter = () => {
    return (
        <div>
          <StarRatingComponent 
          name="rate1" 
          starCount={5}
        //   value={}
          onStarClick={(value)=>console.log(value)}
        />  
        </div>
    )
}

export default Filter
