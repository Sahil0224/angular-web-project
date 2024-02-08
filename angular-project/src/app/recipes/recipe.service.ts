import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://www.primaverakitchen.com/wp-content/uploads/2018/05/Whole30-Bunless-Turkey-Burger-Recipe-Primavera-Kitchen-1.jpg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.primaverakitchen.com/wp-content/uploads/2018/05/Whole30-Bunless-Turkey-Burger-Recipe-Primavera-Kitchen-1.jpg')
    
      ];

    getRecipies() {
        return this.recipes.slice();
    }
}