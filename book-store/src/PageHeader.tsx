// Header.js
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function PageHeader() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Welcome to my book store
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default PageHeader;
