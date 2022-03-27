import axios from "axios";

////get element by id group
const secondRecipeCard = document.getElementById("second-recipe-card-random");
const form = document.getElementById("onsubmit-form");

///main function used to generate random recipe


async function fetchRandomRecipe( ){

    try {

        const result = await axios.get("https://api.spoonacular.com/recipes/random", {
            params: {
                apiKey:"7335910d97484c39956f8795ed5e678b",
            },
            headers:{
                "Content-Type": "application/json"
            }
        } );
        const  randomRecipe = result.data;
        createRecipeList (randomRecipe)
        console.log(randomRecipe)


    } catch (error) {
        console.log(error);
    }
}


///////// event listener linked to button

form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetchRandomRecipe();
})

//////////create image & title with inner html

function createRecipeList (recipesArray){



    const randomRecipeTitle = recipesArray.recipes[0].title
    const secondRecipeCardImage = recipesArray.recipes[0].image
    const recipeInstructionsGuide = recipesArray.recipes[0].instructions
    const randomrecipesummary = recipesArray.recipes[0].summary




    secondRecipeCard.innerHTML =`
      ${randomRecipeTitle}

	<img id="random-recipe-image" src="${secondRecipeCardImage}" alt="hier hoort een image">
	
	<p id="random-recipe-summary">${randomrecipesummary}<p>
	
	<p id="random-recipe-instructions-guide">${recipeInstructionsGuide}</p>
	 
`;

}
