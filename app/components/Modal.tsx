import conversionSemester from "../strings/Semester";
import Subjects from "./Subjects";

export default function Modal({ setOpen, semester }: ModalI) {
  return (
    <div className="absolute top-0 left-0 flex justify-center items-center w-screen h-screen z-50 bg-opacity-75 bg-zinc-900">
      <div className="modal w-11/12 lg:w-4/12 h-96 p-8 lg:p-14 rounded ">
        <div className="flex justify-between items-center ">
          <p className="text-2xl">{conversionSemester(semester!)}</p>
          <p onClick={setOpen} className="text-2xl">
            X
          </p>
        </div>
        <Subjects />
      </div>
    </div>
  );
}
