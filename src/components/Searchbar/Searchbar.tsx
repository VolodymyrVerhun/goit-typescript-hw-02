import React, { ChangeEvent, FormEvent, useState } from "react";
import style from "./Searchbar.module.css";

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

const Searchbar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [searchImage, setSearchImage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchImage(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(searchImage);
    setSearchImage("");
  };
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
        />
      </form>
    </header>
  );
};

export default Searchbar;
