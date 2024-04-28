import Searchbar from "./components/Searchbar/Searchbar";
import { useState, useEffect } from "react";
import style from "./App.module.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { getImage } from "./components/services/getImage";
import Button from "./components/Button/Button";
import { ColorRing } from "react-loader-spinner";
import { Image } from "./App.types";

export default function App() {
  const [searchImage, setSearchImage] = useState<string>("");
  const [imageList, setImageList] = useState<Image[]>([]);
  const [isLoadng, setIsLoadng] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    if (!searchImage) return;
    const fetchImageData = async () => {
      setIsLoadng(true);
      try {
        const imageData = await getImage(searchImage, page);

        setImageList((prevState) => [...prevState, ...imageData.hits]);
        setHasMore(imageData.total > imageData.hits.length);
      } catch (error) {
        console.error("Error fetching image data: ", error);
      } finally {
        setIsLoadng(false);
      }
    };

    fetchImageData();
  }, [searchImage, page]);

  const handleSubmit = (value: string): void => {
    setSearchImage(value);
    setImageList([]);
    setPage(1);
  };

  const onLoadMore = (): void => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <div className={style.app}>
      <Searchbar onSubmit={handleSubmit} />
      {isLoadng && <ColorRing />}
      <ImageGallery imageList={imageList} />
      {hasMore && <Button submit={onLoadMore} />}
    </div>
  );
}
