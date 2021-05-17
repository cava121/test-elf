import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../styles/photo.css';
import Modal from './Modal';

const Photos = (props) => {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos?albumId=' + id)
      .then((response) => setPhotos(response.data));
  }, []);

  return (
    <div>
      {showModal && (
        <Modal
          showModal={showModal}
          src={showModal}
          photos={photos}
          setShowModal={setShowModal}
        />
      )}
      <Link to="/" className="button">
        Назад
      </Link>
      <div className="photos">
        {photos.length > 0 ? (
          photos.map((photo) => {
            return (
              <div className="photo" key={photo.id}>
                <img src={photo.url} onClick={() => setShowModal(photo.url)} />
              </div>
            );
          })
        ) : (
          <h1>Идет загрузка...</h1>
        )}
      </div>
    </div>
  );
};

export default Photos;
