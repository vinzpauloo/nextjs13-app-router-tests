import { create } from "zustand";

type GlobalState = {
  // Defined state properties
  postData: [];
  title: string;

  // Defined actions
  setPostData: (postData: [] | undefined) => void;
  // Functions
};

export const useGlobalStore = create<GlobalState>((set) => ({
  // Define initial state
  postData: [],
  title: "",
  // Define actions
  setPostData: (postData) => set({ postData }),
  // Functions
}));
