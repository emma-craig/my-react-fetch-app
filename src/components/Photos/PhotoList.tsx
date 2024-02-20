import { Table, TableCell, TableRow, Typography } from "@mui/material";
import { useContext } from "react";
import PhotoContext from "../../contexts/PhotoContext";
import { Photo, responseType } from "../../types/data";

const PhotoList = () => {
  const { photos } = useContext(PhotoContext) as responseType;

  return (

    <Table padding='normal' width='50%'>
        {photos.map((photo: Photo) => (
            <TableRow key={photo.id} >
                <TableCell sx={{margin: '15px'}} padding='normal' align='right'><img height="150px" min-width="150px" alt="" src={photo.src.small}/></TableCell><TableCell sx={{margin: '15px'}} padding='normal' align='left'><Typography variant="caption">{photo.alt}</Typography></TableCell>
            </TableRow>
        ))}
    </Table>
  );
};
export default PhotoList;
