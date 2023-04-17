import { Box, Typography } from "@mui/material";

const h = document.body.clientHeight;

const Topbar = () => {

  return (
    <Box width="90%" height={0.1*h} margin="0 auto" 
      justifyContent="space-between"
      display="flex"
    >
      {/* HEAD */}
      <Typography>
        {"Time Block"}
      </Typography>
    </Box>
  );
};

export default Topbar;
