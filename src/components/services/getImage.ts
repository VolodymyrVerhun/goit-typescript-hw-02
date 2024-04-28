import axios from "axios";
import { Image } from "../../App.types";
const BASE_URL = "https://pixabay.com/api";
const API_KEY = "37265508-698720a89f242e7ec4ebdb49a";
interface ImageData {
  total: number;
  hits: Image[];
}
export const getImage = async (
  searchImage: string,
  page: number
): Promise<ImageData> => {
  const { data } = await axios.get<ImageData>(
    `${BASE_URL}/?q=${searchImage}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
