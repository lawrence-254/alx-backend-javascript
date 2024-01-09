export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  return studentList.filter((s) => s.location === city).map((s) => {
    const gradeObject = newGrades.find((grade) => grade.studentId === s.id);
    const newGrade = gradeObject ? gradeObject.grade : 'N/A';
    return {
      id: s.id, firstName: s.firstName, location: s.location, grade: newGrade,
    };
  });
}
