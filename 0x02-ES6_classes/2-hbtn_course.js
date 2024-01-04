export default class HolbertonCourse {
  constructor(name, length, student) {
    if (typeof name !== 'String') {
      throw new Error('Name must be a string');
    }
   if (typeof length !== 'number') {
     throw new Error('Length must be a number')
   }
