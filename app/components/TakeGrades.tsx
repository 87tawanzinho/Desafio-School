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
export default function TakeGrades() {
  const [grades, setGrades] = useState<GradesI[]>([]);

  useEffect(() => {
    axiosGet(setGrades);
  }, []);

  const gradesFiltered = (semester: string) => {
    const filteredGrades = grades.filter((note) => note.semester === semester);
    return (
      <div key={semester}>
        <div className="flex justify-between items-center w-full">
          <h2>{conversionSemester(semester)}</h2>

          <CreateGrade semester={semester} />
        </div>
        <div className="flex  flex-wrap gap-4 lg:gap-20  justify-center ">
          {filteredGrades.map((note) => (
            <div
              key={note._id}
              className={`mt-10 flex gap-4  w-36 lg:w-40 h-40 ${note.subject} rounded-2xl relative flex-wrap`}
            >
              <div
                className="absolute end-0  top-1 tooltip-delete hover:opacity-75 transition-all"
                onClick={() => deleteGrade(note._id)}
              >
                <Image src={trash} alt="lixo" className="h-7 w-7 rounded " />
                <span>Deletar</span>
              </div>
              <div className="flex flex-col ">
                <div className="p-2">
                  <p className="text-base text-gray-100">{note.subject}</p>
                  <p className="text-xs text-gray-200 ">
                    {" "}
                    {format(new Date(note.createdAt), "dd/MM/yyyy ")}
                  </p>
                </div>
                <div
                  className={`absolute bottom-4 p-2 bg-opacity-80 flex justify-start items-center bg-black w-full ${colorGrade(
                    note.grade
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
      const res = await instance.delete(`${id}`);
      console.log(res);
      axiosGet();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-40">
        {gradesFiltered("PRIMEIRO")}
        {gradesFiltered("SEGUNDO")}
      </div>
    </>
  );
}
