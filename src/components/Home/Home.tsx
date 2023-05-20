"use client";
import React, { use } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Header from "@/components/Home/Header";

import { useQuery } from "@tanstack/react-query";
import { usePosts } from "@/services/api/getPosts";
import { useGlobalStore } from "@/zustand/store";

const Landing = (props: any, { params }: any) => {
  const { postData, setPostData, title } = useGlobalStore();

  const { getPosts } = usePosts();
  const { data } = useQuery({
    queryKey: ["getPosts"],
    queryFn: getPosts,
    initialData: props,
    onSuccess: (data: any) => {
      console.log(`CLIENT FETCH`, data);
      setPostData(data);
    },
    onError: (e: any) => {
      console.log(`error`, e);
    },
    enabled:
      Object.keys(props).length <= 0 ||
      (Array.isArray(props) && props.length === 0),
  });

  console.log(`SERVER FETCH`, data?.props);
  console.log(`HOME TITLE`, title);

  React.useEffect(() => {
    setPostData(data?.props);
  }, [data]);

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
          {data?.props &&
            data?.props.map((post: any, index: number) => (
              <Typography key={index} color="error">
                {post.title}
              </Typography>
            ))}
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
