"use client";

import React from "react";
import { useGlobalStore } from "@/zustand/global-store";

const DashboardContent = () => {
  const { postData } = useGlobalStore();

  console.log(postData);

  return (
    <div style={{ width: "100%", height: "10dvh", backgroundColor: "green" }}>
      DashboardContent
    </div>
  );
};

export default DashboardContent;
