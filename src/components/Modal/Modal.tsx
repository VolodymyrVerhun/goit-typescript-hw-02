import style from "./Modal.module.css";

interface Image {
  largeImageURL: string;
}

interface ModalProps {
  image: Image;
  toggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, toggleModal }) => {
  console.log("image: ", image);
  return (
    <div onClick={toggleModal} className={style.overlay}>
      <div className={style.modal}>
        <img src={image.largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
