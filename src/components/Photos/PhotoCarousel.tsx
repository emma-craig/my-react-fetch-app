import { Box, Button } from "@mui/material";
import { useContext, useState } from "react";
import PhotoContext from "../../contexts/PhotoContext";
import { responseType } from "../../types/data";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PhotoCarousel = () => {
  const { photos } = useContext(PhotoContext) as responseType;
  const [currPhoto, setCurrPhoto] = useState(0);
  const nextPhoto = () => {
    setCurrPhoto((prevPhoto) =>
      prevPhoto === photos.length - 1 ? 0 : prevPhoto + 1
    );
  };
  const prevPhoto = () => {
    setCurrPhoto((prevPhoto) =>
      prevPhoto === 0 ? photos.length - 1 : prevPhoto - 1
    );
  };
  return (
    <Box>
      <Button onClick={prevPhoto}>
        <ArrowBackIos />
      </Button>
      <Box>
        <Box
          style={{
            width: "300px",
            height: "300px",
            margin: '10px auto',
            backgroundImage: `url(${photos[currPhoto].src.medium})`,
          }}
        ></Box>
      </Box>
      <Button onClick={nextPhoto}>
        <ArrowForwardIos />
      </Button>
    </Box>
  );
};
export default PhotoCarousel;
