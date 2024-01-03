export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = true;
      if (response) {
        resolve('success');
      } else {
        const err = new Error('failure');
        reject(err);
      }
    }, 5000);
  });
}
