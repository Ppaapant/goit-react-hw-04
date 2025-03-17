import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  console.log('Modal isOpen:', image);

  if (!image) return null;

  return (
    <Modal 
      isOpen={!!image} 
      onRequestClose={onClose} 
      className={styles.modal} 
      overlayClassName={styles.overlay}
    >
      <button onClick={onClose} className={styles.closeButton}>✖</button>
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>Author: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
    </Modal>
  );
};

export default ImageModal;
