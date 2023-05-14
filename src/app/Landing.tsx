"use client";
import React, { use } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Header from "@/components/Header";

import { useQuery } from "@tanstack/react-query";
import { usePosts } from "@/services/api/getPosts";
import { useGlobalStore } from "@/zustand/global-store";
import { useStore } from "@/zustand/store";

interface PaginationProps {
  data?: [];
  page?: number;
  itemsPerPage: number;
}

const Landing = (props: any) => {
  const { postData, setPostData, title } = useGlobalStore();

  const [pageData, setPageData] = React.useState<[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(10);

  const { getPosts } = usePosts();
  const { data } = useQuery({
    queryKey: ["getPosts"],
    queryFn: getPosts,
    initialData: props,
    onSuccess: (data: any) => {
      setPostData(data);
      setPageData(data);
    },
    onError: (e: any) => {
      console.log(`error`, e);
    },
    enabled:
      Object.keys(props).length <= 0 ||
      (Array.isArray(props) && props.length === 0),
  });

  const paginate = (props: PaginationProps) => {
    const { data = [], page = 1, itemsPerPage = 10 } = props;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return data.slice(startIndex, endIndex);
  };

  const PaginatedData = paginate({
    data: pageData,
    page: currentPage,
    itemsPerPage: itemsPerPage,
  });

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(pageData.length / itemsPerPage);

    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

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
          {PaginatedData &&
            PaginatedData.map((item: any, index: number) => (
              <Typography key={index} color="error">
                {item?.title}
              </Typography>
            ))}
          {/* {data?.props &&
            data?.props.map((item: any, index: number) => (
              <Typography key={index} color="error">
                {item?.title}
              </Typography>
            ))} */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </Button>
            <Typography>{currentPage}</Typography>
            <Button
              onClick={handleNextPage}
              disabled={
                currentPage === Math.ceil(pageData.length / itemsPerPage)
              }
            >
              Next
            </Button>
          </Box>
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
