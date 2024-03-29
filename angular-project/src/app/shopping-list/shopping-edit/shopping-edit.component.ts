import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editiedItemIndex: number;
  editedItem: Ingredient;
  constructor(private slService: ShoppingListService){}

  ngOnInit(): void {
     this.subscription = this.slService.startedEditing.subscribe(
        (index: number) => {
          this.editiedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }
  onSubmit(form: NgForm) {
   const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editiedItemIndex, newIngredient);
    } else {
      this.slService.addIngreditent(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

  onDelete() {
    this.slService.deleteIngredient(this.editiedItemIndex);
    this.onClear();
  }
}
