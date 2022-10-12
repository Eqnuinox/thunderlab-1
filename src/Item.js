import React from "react";


const Item = ({
  index,
  trackName,
  artistName,
  collectionName,
  collectionViewUrl,
  releaseDate,
  primaryGenreName,
  artworkUrl100,
  albumName
}) => (
  <a href={collectionViewUrl} target="_blank">
    <div>
      <div>{index}1</div>
      <div>{collectionName}1</div>
      <div>{artistName}2</div>
      <div>{releaseDate}2</div>
      <div>{primaryGenreName}</div>
      <div>{trackName}</div>
      <div>{albumName}</div>
      <div>
        <img src={artworkUrl100} />
      </div>
    </div>
  </a>
);

export default Item;
