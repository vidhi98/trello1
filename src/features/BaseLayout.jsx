import { Box, Typography } from "@material-ui/core";
import React from "react";
import ListDataProvider from "../data/ListDataProvider";
import Board from "./Board";

const BaseLayout = () => {
  return (
    <ListDataProvider>
      <Box bgcolor="lightgrey" minHeight="100vh" px={5}>
        <Box py={5}>
          <Typography variant="h2" color="primary" align="center">
            Trello!
          </Typography>
        </Box>
        <Board />
      </Box>
    </ListDataProvider>
  );
};

export default BaseLayout;
