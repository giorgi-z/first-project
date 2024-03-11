import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply a test', 'https://www.recipetineats.com/wp-content/uploads/2024/02/Lemon-garlic-salmon-tray-bake_1.jpg?resize=900,1125')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
