"use client";
import React, { use } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Header from "@/components/Home/Header";

import { useQuery } from "@tanstack/react-query";
import { usePosts } from "@/services/api/getPosts";
import { useGlobalStore } from "@/zustand/store";

const Landing = (props: any) => {
  const { postData, setPostData, title } = useGlobalStore();

  const { getPosts } = usePosts();
  const { data } = useQuery({
    queryKey: ["getPosts"],
    queryFn: getPosts,
    initialData: props,
    onSuccess: (data: any) => {
      console.log(`SUCCESS`, data);
      setPostData(data);
    },
    onError: (e: any) => {
      console.log(`error`, e);
    },
    enabled:
      Object.keys(props).length <= 0 ||
      (Array.isArray(props) && props.length === 0),
  });

  return (
    <Container maxWidth={false} disableGutters sx={{ position: "relative" }}>
      <Header />
      <Box
        sx={{
          paddingTop: "164px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Box
          sx={{
            backgroundColor: "pink",
            width: "100%",
            height: "20dvh",
          }}
        >
          <Typography color="error">TEST</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "blue",
            width: "100%",
            height: "20dvh",
          }}
        >
          <Typography color="primary">AGAIN</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Landing;
