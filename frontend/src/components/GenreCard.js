import React, {useState} from 'react';
import '../styled/Genres.css'

function GenreCard( {genre} ) {
    const [inProfile, setInProfile] = useState("")

    function handleAddToProfileClick() {
        setInProfile((inProfile) => {
            fetch("http://localhost:3000/genre_likes", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: genre.user, 
                    genre_id: genre.id
                })
            })
            .then(res => res.json())
            .then(data => console.log(data))
        })
    }

return (
    <div class="card"> <img src={genre.image} style={{width: "auto", height: "500px"}} alt="..."/>
        <div class="card-body" style={{width:"auto", height:"150px"}}> <h5 class="card-title">{genre.genre}</h5> <p class="card-text">{genre.blurb}</p>
            <div class="col text-center">
                <button class="btn btn-default" style={{backgroundColor: "#529F8C", color: "#F6C6BF" }} type="submit" onClick={handleAddToProfileClick}>Add to Profile</button>
            </div>
        </div>
    </div>
    )   
}

export default GenreCard;