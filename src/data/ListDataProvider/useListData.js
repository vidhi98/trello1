import { useContext } from "react";
import ListDataContext from "./ListDataContext";

const useListData = () => {
  return useContext(ListDataContext);
};

export default useListData;
