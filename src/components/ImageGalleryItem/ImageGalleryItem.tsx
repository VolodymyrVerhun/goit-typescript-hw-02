import React, { useEffect, useState } from "react";
import style from "./ImageGalleryItem.module.css";
import Modal from "../../components/Modal/Modal";

interface Image {
  webformatURL: string;
  tags: string;
  largeImageURL: string;
}

interface ImageGalleryItemProps {
  image: Image;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    });
  }, []);
  return (
    <>
      <li onClick={toggleModal} className={style.imageGalleryItem}>
        <img
          className={style.imageGalleryItem__image}
          src={image.webformatURL}
          alt={image.tags}
        />
      </li>
      {isModalOpen && <Modal image={image} toggleModal={toggleModal} />}
    </>
  );
};

export default ImageGalleryItem;
