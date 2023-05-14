import { create } from 'zustand';

interface StoreProps {
    title: string;
    rowData: [],
}

export const useStore = create<StoreProps>((set) => ({
    title: "",
    rowData: [],
}))