import { Dispatch, SetStateAction } from "react";

export interface ModalI {
  setOpen?: any;
  semester?: any;
  setGrades?: Dispatch<SetStateAction<GradesI[]>>;
  axiosGet?: any;
}
