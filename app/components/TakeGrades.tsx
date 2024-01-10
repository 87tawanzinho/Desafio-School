"use client";

import { useEffect, useState } from "react";
import instance from "../axios/instance";
import trash from "@/public/images/trash.gif";
import Image from "next/image";
import CreateGrade from "./CreateGrade";
import conversionSemester from "../strings/Semester";
import { format } from "date-fns";
import { axiosGet } from "../axios/takeGrades";
import { colorGrade } from "../strings/Cors";
import graphics from "@/public/images/sun-haze-svgrepo-com.svg";
import GraphicsSVG from "./GraphicsSvg";
import arraySemester from "../strings/ArraySemester";
import Loading from "../Loading";
export default function TakeGrades() {
  const [grades, setGrades] = useState<GradesI[]>([]);
  const [loading, isLoading] = useState(true);

  const getAxios = async () => {
    await axiosGet(setGrades);
  };
  useEffect(() => {
    const fetchLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      try {
        await getAxios();
      } finally {
        isLoading(false); // Após o carregamento, definir o estado de loading como false
      }
    };
    fetchLoading();
  }, []);
  const gradesFiltered = (semester: string) => {
    const filteredGrades = grades.filter((note) => note.semester === semester);
    return (
      <div key={semester}>
        <div className="flex justify-between items-center w-full">
          <h2>{conversionSemester(semester)}</h2>

          <CreateGrade
            semester={semester}
            setGrades={setGrades}
            axiosGet={getAxios}
          />
        </div>

        <div className="flex  flex-wrap gap-4 lg:gap-10  ">
          {filteredGrades.length == 0 && (
            <p className="text-xs mt-10 text-zinc-400">
              Notas ainda não registradas nesse bimestre.
            </p>
          )}
          {filteredGrades.map((note) => (
            <div
              key={note._id}
              className={`mt-10 flex gap-4 w-32 sm:w-36 lg:w-40 h-40 ${note.subject} rounded-2xl relative flex-wrap animatingCard `}
            >
              <div
                className="absolute end-0  top-1 tooltip-delete hover:opacity-75 transition-all bg-red-700 rounded-3xl p-2 "
                onClick={() => deleteGrade(note._id)}
              >
                <Image
                  src={trash}
                  alt="lixo"
                  className="h-7 w-7 rounded mix-blend-multiply  "
                />
                <span>Deletar</span>
              </div>
              <div className="flex flex-col ">
                <div className="p-2">
                  <p className="text-base text-gray-100">{note.subject}</p>
                  <p className="text-xs text-gray-200 ">
                    {" "}
                    {format(new Date(note.createdAt!), "dd/MM/yyyy ")}
                  </p>
                </div>
                <div
                  className={`absolute bottom-4 p-2 bg-opacity-80 bg-zinc-900 flex justify-start items-center  w-full ${colorGrade(
                    note.grade!
                  )} `}
                >
                  <GraphicsSVG />
                  <p className="ml-4">Nota: {note.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const deleteGrade = async (id: string | undefined) => {
    try {
      await instance.delete(`${id}`);
      axiosGet(setGrades);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-40">
          {gradesFiltered(arraySemester[0])}
          {gradesFiltered(arraySemester[1])}
          {gradesFiltered(arraySemester[2])}
          {gradesFiltered(arraySemester[3])}
        </div>
      )}
    </>
  );
}
