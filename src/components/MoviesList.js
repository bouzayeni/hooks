import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { CardGroup,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieCard-style.css';
import { Link } from "react-router-dom"

const MoviesList= ({movies})=>{
    return(
        <div className="movies" >
            {movies.map((mv) => (
            // <div className="groupes">
            //     <h1 className="title">{mv.Title}</h1>
            //     <img src={mv.ImageMovies} ></img>
            //     <h2>{mv.Description}</h2>
            //     <a href= {mv.PosterURL}> link Movies </a>
            //     <StarRatingComponent 
            //         starCount={5}
            //         value={mv.rating}
            //     />
            // </div>






<CardGroup>
<Card className='bodys'>
  <Card.Img variant="top" src={mv.ImageMovies} className="imgmv" />
  <Card.Body >
    <Card.Title className='dv' >{mv.Title} </Card.Title>
    <Card.Text className='db' >
    {mv.Description}
    </Card.Text>
    <a href= {mv.PosterURL}> Link Movies </a>
    <StarRatingComponent 
                    starCount={5}
                    value={mv.rating}
                />
                <Card.Link>
                <Link to={`/Description/${mv.Title}`} state={{id:mv.id}}> <button type="button"> Description </button></Link>
                </Card.Link>
  </Card.Body>
 
</Card>


</CardGroup>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            ))}
        </div>
    )
}

export default MoviesList;