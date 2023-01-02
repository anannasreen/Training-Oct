'use strict';
import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import { async } from 'regenerator-runtime';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    resultsView.update(model.getSearchResultsPage());

    bookmarksView.update(model.state.bookmarks);

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);

    resultsView.render(model.getSearchResultsPage());

    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));

  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  model.updateServings(newServings);

  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  recipeView.update(model.state.recipe);

  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();

    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    recipeView.render(model.state.recipe);

    addRecipeView.renderMessage();

    bookmarksView.render(model.state.bookmarks);

    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('💥', err);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
// import icons from 'url:../img/icons.svg';
// import 'core-js/stable';
// import 'regenerator-runtime';

// const recipeContainer = document.querySelector('.recipe');

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// // https://forkify-api.herokuapp.com/v2

// const renderSpinner = function (parentEl) {
//   const markup = `
//         <div class="spinner">
//           <svg>
//             <use href="${icons}#icon-loader"></use>
//           </svg>
//         </div>
//   `;
//   parentEl.innerHTML = '';
// };

// const showRecipe = async function () {
//   try {
//     renderSpinner(recipeContainer);
//     const res = await fetch(
//       // 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc958'
//       'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
//     );
//     const data = await res.json();

//     if (!res.ok) throw new Error(`${data.message}(${res.status})`);

//     // console.log(res, data);
//     let { recipe } = data.data;
//     recipe = {
//       id: recipe.id,
//       title: recipe.title,
//       publisher: recipe.publisher,
//       sourceUrl: recipe.source_url,
//       image: recipe.image_url,
//       servings: recipe.servings,
//       cookingTime: recipe.cooking_time,
//       ingredients: recipe.ingredients,
//     };
//     console.log(recipe);

//     const markup = `
//     <figure class="recipe__fig">
//           <img src="${recipe.image}" alt="${
//       recipe.title
//     }" class="recipe__img" />
//           <h1 class="recipe__title">
//             <span>${recipe.title}</span>
//           </h1>
//         </figure>
//         <div class="recipe__details">
//           <div class="recipe__info">
//             <svg class="recipe__info-icon">
//               <use href="${icons}#icon-clock"></use>
//             </svg>
//             <span class="recipe__info-data recipe__info-data--minutes">${
//               recipe.cookingTime
//             }</span>
//             <span class="recipe__info-text">minutes</span>
//           </div>
//           <div class="recipe__info">
//             <svg class="recipe__info-icon">
//               <use href="${icons}#icon-users"></use>
//             </svg>
//             <span class="recipe__info-data recipe__info-data--people">${
//               recipe.servings
//             }</span>
//             <span class="recipe__info-text">servings</span>
//             <div class="recipe__info-buttons">
//               <button class="btn--tiny btn--increase-servings">
//                 <svg>
//                   <use href="src/img/icons.svg#icon-minus-circle"></use>
//                 </svg>
//               </button>
//               <button class="btn--tiny btn--increase-servings">
//                 <svg>
//                   <use href="src/img/icons.svg#icon-plus-circle"></use>
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div class="recipe__user-generated">
//             <svg>
//               <use href="src/img/icons.svg#icon-user"></use>
//             </svg>
//           </div>
//           <button class="btn--round">
//             <svg class="">
//               <use href="src/img/icons.svg#icon-bookmark-fill"></use>
//             </svg>
//           </button>
//         </div>
//         <div class="recipe__ingredients">
//           <h2 class="heading--2">Recipe ingredients</h2>
//           <ul class="recipe__ingredient-list">
//           ${recipe.ingredients
//             .map(ing => {
//               return `
//           <li class="recipe__ingredient">
//           <svg class="recipe__icon">
//             <use href="src/img/icons.svg#icon-check"></use>
//           </svg>
//           <div class="recipe__quantity">${ing.quantity}</div>
//           <div class="recipe__description">
//             <span class="recipe__unit">${ing.unit}</span>
//             ${ing.description}
//           </div>
//         </li>
//         `;
//             })
//             .join('')}

//         </div>
//         <div class="recipe__directions">
//           <h2 class="heading--2">How to cook it</h2>
//           <p class="recipe__directions-text">
//             This recipe was carefully designed and tested by
//             <span class="recipe__publisher">${
//               recipe.publisher
//             }</span>. Please check out
//             directions at their website.
//           </p>
//           <a
//             class="btn--small recipe__btn"
//             href="${recipe.sourceUrl}"
//             target="_blank"
//           >
//             <span>Directions</span>
//             <svg class="search__icon">
//               <use href="src/img/icons.svg#icon-arrow-right"></use>
//             </svg>
//           </a>
//         </div>
//     `;
//     recipeContainer.innerHTML = '';
//     recipeContainer.insertAdjacentHTML('afterbegin', markup);
//   } catch (err) {
//     alert(err);
//   }
// };
// showRecipe();
