const $root = $('#root');

const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'



$(document).ready(function(){
    $('.btn').click(function(){
    // alert('You clicked the button');
    })

    fetch(url)
    .then(function(res){
        console.log("Raw Response Object:", res);
        // Convert response into JSON
        return res.json();
    })
    // API response with JSON data
    .then(function(data){
        // console.log("JSON data:", data);

        for(let i = 0; i < data.meals.length; i++){
            // one recipe at a time
            let recipe = data.meals[i];
            // console.log(recipe);
            
            // create a new div for each recipe with title and image
            let mealCard = document.createElement('div');
            let mealTitle = document.createElement('h3');
            let mealImg = document.createElement("img");
            // console.log(mealCard);

            // inject title and meal image to the new elements
            mealTitle.textContent = data.meals[i].strMeal;
            mealImg.src = data.meals[i].strMealThumb;

            // append title and image to the new card div
            let mealDisplay = document.getElementById("root")
            mealDisplay.appendChild(mealCard);
            mealDisplay.appendChild(mealTitle);
            mealDisplay.appendChild(mealImg);

        }

        // const mealCard = document.querySelector(".container");

        // const mealImg = document.createElement("img");
        
        // mealImg.src = data.meals[0].strMealThumb;
        // mealCard.appendChild(mealImg);
    })

    




})
