import { Grid, Card, CardMedia, Box } from "@mui/material";
import PhotoContext from "../../contexts/PhotoContext";
import { useContext } from "react";

const PhotoCard = () => {
  const data = useContext(PhotoContext);
  console.log(data);
  return (
    <Box>
      <Grid>
        {data.map((photo) => {
          return (
            <Card>
              <div>
                <CardMedia
                  image={photo.src.small}
                  title={photo.alt}
                ></CardMedia>
                <div></div>
              </div>
            </Card>
          );
        })}
      </Grid>
    </Box>
  );
};
export default PhotoCard;
