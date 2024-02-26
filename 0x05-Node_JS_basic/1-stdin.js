process.stdout.write('Welcome to Holberton School, what is your name?\n');

const nameInput = '';

process.stdin.on('readable', () => {
  let chunk;

  while ((chunk = process.stdin.read()) !== null) {
    nameInput += chunk;
    if (chunk.includes('\n')) {
      process.stdout.write(`Your name is: ${nameInput}`);
      nameInput = '';
    }
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

