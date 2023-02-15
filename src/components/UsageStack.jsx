import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#f4eded",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));
const UsageStack = ({ usage }) => {
  return (
    <Box sx={{ width: { xs: "100%", md: "90%" }, margin: "auto" }}>
    
    
      <h3 className="text-xl md:text-3xl mt-7 md:mt-0">Details</h3>
      <Stack spacing={3} sx={{ margin: "20px 0" }}>
        {usage.slice(0, 5).map((use) => (
          <Item sx={{ color: "black" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <span className="py-[2px] px-[3px] text-[10px] bg-red-500 text-white rounded-[50%]">
                {use.type}
              </span>
              <Typography
                sx={{
                  fontSize: { xs: 12, md: 15 },
                  fontWeight:"800",
                  margin: " 0 5px",
                  lineHeight: "30px",
                }}
              >
                {use.gameName}
              </Typography>
            </Box>

            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: 12, md: 15 },
                width: { xs: "97%", md: "auto" },
                margin: {xs:"auto",md : "0 0 0 30px"},
              }}
            >
              {use.usage}
            </Typography>
          </Item>
        ))}
      </Stack>
    
    </Box>
  );
};

export default UsageStack;
