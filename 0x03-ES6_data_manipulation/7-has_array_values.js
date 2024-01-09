export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set) || !Array.isArray(array)) {
    throw new Error('Invalid input types. The first argument must be a Set, and the second argument must be an array.');
  }
  return array.every((e) => set.has(e));
}
