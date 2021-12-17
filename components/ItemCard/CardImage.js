import { CardMedia } from "@mui/material";

const CardImage = ({photos}) => {
  const splashPhoto = (photos && photos.length) > 0 ? photos[0] : "https://source.unsplash.com/random";
  return (
    <CardMedia
      component="img"
      height="115"
      image={splashPhoto}
      // alt="splash photo"
    />
  );
};

export default CardImage;
