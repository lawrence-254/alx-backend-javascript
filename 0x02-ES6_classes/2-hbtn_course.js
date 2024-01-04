export default class HolbertonCourse {
  constructor(name, length, student) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }
    if (typeof student !== 'string' && typeof student !== 'array') {
      throw new Error('student must be array of strings');
    }
