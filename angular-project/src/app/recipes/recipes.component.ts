import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe: Recipe | undefined;
  isRecipeSelected: boolean = false;

  constructor() {}

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.isRecipeSelected = true;
  }
}
