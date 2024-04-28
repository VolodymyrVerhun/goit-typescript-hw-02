import style from "./ImageGallery.module.css";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { Image } from "../../App.types";

interface ImageGalleryProps {
  imageList: Image[];
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ imageList }) => {
  return (
    <>
      <ul className={style.imageGallery}>
        {imageList.map((image) => {
          return <ImageGalleryItem image={image} key={`${image.id}`} />;
        })}
      </ul>
    </>
  );
};

export default ImageGallery;
