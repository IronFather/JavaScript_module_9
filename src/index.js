// 17 - 8 АСИНХРОННОСТЬ ТАЙМЕР ----------РЕПЕТА----------------

// 17 - 8  setTimeout ----------РЕПЕТА----------------
// console.log('До вызова setTimeout');


// setTimeout((x) => {
//     console.log(x);
// }, 2000, 5);

// setTimeout((y) => {
//     console.log(y);
// }, 1000, 10);

// console.log('После вызова setTimeout');

// /*
//  * Очистка таймаута с clearTimeout(timeoutId)
//  */

// const logger = time => {
//     console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
//   };
  
//  const timerId = setTimeout(logger, 2000, 2000);
  
//   console.log(timerId);
  
//   const shouldCancelTimer = Math.random() > 0.3;
//   console.log(shouldCancelTimer);
  
//   if (shouldCancelTimer) {
//     clearTimeout(timerId);
//   }

// 17 - 8  setInterval ----------РЕПЕТА----------------

/*
 * Метод setInterval(callback, delay, args)
 */

// const logger = time => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

// console.log('До вызова setInterval');
// setInterval(logger, 2000, 2000);
// console.log('После вызова setInterval');

/*
 * Очистка интервала с clearInterval(intervalId)
 */

// const intervalId = setInterval(logger, 2000, 2000);
// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//   clearInterval(intervalId);
// }



// 17 - 8  setInterval ----------РЕПЕТА----------------
// 17 - 8  setInterval ----------РЕПЕТА----------------
// 17 - 8  setInterval ----------РЕПЕТА----------------