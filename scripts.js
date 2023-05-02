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

let breakfast1 = new Recipe("Veggie Breakfast Sandwich", "breakfast1.html");
let breakfast2 = new Recipe("Apple Cinnamon Baked Oatmeal", "breakfast2.html");
let breakfast3 = new Recipe("Sausage Egg Casserole", "breakfast3.html");
let breakfast4 = new Recipe("Brussels Sprouts and Bacon Hash with Eggs", "breakfast4.html");
let breakfast5 = new Recipe("French Toast Casserole", "breakfast5.html");

let lunch1 = new Recipe("BLT Lettuce Wraps with Avocado", "lunch1.html");
let lunch2 = new Recipe("Kale Salad with Lemon Dressing", "lunch2.html");
let lunch3 = new Recipe("Pizza Twists", "lunch3.html");
let lunch4 = new Recipe("Avocado Pizza", "lunch4.html");
let lunch5 = new Recipe("Ranch Chicken Salad", "lunch5.html");

let snacks1 = new Recipe("Roasted Butternut Squash Seeds", "snacks1.html");
let snacks2 = new Recipe("Peanut Butter Oat Energy Balls", "snacks2.html");
let snacks3 = new Recipe("Ginger Beet Juice", "snacks3.html");
let snacks4 = new Recipe("Garlic Hummus", "snacks4.html");
let snacks5 = new Recipe("Strawberry Cucumber Juice", "snacks5.html");

document.addEventListener("DOMContentLoaded", function()
{
    dinner1.addToDinnerNavigation();
    dinner2.addToDinnerNavigation();
    dinner3.addToDinnerNavigation();
    dinner4.addToDinnerNavigation();
    dinner5.addToDinnerNavigation();
  
    breakfast1.addToBreakfastNavigation();
    breakfast2.addToBreakfastNavigation();
    breakfast3.addToBreakfastNavigation();
    breakfast4.addToBreakfastNavigation();
    breakfast5.addToBreakfastNavigation();
    
    lunch1.addToLunchNavigation();
    lunch2.addToLunchNavigation();
    lunch3.addToLunchNavigation();
    lunch4.addToLunchNavigation();
    lunch5.addToLunchNavigation();
    
    snacks1.addToSnacksNavigation();
    snacks2.addToSnacksNavigation();
    snacks3.addToSnacksNavigation();
    snacks4.addToSnacksNavigation();
    snacks5.addToSnacksNavigation();
    
});
document.getElementById("logos").addEventListener("click", function()
{
    document.getElementById("homepageVis").style.display = "inline";
    document.getElementById("homepageVis").style.visibility = "visible";
    document.getElementById("recipeSlot").style.display = "none";
    document.getElementById("recipeSlot").style.visibility = "hidden";
});