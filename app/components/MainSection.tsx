import trash from "@/public/images/trash.gif";
import Image from "next/image";
export default function MainSection() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col  px-10 py-10 lg:p-24  w-full  lg:w-9/12 ">
        <div className="flex justify-between items-center w-full">
          <h2>Bimestre 1</h2>
          <button className="buttonGrade flex justify-center items-center gap-4 text-xl tooltip ">
            <p>Lançar Nota </p>
            <h1 className="text-2xl">+</h1>
            <span className="text-xs">Adicionar uma nota</span>
          </button>
        </div>
        <div className="mt-10 flex gap-4 w-48 h-40  bg-violet-900 rounded-2xl relative ">
          <div className="absolute end-0  top-1 tooltip-delete hover:opacity-75 transition-all">
            <Image src={trash} alt="lixo" className="h-7 w-7 rounded " />
            <span>Deletar</span>
          </div>
          <div className="flex flex-col ">
            <div className="p-2">
              <p className="text-2xl">Biologia</p>
              <p className="text-xs ">28/04/2022</p>
            </div>
            <div className="absolute bottom-4 p-2 bg-opacity-80 bg-black w-full ">
              <p className="ml-4">Nota: 5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
