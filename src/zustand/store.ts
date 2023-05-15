import { create } from "zustand";

type GlobalState = {
  // Defined state properties
  postData: [];
  title: string | undefined;

  // Defined actions
  setPostData: (postData: [] | undefined) => void;
  setTitle: (title: string | undefined) => void;
  // Functions
};

export const useGlobalStore = create<GlobalState>((set) => ({
  // Define initial state
  postData: [],
  title: undefined,
  // Define actions
  setPostData: (postData) => set({ postData }),
  setTitle: (title: string | undefined) => set({ title })
  // Functions
}));
