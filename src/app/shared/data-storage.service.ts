import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { map, tap } from 'rxjs/operators'

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }


  storeRecipes() {
    const recipe = this.recipeService.myRecipes();
    this.http.put('https://shopping-list-ff05e-default-rtdb.firebaseio.com/recipes.json', recipe)
      .subscribe(response => {
        console.log(response)
      })
  }
  fetchRecipes() {
    return this.http
      .get<Recipe[]>('https://shopping-list-ff05e-default-rtdb.firebaseio.com/recipes.json')
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
        });
      }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes)
          this.recipeService.setRecipes(recipes)
        })
      )
  }
}