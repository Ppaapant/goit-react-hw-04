import styles from './ImageGallery.module.css';



const ImageCard = ({ image }) => {

  return (
    <>
      <div className={styles.card}>
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
      
    </>
  );
};

export default ImageCard;
