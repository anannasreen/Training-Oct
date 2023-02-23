// function myFetch(url) {
//   return new Promise((res, rej) => {
//     $.ajax({
//       type: 'GET',
//       url: url,
//       success: function (msg) {
//         // console.log(msg);
//         res(msg);
//       },
//       error: function (xhr, statusText) {
//         // console.log(statusText);
//         rej(statusText);
//       },
//     });
//   });
// }

// const cache = {
//   name: 'Code Malayalam',
// };

// function getJson(url) {
//   // if (cache) {
//   //   // return Promise.resolve(cache);
//   //   return Promise.reject(cache);
//   // }
//   return fetch(url).then(data => {
//     return data.json();
//   });
// }

// function convertToPromise(data) {
//   return new Promise((res, rej) => {
//     res(data);
//   });
// }
