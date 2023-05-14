import { Box, Button } from "@mui/material";

export const Home = () => {
  return (
    <Box sx={{ marginTop: 2, padding: 2 }}>
      <Button
        variant="contained"
        sx={{
          color: "#000",
          backgroundColor: "#ffd346",
          width: "106px",
          height: "3dvh",
          borderRadius: "16px",
          textTransform: "none",

          "&:hover": {
            backgroundColor: "#ffd346",
          },
          animation: "pulse 1.5s infinite",
          "@keyframes pulse": {
            "0%": {
              transform: "scale(1)",
              boxShadow: "0 0 0 0 rgba(204, 169, 44, 0.4)",
            },
            "70%": {
              transform: "scale(1.1)",
              boxShadow: "0 0 0 20px rgba(204, 169, 44, 0)",
            },
            "100%": {
              transform: "scale(1)",
              boxShadow: "0 0 0 0 rgba(204, 169, 44, 0)",
            },
          },
        }}
      >
        Sign up
      </Button>
    </Box>
  );
};
