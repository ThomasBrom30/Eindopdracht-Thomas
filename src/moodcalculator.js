import axios from "axios";


//// const get element by id group (ik kreeg een samesite cookie error bij het gebruiken van een import/export, vandaar de herhaling)

 const userInputField = document.getElementById("input-field");
 const thirdRecipeCard = document.getElementById("third-recipe-card");
 const secondRecipeCard = document.getElementById("second-recipe-card");
 const firstRecipeCard = document.getElementById("first-recipe-card");
 const form = document.getElementById("onsubmit-form");





////aangepaste fetch recipe template

async function fetchRecipeByMood (query){

    try {
        const romanticLazyHappy = await axios.get("https://api.edamam.com/api/recipes/v2", {
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
        const  searchbymood = romanticLazyHappy.data.hits;
        createRecipeListRandom(searchbymood)
        console.log(searchbymood)

    } catch (error) {
        console.log(error);
    }
}

///// if else cycle voor mood calculator

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const mood = userInputField.value
    console.log(mood)

    if (mood === "romantic,lazy,happy") {

        fetchRecipeByMood("cocktails");
    }
else if (mood === "romantic,lazy,sad") {
        fetchRecipeByMood("ice cream");
    }
else if (mood ==="romantic,active,happy"){
    fetchRecipeByMood("whipped cream");
    }
else if (mood === "romantic,active,sad"){
        fetchRecipeByMood("waffles");
    }
else if (mood === "party,lazy,happy"){
    fetchRecipeByMood("burger,fries");
    }
else if (mood === "party,active,happy"){
    fetchRecipeByMood("tapas");
    }
else if (mood === "party,active,sad"){
    fetchRecipeByMood("pizza");
    }
else if (mood === "party,lazy,sad"){
    fetchRecipeByMood("punch");
    }
})



export function createRecipeListRandom (recipesArray){
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



