const search=document.getElementById('search');
const submit=document.getElementById('submit');
const random=document.getElementById('random');
const mealEl=document.getElementById('meals');
const resultHeading=document.getElementsByClassName('result-heading');
const single_mealEl=document.getElementById('single-meal');

//Search Meals
function searchMeal(e)
{
    e.preventDefault();
//clear single meal

single_mealEl.innerHTML="";

//get search meal
//console.log(search.vlaue);

const term=search.vlaue;
//check for empty
if(term.trim())
{
fetch(
    'www.themealdb.com/api/json/v1/1/search.php?s=${term}'
    ).than(res => res.jason())
    .than(data => console.log(data))
}



}

//Event Listerners
submit.addEventListener('submit',searchMeal);
