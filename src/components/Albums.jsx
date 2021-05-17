import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/album.css';

const Albums = (props) => {
  const { albums, users, photos } = useSelector((state) => state.appPage);

  return (
    <div className="album__wrapper">
      {albums.length > 0 ? (
        albums.map((album) => {
          const photo = photos.find((photo) => photo.albumId === album.id);
          const numberPhoto = photos.filter(
            (photo) => photo.albumId === album.id
          );

          return (
            <Link to={`/album_${album.id}`} className="album" key={album.id}>
              <div className="album__img">
                <img src={photo.thumbnailUrl} alt="" />
              </div>
              <div className="album__title">
                <span>{album.title}</span>
              </div>
              <div className="album__count_photos">{numberPhoto.length} шт</div>
            </Link>
          );
        })
      ) : (
        <h1>Идет загрузка....</h1>
      )}
    </div>
  );
};

export default Albums;
