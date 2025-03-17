import styles from './ImageGallery.module.css';

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onImageClick} 
      />
    </div>
  );
};

export default ImageCard;
