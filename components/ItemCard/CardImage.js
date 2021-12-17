import { CardMedia } from "@mui/material";

const CardImage = ({photos}) => {
  // going to have to play with the image height and width to fit each photo

  const splashPhoto = (photos && photos.length) > 0 ? photos[0] : "https://images.unsplash.com/photo-1638718619061-54b56803f459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGpwZWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  return (
    <CardMedia
      component="img"
      height="115"
      image={splashPhoto}
      alt="splash photo"
    />
  );
};

export default CardImage;
