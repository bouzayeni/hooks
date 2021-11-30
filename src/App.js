import './App.css';
import MoviesList from './components/MoviesList'
   import React, {useState} from 'react';
 import { v4 as uuidv4 } from 'uuid';
import Filter from './components/Filter';
import {Route,Routes} from 'react-router-dom'
import Description from './components/Description';


function App() {
  const[movies,setMovies] = useState([
    { id: uuidv4(), 
    Title : "Harry Potter",
    Description :`Harry Potter is an orphaned boy brought
     up by his unkind Muggle (non-magical) aunt and uncle. 
     At the age of eleven, half-giant Rubeus Hagrid informs him that he is actually a wizard and that his parents were murdered by an evil wizard named Lord Voldemort..`,
    PosterURL : "",
    rating : "5",
    ImageMovies : "https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg",
    trailer:'https://www.youtube.com/embed/Luq2aEeRoKQ'
  },

    { id: uuidv4(), 
      Title: "Lucifer",
      Description :"Lucifer represents an intellectual, imaginative, delusional, otherworldly force which might be associated with visions, subjectivity, psychosis and fantasy. He associated Lucifer with the religious/philosophical cultures of Egypt, Rome and Greece..",
      PosterURL : "https://www.netflix.com/watch/81259963?trackId=14170287&tctx=3%2C16%2C41eaab22-efb3-436b-b0cf-1a6d14b71851-9914533%2C6c8cad74-d4e4-4d8b-ba1a-ce0c7026a144_77417855X3XX1637759170305%2C%2C",
      rating : "4",
      ImageMovies : "https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      trailer:'https://www.youtube.com/embed/X4bF_quwNtw'
    },

      { id: uuidv4(), 
        Title: "Venom",
        Description :"Venom is a fictional character appearing in American comic books published by Marvel Comics. .",
        PosterURL :"https://www.netflix.com/watch/80991034?trackId=13752289&tctx=0%2C1%2C564271a658e04f6582b6767138e02f9ba301fa35%3A2ab067e25918de145013e0cb717c0e3e8e9b3cb7%2C564271a658e04f6582b6767138e02f9ba301fa35%3A2ab067e25918de145013e0cb717c0e3e8e9b3cb7%2Cunknown%2C",
        rating : "3",
        ImageMovies : "https://fr.web.img2.acsta.net/pictures/21/09/01/11/19/0900123.jpg",
        trailer:'https://www.youtube.com/embed/u9Mv98Gr5pY'
        },
    ]);
    const [movie, setMovie] = useState({
      Title: "",
      ImageMovies: "",
      Descreption: "",
      PosterURL: "",
      Rating:"",
      trailer:""
    });
  const[searchTerm,setsearchTerm]=useState('')
  const [rate, setRate] = useState(0)
  
  const handleChange = (e) =>{
    setMovie({...movie, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setMovies([...movies, {id:uuidv4(),...movie}])
    setMovie('')
      };
    
      const handlonchange = (e)=>{
        setsearchTerm(e.target.value);
      }
  return (
    <div className="App">
      <h1 className='aa'> NETFLIX</h1>
      <Filter setRate={setRate} />
      <input className='search' type='text' placeholder="search..." onChange={handlonchange}/> 
      
      {/*<MoviesList  movies={movies.filter(el=>el.Title.toLowerCase().includes(searchTerm.toLowerCase())&& el.rating >= rate)}/> */}
      
      
       <Routes>
        <Route exact path='/Description/:description' element={<Description movies={movies}/>}>
         </Route>
        <Route path='/' element={<MoviesList handleChange={handleChange} handleSubmit={handleSubmit} movies={movies}/>}></Route>
      </Routes>
      
      <div className="addMovies">
        <input type="text" placeholder="Title" name="Title"  onChange={ handleChange}></input>
        <input type="text" placeholder="Description" name="Description" onChange={ handleChange} ></input>
        <input type="text" placeholder="URL" name="PosterURL" onChange={ handleChange}></input>
        <input type="text" placeholder="Image's URL" name="ImageMovies" onChange={ handleChange}></input>
        <input type="text" placeholder="Rating" name="rating" onChange={handleChange}></input>
        <button type="submit" onClick={handleSubmit}>Submit</button>
       </div> 
    </div>
  );
}

export default App;
