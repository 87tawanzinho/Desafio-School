import { Dispatch, SetStateAction } from "react";
import instance from "./instance";

export const axiosGet = async (
  setGrades?: Dispatch<SetStateAction<GradesI[]>>
) => {
  await instance.get("").then((res) => {
    console.log(res.data);
    if (setGrades) {
      setGrades(res.data);
    } else {
      window.location.reload();
    }
  });
};
