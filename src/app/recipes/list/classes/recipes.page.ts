import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../common/recipe.model';
import { RecipeService } from '../../common/recipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: '../ui/recipes.page.html',
    styleUrls: ['../ui/recipes.page.scss'],
})
export class RecipesPageComponent implements OnInit {

    recipes: Recipe[] = []
    url = '/recipes'

    constructor(private router: Router, private recipeService: RecipeService) { }

    ngOnInit() {
        this.recipes = this.recipeService.getAll()
    }

    public getRecipe(id: string) {
        this.router.navigate([this.url, id])
    }

}
