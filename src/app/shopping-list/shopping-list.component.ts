import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private changedSub: Subscription;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.myIngredients()
    this.changedSub = this.shoppingService.changedIngredient
      .subscribe(
        (myNewIngredient: Ingredient[]) => {
          this.ingredients = myNewIngredient
        }
      )
  }

  onEditItem(i: number) {
    this.shoppingService.startedEditing.next(i)
  }

  ngOnDestroy() {
    this.changedSub.unsubscribe();
  }

}
