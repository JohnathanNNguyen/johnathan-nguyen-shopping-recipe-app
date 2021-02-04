import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';

@Injectable()


export class RecipeService {
  recipeChanged = new Subject<Recipe[]>()

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Pho',
  //     'Oxtail special',
  //     'https://i.pinimg.com/originals/89/2f/fa/892ffa6d294db50722c9a7517533b66e.jpg',
  //     [
  //       new Ingredient('Noodles', 1),
  //       new Ingredient('Oxtail', 3),
  //       new Ingredient('Sliced Beef', 3)
  //     ]),
  //   new Recipe(
  //     "Nigiri",
  //     "Salmon & Tuna",
  //     "https://www.akashigallery.com/bcn/wp-content/uploads/2017/07/Nigiri-moriawase-9-web.jpg",
  //     [
  //       new Ingredient('Salmon', 2),
  //       new Ingredient('Toro', 2),
  //       new Ingredient('Sushi Rice', 4),
  //       new Ingredient('Wasabi', 1)
  //     ])
  // ];
  private recipes: Recipe[] = [];

  constructor(private shoppingService: ShoppingService) { }
  setRecipes(recipe: Recipe[]) {
    this.recipes = recipe;
    this.recipeChanged.next(this.recipes.slice())
  }

  myRecipes() {
    return this.recipes.slice();
  }
  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addFromRecipe(ingredients);
  }
  getMyRecipe(index: number) {
    return this.recipes[index]
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe
    this.recipeChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice())
  }

}