import { Button } from "@mui/material";
import Link from "next/link";

const UsernameButton = ({ createdBy }) => {
  return (
    <Link href={`/users/${createdBy?.username}`} passHref>
      <Button color="secondary" size="small">
        {createdBy?.username}
      </Button>
    </Link>
  );
};

export default UsernameButton;
