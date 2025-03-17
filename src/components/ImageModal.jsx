import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  if (!image) return null; // Якщо немає зображення, не показувати модальне вікно

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose} // Закриває модальне вікно
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={onClose} className={styles.closeButton}>
        ✖
      </button>
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>Author: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
    </Modal>
  );
};

export default ImageModal;
