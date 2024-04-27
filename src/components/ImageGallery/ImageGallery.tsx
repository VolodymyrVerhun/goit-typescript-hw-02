import { useEffect, useState } from "react";
import style from "./ImageGallery.module.css";
import { getImage } from "../servises/getImage";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { ColorRing } from "react-loader-spinner";
import Button from "../Button/Button";

interface ImageGalleryProps {
  searchImage: string;
}

interface Image {
  id: number;
  webformatURL: string;
  tags: string;
  largeImageURL: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ searchImage }) => {
  const [imageList, setImageList] = useState<Image[]>([]);
  const [isLoadng, setIsLoadng] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    if (searchImage) {
      setIsLoadng(true);
      getImage(searchImage, page + 1)
        .then((response) => response.json())
        .then((list) => {
          setImageList(list.hits);
          setHasMore(list.total > list.hits.length);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoadng(false);
        });
    }
  }, [searchImage, page]);

  const onSubmitLoadMore = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getImage(searchImage, page + 1)
      .then((response) => response.json())
      .then((list) => {
        setImageList([...list.hits]);

        setPage(page + 1);
      })
      .finally(() => {
        setIsLoadng(false);
      });
  };
  console.log("imageList: ", imageList);

  return (
    <>
      {isLoadng && <ColorRing />}
      <ul className={style.imageGallery}>
        {imageList.map((image) => {
          return <ImageGalleryItem image={image} key={image.id} />;
        })}
        {hasMore && <Button submit={onSubmitLoadMore} />}
      </ul>
    </>
  );
};

export default ImageGallery;
