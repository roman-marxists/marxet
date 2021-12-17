import { FixedSizeList } from "react-window";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";

// LOOK INTO FIXEDSIZELIST AND HOW IT CAN WORK WITH ARRAYS

const List = () => {
  const categories = ["Yeezy", "KSubi", "Mike", "Kelly", "Kyle"];
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vw",
          maxWidth: 360,
          bgcolor: "beige",
          alignItems: "center",
        }}
      >
        {/* <FixedSizeList
          height={400}
          width={360}
          itemSize={46}
          itemCount={200}
          overscanCount={5}
        > */}
        <Typography sx={{ display: "flex", justifyContent: "center" }}>
          <h3>Categories</h3>
        </Typography>
        {categories.map((listItem, i) => {
          return (
            <ListItem key={i}>
              <ListItemButton>
                <ListItemText primary={listItem} />
              </ListItemButton>
            </ListItem>
          );
        })}
        {/* </FixedSizeList> */}
      </Box>
    </>
  );
};

// function renderRow(array) {
//   array.map((listItem, i) => {
//     return (
//       <ListItem>
//         <ListItemButton>
//           <ListItemText primary={listItem[i]} />
//         </ListItemButton>
//       </ListItem>
//     );
//   });
// }

export default List;
