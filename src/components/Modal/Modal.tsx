import { Image } from "../../App.types";
import style from "./Modal.module.css";

interface ModalProps {
  image: Image;
  toggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, toggleModal }) => {
  return (
    <div onClick={toggleModal} className={style.overlay}>
      <div className={style.modal}>
        <img src={image.largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
