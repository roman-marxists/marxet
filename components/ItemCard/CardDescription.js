import { CardContent, Typography } from "@mui/material";

const CardDescription = ({ description }) => {
  return (
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  );
};

export default CardDescription;
