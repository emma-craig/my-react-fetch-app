import { createContext } from "react";
import { Photo } from "../types/data";
const PhotoContext = createContext<Photo[]>([])
export default PhotoContext