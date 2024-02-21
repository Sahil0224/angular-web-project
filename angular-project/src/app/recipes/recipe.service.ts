import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Burger', 'This is the best burger.', 'https://tse1.mm.bing.net/th/id/OIP.aJflLmSm3dGKvwHdqvuBYwAAAA?w=202&h=158&c=7&r=0&o=5&pid=1.7', [
            new Ingredient('Meat', 1),
            new Ingredient('Onion', 1)
        ]),
        new Recipe('Salad', 'This is simply a healthy Salad.', 'https://tse4.mm.bing.net/th/id/OIP.nwknMlMuvlf9WfKjsueLQwHaE8?w=208&h=180&c=7&r=0&o=5&pid=1.7', [
            new Ingredient('Corn', 1),
            new Ingredient('Cheese', 1)
        ])
    
      ];
    constructor(private slService: ShoppingListService) {}
    getRecipies() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index]
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }
}