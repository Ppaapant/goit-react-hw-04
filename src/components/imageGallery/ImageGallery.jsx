import ImageCard from "./ImageCard";
import { useState } from "react";
import ImageModal from "../ImageModal";
import style from "./ImageGallery.module.css"

const ImageGallery = ({ images}) => {

const [isOpen, setIsOpen] = useState(null);


// const handleOpen = () => {
//     console.log('Клік по зображенню:', image);
//     setIsOpen(true);
//   };

	return (
	  <ul>
		{images.map((image) => (
		  <li key={image.id} onClick={() => setIsOpen(image)} >
			{/* <img src={image.urls.small} alt={image.alt_description} onClick={() => setIsOpen(image)} /> */}
			<ImageCard image={image}/>
		  </li>
		))}
		{isOpen && <ImageModal image={isOpen} onClose={() => setIsOpen(false)} />}
	  </ul>
	);
  };

  export default ImageGallery;