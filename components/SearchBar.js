import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  styled,
  alpha,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <>
      <div>
        <form>
          <input type="text" />
          <button>
            <SearchIcon />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;

const Search = styled("div")(({ theme }) => ({
  // position: "relative",
  // flex: "right",
  display: "flex",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  // height: "100%",
  // position: "absolute",
  // pointerEvents: "none",
  // display: "flex",
  // float: "right",
  // alignItems: "right",
  // justifyContent: "right",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "baseline",
}));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));
