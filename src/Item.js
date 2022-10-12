import React from "react";


const Item = ({infoTrack}) => {

    const {collectionViewUrl, collectionName, artistName, releaseDate, primaryGenreName, trackName, albumName, artworkUrl100} = infoTrack

    return (
        <a href={collectionViewUrl} target="_blank">
            <div>
                <div>{collectionName}</div>
                <div>{artistName}</div>
                <div>{releaseDate}</div>
                <div>{primaryGenreName}</div>
                <div>{trackName}</div>
                <div>{albumName}</div>
                <div>
                    <img src={artworkUrl100}/>
                </div>
            </div>
        </a>
    )
};

export default Item;
