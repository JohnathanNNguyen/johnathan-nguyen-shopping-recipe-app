import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputReference: ElementRef;
  @ViewChild('amountInput') amountInputReference: ElementRef;
  @Output() addedIngredient = new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit(): void {
  }

  onAddButton() {
    const addName = this.nameInputReference.nativeElement.value;
    const addAmount = this.amountInputReference.nativeElement.value;
    const addIngredient = new Ingredient(addName, addAmount);
    this.addedIngredient.emit(addIngredient)
  }
}
