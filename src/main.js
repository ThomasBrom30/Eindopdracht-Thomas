import axios from "axios";

////get element by id group

const userInputField = document.getElementById("input-field");
const thirdRecipeCard = document.getElementById("third-recipe-card");
const secondRecipeCard = document.getElementById("second-recipe-card");
const firstRecipeCard = document.getElementById("first-recipe-card");
const form = document.getElementById("onsubmit-form");


/////constants used in functions


///main function used to extract recipes array

async function fetchRecipeByIngredients( query ){

    try {

        const response = await axios.get("https://api.edamam.com/api/recipes/v2", {
            params: {
                type: "public",
                app_id: "009506a1",
                app_key: "75b4c94ffbafb4cd084d4d9e06e1e174",
                q: query,

            },

        headers:{
                "Content-Type": "application/json"
        }
        } );
        const  searchByTitle = response.data.hits;
        createRecipeList (searchByTitle)
        console.log(searchByTitle)


    } catch (error) {
        console.log(error);
    }
}

///////// event listener linked to input field

form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetchRecipeByIngredients(userInputField.value);
})

//////////create images & titles with inner html

function createRecipeList (recipesArray){
console.log(recipesArray)



        const firstRecipeCardImage = recipesArray[0].recipe.image
        let ingredientsArrayOne = recipesArray[0].recipe.ingredientLines
        let numbersToString = ingredientsArrayOne.toString();


        const secondRecipeCardImage = recipesArray[1].recipe.image
        let ingredientsArrayTwo = recipesArray[1].recipe.ingredientLines
        let numbersToStringtwo = ingredientsArrayTwo.toString();

        const thirdRecipeCardImage = recipesArray[2].recipe.image
        let ingredientsArrayThree = recipesArray[2].recipe.ingredientLines
        let numbersToStringthree = ingredientsArrayThree.toString();

        firstRecipeCard.innerHTML =`
        ${recipesArray[0].recipe.label}
       
	<img id="first-recipe-card-image" src="${firstRecipeCardImage}" alt="hier hoort een image">
	    <p class="recipe-card-text">Ingredients: ${numbersToString}</p>
`;

        secondRecipeCard.innerHTML =`
       ${recipesArray[1].recipe.label}
       
	<img id="second-recipe-card-image" src="${secondRecipeCardImage}" alt="hier hoort een image">
	    <p class="recipe-card-text">Ingredients: ${numbersToStringtwo}</p>
`;

        thirdRecipeCard.innerHTML = `
      ${recipesArray[2].recipe.label}
      
<img id="third-recipe-card-image" src="${thirdRecipeCardImage}" alt="hier hoort een image">
    
    <p class="recipe-card-text">Ingredients: ${numbersToStringthree}</p>
`;

}


