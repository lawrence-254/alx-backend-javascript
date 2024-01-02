export const taskFirst = () =>
{
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast()
{
  return ' is okay';
}

export let tasNext = () =>
{
  var combination = 'But sometimes';
  combination += getLast();

  return combination;
}
