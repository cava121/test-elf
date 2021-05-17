import React, { useState } from 'react';
import '../styles/modal.css';

const Modal = ({ photos, src, showModal, setShowModal }) => {
  const currentPhotoIndex = photos.findIndex((photo) => photo.url === src);
  const [indexPhoto, setIndexPhoto] = useState(currentPhotoIndex);

  return (
    <div
      onClick={() => setShowModal(false)}
      className={showModal ? 'modal active' : 'active'}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={showModal ? 'modal__content active' : 'modal__content'}
      >
        {indexPhoto !== 0 && (
          <span
            onClick={() => setIndexPhoto((prevCount) => prevCount - 1)}
            className="arrow arrow-left"
          >
            🠔
          </span>
        )}
        <img src={photos[indexPhoto].url} />
        {photos.length - 1 !== indexPhoto && (
          <span
            onClick={() => setIndexPhoto((prevCount) => prevCount + 1)}
            className="arrow arrow-right"
          >
            ➞
          </span>
        )}
      </div>
    </div>
  );
};

export default Modal;
