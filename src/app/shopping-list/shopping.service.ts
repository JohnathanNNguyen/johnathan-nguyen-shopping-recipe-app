import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})

export class ShoppingService implements OnInit {
  changedIngredient = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>()
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 3)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  myIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.changedIngredient.next(this.ingredients.slice())
  }
  addFromRecipe(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients)
    this.changedIngredient.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.changedIngredient.next(this.ingredients.slice())
  }
  deleteFromList(index: number,) {
    this.ingredients.splice(index, 1);
    this.changedIngredient.next(this.ingredients.slice())
  }
}