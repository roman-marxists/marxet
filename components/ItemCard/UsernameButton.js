import { CardActions, Button } from "@mui/material";

const UsernameButton = ({ username }) => {
  return (
      <Button size="small">{username}</Button>
  );
};

export default UsernameButton;
