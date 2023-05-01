function loadOutsideData (srcfile, destination)
{
  let outsideData = fetch(srcfile)
  .then (function (outsideData){
      
    if (outsideData.ok) return outsideData.text();
    else return Promise.reject(outsideData);
    
  })
  .then (function (outsideText){
      
    document.querySelector(destination).innerHTML = outsideText;
    
  })
  .catch(function(error){
      
    console.log("Error:", error);
    
  });
}

function Recipe(n, a) 
{
    //objectproperties
    this.name = n;
    this.htmlSnippet = a;
    
    
    //methods for recipes
    this.display = function()
    {
        loadOutsideData(this.htmlSnippet, '#recipeSlot');
    }
    
    this.addToBreakfastNavigation = function()
    {
        let newRecipe = document.createElement("li");
        newRecipe.innerHTML = this.name;
        document.querySelector("#breakfast ul").appendChild(newRecipe);

        let recipeSelf = this;
        newRecipe.addEventListener("click", function()
        {
            recipeSelf.display();
            document.getElementById("homepageVis").style.display = "none";
            document.getElementById("homepageVis").style.visibility = "hidden";
            document.getElementById("recipeSlot").style.display = "inline";
            document.getElementById("recipeSlot").style.visibility = "visible";
        });
    }
    
    this.addToLunchNavigation = function()
    {
        let newRecipe = document.createElement("li");
        newRecipe.innerHTML = this.name;
        document.querySelector("#lunch ul").appendChild(newRecipe);

        let recipeSelf = this;
        newRecipe.addEventListener("click", function()
        {
            recipeSelf.display();
            document.getElementById("homepageVis").style.display = "none";
            document.getElementById("homepageVis").style.visibility = "hidden";
            document.getElementById("recipeSlot").style.display = "inline";
            document.getElementById("recipeSlot").style.visibility = "visible";
        });
    }
    
    this.addToDinnerNavigation = function()
    {
        let newRecipe = document.createElement("li");
        newRecipe.innerHTML = this.name;
        document.querySelector("#dinner ul").appendChild(newRecipe);

        let recipeSelf = this;
        newRecipe.addEventListener("click", function()
        {
            recipeSelf.display();
            document.getElementById("homepageVis").style.display = "none";
            document.getElementById("homepageVis").style.visibility = "hidden";
            document.getElementById("recipeSlot").style.display = "inline";
            document.getElementById("recipeSlot").style.visibility = "visible";
        });
    }
    
    this.addToSnacksNavigation = function()
    {
        let newRecipe = document.createElement("li");
        newRecipe.innerHTML = this.name;
        document.querySelector("#snacks ul").appendChild(newRecipe);

        let recipeSelf = this;
        newRecipe.addEventListener("click", function()
        {
            recipeSelf.display();
            document.getElementById("homepageVis").style.display = "none";
            document.getElementById("homepageVis").style.visibility = "hidden";
            document.getElementById("recipeSlot").style.display = "inline";
            document.getElementById("recipeSlot").style.visibility = "visible";
        });
    }
}//end recip

let dinner1 = new Recipe("Sweet Potato Sheet Pan", "dinner1.html");
let dinner2 = new Recipe("Savory Turkey Potpies", "dinner2.html");
let dinner3 = new Recipe("Lemon Chicken with Orzo", "dinner3.html");
let dinner4 = new Recipe("Mediterranean Turkey Skillet", "dinner4.html");
let dinner5 = new Recipe("Pesto Gnocchi Sheet Pan", "dinner5.html");

document.addEventListener("DOMContentLoaded", function()
{
    dinner1.addToDinnerNavigation();
    dinner2.addToDinnerNavigation();
    dinner3.addToDinnerNavigation();
    dinner4.addToDinnerNavigation();
    dinner5.addToDinnerNavigation();
  
});
document.getElementById("logos").addEventListener("click", function()
{
    document.getElementById("homepageVis").style.display = "inline";
    document.getElementById("homepageVis").style.visibility = "visible";
    document.getElementById("recipeSlot").style.display = "none";
    document.getElementById("recipeSlot").style.visibility = "hidden";
});