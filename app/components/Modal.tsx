import conversionSemester from "../strings/Semester";

export default function Modal({ setOpen, semester }: ModalI) {
  return (
    <div className="absolute top-0 left-0 flex justify-center items-center w-screen h-screen z-50 bg-opacity-75 bg-zinc-900">
      <div className="bg-modal w-11/12 lg:w-2/3 h-96 p-8 lg:p-14 rounded ">
        <div className="flex justify-between items-center ">
          <p className="">{conversionSemester(semester!)}</p>
          <p onClick={setOpen}>X</p>
        </div>
      </div>
    </div>
  );
}
