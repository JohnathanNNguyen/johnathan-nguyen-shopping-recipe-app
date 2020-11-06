
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() thisRecipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('a test recipe', 'this is a test', 'http://afwbroker.com.au/wp-content/uploads/2016/05/Chinese-food.jpg'),
    new Recipe("Nigiri", "Salmon & Tuna", "https://www.akashigallery.com/bcn/wp-content/uploads/2017/07/Nigiri-moriawase-9-web.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(clickedRecipe: Recipe) {
    this.thisRecipeWasSelected.emit(clickedRecipe)
  }
}
