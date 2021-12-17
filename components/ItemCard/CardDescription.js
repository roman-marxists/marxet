import { CardContent, Typography } from "@mui/material";

const CardDescription = ({ description }) => {
  const about = (description) ? description : "This is where the description of the item goes";

  return (
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {about}
      </Typography>
    </CardContent>
  );
};

export default CardDescription;
