import React from 'react';

const savedMusicCard = (props) => {
    console.log("PROPS SAVED MUSIC CARD: ", props.savedMusic);

    return(
        <div className="savedMusicContainer">
            <div className="image">
                {props.savedMusic &&
                    <img src={ props.savedMusic.name } />
                }
            </div>
        </div>
    )
}

export default savedMusicCard;