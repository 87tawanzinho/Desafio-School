import { ModalI } from "../interface/ModalI";
import conversionSemester from "../strings/Semester";
import Subjects from "./Subjects";

export default function Modal({ setOpen, semester, axiosGet }: ModalI) {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full z-50 bg-opacity-75 p-4 bg-zinc-900">
      <div className="modal w-auto   h-auto p-8 lg:p-14 rounded ">
        <div className="flex justify-between items-center ">
          <p className="text-2xl">{conversionSemester(semester!)}</p>
          <p
            onClick={() => setOpen(false)}
            className="text-2xl cursor-pointer hover:text-red-400  hover:opacity-70 transition-all"
          >
            X
          </p>
        </div>
        <Subjects semester={semester} axiosGet={axiosGet} setOpen={setOpen} />
      </div>
    </div>
  );
}
