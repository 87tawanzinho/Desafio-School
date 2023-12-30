import TakeGrades from "./TakeGrades";

export default function MainSection() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col  px-10 py-10 lg:p-24  w-full  lg:w-9/12 ">
        <TakeGrades />
      </div>
    </div>
  );
}
