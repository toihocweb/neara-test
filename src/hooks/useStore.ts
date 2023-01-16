import { useContext } from "react";
import { RootStoreContext } from "../contexts/serviceContext";

export const useStore = () => useContext(RootStoreContext);
