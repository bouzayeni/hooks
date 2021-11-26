import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Filter = ({setRate}) => {
    return (
        <div>
          <StarRatingComponent 
          name="rate1" 
          starCount={5}
        //   value={}
          onStarClick={(value)=>setRate(value)}
        />  
        </div>
    )
}

export default Filter
