import style from "./Button.module.css";

interface ButtonProps {
  submit: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ submit }) => {
  return (
    <button onClick={submit} className={style.button}>
      Load more
    </button>
  );
};

export default Button;
