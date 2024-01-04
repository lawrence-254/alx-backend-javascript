export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every((i) => typeof i === 'string')) {
      throw new Error('student must be array of string');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  setName(newName) {
    this._name = newName;
  }

  setLength(newLength) {
    this._length = newLength;
  }

  setStudent(newStudent) {
    this._students = newStudent;
  }
}
