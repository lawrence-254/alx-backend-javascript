export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ status: 200, body: 'Success' });
      } else {
        const err = new Error('The fake API is not working currently');
        reject(err);
      }
    }, 5000);
  });
}
