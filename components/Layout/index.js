import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Header from "@components/Header";

export default function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Header />
      {/* <Box mt={10} /> */}
      <Container maxWidth="xl">{children}</Container>
      {/* <Box mb={10} /> */}
    </>
  );
}
