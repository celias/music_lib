import React from 'react';



const ArtistCard = (props) => {



    console.log("PROPS ARTIST CARD: ", props.musicArtist)
    return (
        <div className="musicArtistContainer">
            <div className="image">
            {props.musicArtist.image && 
                <img alt="music artist" src={ props.musicArtist.image[4]["#text"] } />
            }
            <h2>{props.musicArtist.name}</h2>
            <h3>PLAY COUNT:</h3><p>{props.musicArtist.playcount}</p>
                </div>
            </div>
    )
} 

export default ArtistCard;