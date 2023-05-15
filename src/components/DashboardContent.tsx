"use client";

import React from "react";
import { useGlobalStore } from "@/zustand/store";

const DashboardContent = () => {
  const { postData, title } = useGlobalStore();

  console.log(postData);
  console.log(`dashboard title`, title);

  return (
    <div style={{ width: "100%", height: "10dvh", backgroundColor: "green" }}>
      DashboardContent
    </div>
  );
};

export default DashboardContent;
