import { CardContent, Typography } from "@mui/material";

// TODO: Eventually, CardDescription will take a string `Description` as its prop
const CardDescription = (props) => {

  const shortenDescription = (description) => {
    return description.substring(0, 19) + '...';
  }

  return (
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        shortenDescription(description) goes here...
      </Typography>
    </CardContent>
  );
};

export default CardDescription;
