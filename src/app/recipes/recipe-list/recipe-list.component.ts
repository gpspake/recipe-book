import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy Description', 'http://thedietfactory.net/wp-content/uploads/2013/02/gourmetfood.jpg');
  constructor() { }

  ngOnInit() {
  }
  
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
