export const colorGrade = (grade: number) => {
  if (grade <= 5.9) {
    return "text-red-400";
  } else if (grade <= 7) {
    return "text-yellow-400";
  } else {
    return "text-green-400";
  }
};
