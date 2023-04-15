import { recipes } from "./RecipeData";

function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <ul>
              {recipe.ingredients.map((ingredient) => {
                return <li key={ingredient}>{ingredient}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default RecipeList;
