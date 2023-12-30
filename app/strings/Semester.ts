const conversionSemester = (semester: string) =>
  `Bimestre ${
    semester === "PRIMEIRO"
      ? 1
      : semester === "SEGUNDO"
      ? 2
      : semester === "TERCEIRO"
      ? 3
      : semester === "QUARTO"
      ? 4
      : ""
  }`;

export default conversionSemester;
