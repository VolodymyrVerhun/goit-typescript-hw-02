import Searchbar from "./components/Searchbar/Searchbar";
import { useState, FormEvent, ChangeEvent } from "react";
import style from "./App.module.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";

export default function App() {
  const [value, setValue] = useState<string>("");
  const [searchImage, setSearchImage] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    handleSearch(value);
  };
  const handleSearch = (searchImage: string): void => {
    setSearchImage(searchImage);
  };

  return (
    <div className={style.app}>
      <Searchbar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
      />
      <ImageGallery searchImage={searchImage} />
    </div>
  );
}
