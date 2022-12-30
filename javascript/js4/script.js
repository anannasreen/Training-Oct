'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//   const html = `
//     <article class="country ${className}">
//         <img src="${data.flag}" alt="" class="country__img">
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//         </div>
//     </article>
// `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };
// // https://restcountries.com/v2/
// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   // console.log(request.responseText);

//   request.addEventListener('load', function () {
//     //   console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     const [neighbour] = data.borders?.[0];

//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       //   console.log(this.responseText);
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });

//     //     const html = `
//     //     <article class="country">
//     //         <img src="${data.flag}" alt="" class="country__img">
//     //         <div class="country__data">
//     //             <h3 class="country__name">${data.name}</h3>
//     //             <h4 class="country__region">${data.region}</h4>
//     //             <p class="country__row"><span>👫</span>${(
//     //               +data.population / 1000000
//     //             ).toFixed(1)} people</p>
//     //             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     //             <p class="country__row"><span>💰</span>${
//     //               data.currencies[0].name
//     //             }</p>
//     //         </div>
//     //     </article>
//     // `;
//     //     countriesContainer.insertAdjacentHTML('beforeend', html);
//     //     countriesContainer.style.opacity = 1;
//   });
// };
// // getCountryAndNeighbour('portugal');
// // getCountryAndNeighbour('germany');
// getCountryAndNeighbour('usa');

// // getCountryData('portugal');
// // getCountryData('usa');
// // getCountryData('germany');

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())

//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'));
// };

// getCountryData('portugal');

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city},${data.country}`);
    });
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
