const promise = new Promise((resolve, reject) => {
  setTimeout(() =>{
    resolve('This is my resolved data');
  }, 1500);

  setTimeout(() =>{
    reject('deu ruim');
  },1502);
});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) =>{
  console.log(error);
});

console.log('after');
