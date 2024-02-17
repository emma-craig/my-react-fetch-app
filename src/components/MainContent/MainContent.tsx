import React from "react";
import { FC } from "react";
import PhotoCard from "../Photos/PhotoCard";
import PhotoGrid from "../Photos/PhotoGrid";
import PhotoList from "../Photos/PhotoList";
import PhotoCarousel from "../Photos/PhotoCarousel";

const MainContent: FC = () => {
  return (
    <div>
      <PhotoCard></PhotoCard>
      <PhotoGrid></PhotoGrid>
      <PhotoList></PhotoList>
      <PhotoCarousel></PhotoCarousel>
    </div>
  );
};
export default MainContent;
