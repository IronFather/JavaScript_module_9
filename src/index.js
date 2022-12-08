// 17 - 9 АСИНХРОННОСТЬ ТАЙМЕР ----------РЕПЕТА----------------

// 17 - 9  setTimeout ----------РЕПЕТА----------------
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
  
//  const timerId = (() => setTimeout(logger, 5000, 5000));
  
//  timerId();
 
//   console.log(timerId);

//   console.log('что будет?');
  
//   const shouldCancelTimer = Math.random() > 0.3;
//   console.log(shouldCancelTimer);
  
//   if (shouldCancelTimer) {
//     clearTimeout(timerId);
//   }

// 17 - 9 setInterval ----------РЕПЕТА----------------

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
// const shouldCancelInterval = Math.random() > 0.2;
// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//   clearInterval(intervalId);
// }



// 17 - 9  notification ----------РЕПЕТА----------------

/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

//  const NOTIFICATION_DELAY = 5000;
//  let timeoutId = null;
//  const refs = {
//    notification: document.querySelector('.js-alert'),
//  };
 
// window.addEventListener(`click`, () => {
//   showNotification();
// })

//  refs.notification.addEventListener('click', onNotificationClick);
 

 
 /*
  * Функции
  */
//  function onNotificationClick() {
//    hideNotification();
//    clearTimeout(timeoutId);
//  }

//  function showNotification() {
//    refs.notification.classList.add('is-visible');

//    timeoutId = setTimeout(() => {
//      console.log('Закрываем алерт автоматически чтобы не висел');
//      hideNotification();
//    }, NOTIFICATION_DELAY);
//  }
 
//  refs.notification.addEventListener('mousemove', Close);

//  function Close() {
//   hideNotification();
// }

//  function hideNotification() {
//   refs.notification.classList.remove('is-visible');
// }

// 17 - 9  subscription ----------РЕПЕТА----------------

// const DELAY = 2000;
// const MAX_MODAL = 3;

// let intervalId = null;
// let logInterval = 0;
// let isSubscripted = false;

// intervalId = setInterval(() => {

//   logInterval +=1;
//   console.log(`ще одну ложку!`);
//   console.log(logInterval);

//   if(logInterval === MAX_MODAL || isSubscripted) {
//     clearInterval(intervalId);
//   }
// }, 2000);

// _____________________________________________________

// import BSN from 'bootstrap.native';

// const refs = {
//   modal: document.querySelector('#subscription-modal'),
//   subscribeBtn: document.querySelector('button[data-subscribe]'),
// };

// const PROMPT_DELAY = 3000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;
// let hasSubscribed = false;
// const modal = new BSN.Modal('#subscription-modal');

// openModal();

// refs.modal.addEventListener('hide.bs.modal', openModal);
// refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

// function openModal() {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Максимальное кол-во надоеданий или подписался');
//     return;
//   }

//   setTimeout(() => {
//     console.log('Открываем надоедалку');
//     modal.show();
//     promptCounter += 1;
//   }, PROMPT_DELAY);
// }

// function onSubscribeBtnClick() {
//   hasSubscribed = true;
//   modal.hide();
// }


// 17 - 9  date ----------РЕПЕТА----------------

/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

// const date1 = Date.now();

// setTimeout(() => {
//   const date2 = Date.now();

//   console.log(date1);
//   console.log(date2);
//   console.log((date2 - date1));

// }, 4000);

// const timer = {
//   start() {
//     const startTime = Date.now();

//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const timerComponent = getTimerComponent;
//     }, 1000)
//   }
// }

// timer.start();

// function getTimerComponent() {

// }



// function clockFace({hours, minuts, seconds}) {

// }
// _______________________________________________

// const date1 = Date.now();
// console.log('date1', date1);

// setTimeout(() => {
//   const date2 = Date.now();

//   console.log('date1', date1);
//   console.log('date2', date2);

//   console.log(date2 - date1);
// }, 3000);

// 17 - 9  timer ----------РЕПЕТА----------------

// const refs = {
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// class Timer {
//   constructor({ onTick }) {
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTick = onTick;

//     this.init();
//   }

//   init() {
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   start() {
//     if (this.isActive) {
//       return;
//     }

//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = this.getTimeComponents(deltaTime);

//       this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

  /*
   * - Принимает время в миллисекундах
   * - Высчитывает сколько в них вмещается часов/минут/секунд
   * - Возвращает обьект со свойствами hours, mins, secs
   * - Адская копипаста со stackoverflow 💩
   */
  // getTimeComponents(time) {
  //   const hours = this.pad(
  //     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  //   );
  //   const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  //   const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  //   return { hours, mins, secs };
  // }

  /*
   * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */
//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

// const timer = new Timer({
//   onTick: updateClockface,
// });

// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

/*
 * - Принимает время в миллисекундах
 * - Высчитывает сколько в них вмещается часов/минут/секунд
 * - Рисует интерфейс
 */
// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }


// 18 - 9  promise ----------РЕПЕТА----------------

setTimeout(() => {
  const promise = new Promise((revolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  if(canFulfill) {
    revolve(`Промис выполнился успешно, с результатом`); 
    }

    reject(`Промис выполнился с ошибкой`);
});

}, 2000);

// promise.then( 
//   onSuccess => {
//   console.log(result);

//   onError => {
//     console.log(error);
//   };
// });

// 2 вариант
promise.then(onSuccess, onError);

// function onSuccess(result) {
// console.log(onSuccess);
// console.log(result);
// }

// function onError(result) {
//   console.log(onError);
//   console.log(error);
//   }

// chain ЦЕПОЧКИ

promise.then( result => {
  console.log(result);

  return 5;
})
.then( x => {
  console.log(x);

  return 10
})
.then(y => {
  console.log(y);
});


// __________________________________________________

/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
//     }

//     reject('Промис выполнился с ошибкой (отклонён, rejected)');
//   }, 1000);
// });

// promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`❌ ${error}`);
// }

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);

//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('Я буду выполнен в любом случае'));












// 18 - 9  promice ----------РЕПЕТА----------------