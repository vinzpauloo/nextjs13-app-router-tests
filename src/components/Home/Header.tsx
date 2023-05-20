"use client";
// ** React Imports
import React from "react";

// ** Next Imports
import Image from "next/image";
import { useRouter } from "next/navigation";

// ** MUI Imports
import {
  Box,
  Button,
  Divider,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import { useGlobalStore } from "@/zustand/store";

// ** Top Level Component
const Header = () => {
  const router = useRouter();
  const { postData, setTitle, title } = useGlobalStore();

  React.useEffect(() => {
    setTitle("TESTING ZUSTAND");
  }, []);

  console.log(`Header`, title);

  const [headerBg, setHeaderBg] = React.useState("transparent");

  const listenScrollEvent = () => {
    if (window.scrollY < 5) {
      return setHeaderBg("transparent");
    } else if (window.scrollY > 5) {
      return setHeaderBg("rgba(0, 0, 0, 0.5)");
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <Box sx={{ ...styles.container, backgroundColor: headerBg }}>
      <Box>
        <Image
          src="/images/header/header-fiba.png"
          alt="ambassador"
          width={170}
          height={40}
        />
        <Image
          src="/images/header/header-ambassador.png"
          alt="ambassador"
          width={120}
          height={40}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: {
            sm: "absolute",
            md: "absolute",
            lg: "revert",
          },
          left: "18%",
          zIndex: 1500,
          gap: 2,
          mt: 2,
        }}
      >
        <Image
          src="./images/header/header-title.svg"
          alt="main-logo"
          width={200}
          height={40}
          priority
        />
        <TopTabNavigation />
      </Box>

      <Box sx={{ display: "flex", gap: "0.60em" }}>
        <Image
          src="./images/header/header-download.svg"
          alt="download"
          width={20}
          height={20}
        />
        <Button
          variant="contained"
          sx={styles.loginButton}
          onClick={() => router.push("/dashboard")}
        >
          Log in
        </Button>
        <Button
          variant="contained"
          sx={styles.signUpButton}
          onClick={() => router.push("/users/1")}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

// ** Child Components **
function TopTabNavigation() {
  const [selectedTab, setSelectedTab] = React.useState("1");
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  return (
    <Tabs
      orientation="horizontal"
      variant="scrollable"
      value={selectedTab}
      onChange={handleTabChange}
      sx={{
        ".Mui-selected": {
          color: `#ffd346 !important`,
        },
      }}
      TabIndicatorProps={{
        style: {
          backgroundColor: "#ffd346",
        },
      }}
    >
      <Tab value="1" label="Home" sx={styles.tabs} />
      <Tab value="2" label="Live Casino" sx={styles.tabs} />
      <Tab value="3" label="Slots" sx={styles.tabs} />
      <Tab value="4" label="Blockchain Games" sx={styles.tabs} />
      <Tab value="5" label="Sports" sx={styles.tabs} />
      <Tab value="6" label="J9BC" sx={styles.tabs} />
      <Tab value="7" label="J9 Brand" sx={styles.tabs} />
    </Tabs>
  );
}

// ** Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: "fixed",
    width: "100%",
    height: "14dvh",
    zIndex: 1000, // High z-index to ensure the header is on top
    p: 2,
  },
  tabs: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: "600",
    fontSize: 12,
    textTransform: "uppercase",
    cursor: "pointer",
    color: "#FFF",
  },
  loginButton: {
    color: "#000",
    backgroundColor: "#FFF",
    width: "106px",
    height: "3dvh",
    borderRadius: "16px",
    textTransform: "none",
  },
  signUpButton: {
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
  },
};

export default Header;
