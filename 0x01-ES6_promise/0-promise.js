export default function getResponseFromAPI()
{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = true;
      if (response)
      {
        resolve('success');
      }else{
        reject('failure');
      }
    }, 5000);
  });
}
