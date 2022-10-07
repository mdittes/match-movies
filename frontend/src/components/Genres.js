import React, {useEffect, useState} from 'react';
import '../styled/Genres.css'
import GenreCard from './GenreCard';

function Genres( ) {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/genres")
        .then(res => res.json())
        .then(data => setGenres(data))
    }, []);

    const renderGenres = genres.map(genre =>
        <GenreCard
            genre={genre}
            key={genre.id}
        />
    )

  return (
    <div style={{display:"flex", flexWrap: "wrap", width:"100vw", alignItems:"center", justifyContent:"center"}}>
        <div style={{display:"flex", flexWrap:"wrap", width:"80vw", justifyContent:"center", alignContent:"center", gap:"2rem"}}>
            <div>
                {renderGenres}
            </div>
        </div>
    </div>
  );
}

export default Genres;

{/* <div class="card h-100"> <img src={genres.image} style={{width: "auto", height: "500px"}} alt="..."/>
<div class="card-body"> <h5 class="card-title">{genres.genre}</h5> <p class="card-text">{genres.blurb}</p>
    <div class="col text-center">
        <button class="btn btn-default" style={{backgroundColor: "#529F8C", color: "#F6C6BF" }} type="submit" >Add to Profile</button>
    </div>
</div>
</div>) */}

{/* <div class="container-fluid mb-4">
        <div class="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            <div class="col-sm-12 col-lg-6"></div> */}