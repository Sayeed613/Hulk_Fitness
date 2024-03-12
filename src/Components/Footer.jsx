import { Box, Stack, Typography } from "@mui/material";
import logo from '/images/logo.png';

export default function Footer() {
  return (
    <Box mt="80px" background="#0a5519" borderTop="1px solid">
      <Stack gap="40px" alignItems="center" px="40px" pt="40px"> {/* Adjust pt here */}
        <img src={logo} alt="logo" width="200px" />
        <Typography variant="h5" pb="40px" mt="20px">
          © 2024 Hulk Fitness. All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
}
