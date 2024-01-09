export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    throw new Error('Invalid input types.');
  }

  const filteredValues = Array.from(set)
    .filter(value => typeof value === 'string' && value.startsWith(startString))
    .map(value => value.substring(startString.length));

  return filteredValues.join('-');
}
