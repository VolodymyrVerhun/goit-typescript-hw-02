import React, { ChangeEvent, FormEvent } from "react";
import style from "./Searchbar.module.css";

interface SearchBarProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  value: string;
}

const Searchbar: React.FC<SearchBarProps> = ({
  handleChange,
  handleSubmit,
  value,
}) => {
  return (
    <header className={style.searchbar}>
      <form className={style.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={style.searchForm__button}>
          <span className={style.searchForm__button__label}>Search</span>
        </button>

        <input
          onChange={handleChange}
          className={style.searchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
        />
      </form>
    </header>
  );
};

export default Searchbar;
