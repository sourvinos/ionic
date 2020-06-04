import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../common/recipe.model';
import { RecipeService } from '../../common/recipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: '../ui/recipes.page.html',
    styleUrls: ['../ui/recipes.page.scss'],
})
export class RecipesPageComponent implements OnInit {

    recipes: Recipe[]

    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
        this.recipes = this.recipeService.getAll()
    }

}
