import React from 'react';
import styles from './GalleryItem.module.css';

const GalleryItem = ({ image, onClick }) => {
  return (
    <li className={styles.galleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => onClick(image.largeImageURL)}
      />
    </li>
  );
};

export default GalleryItem;
