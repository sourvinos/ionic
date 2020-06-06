import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../common/recipe.model';
import { RecipeService } from '../../common/recipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: '../ui/recipes.list.html',
    styleUrls: ['../ui/recipes.list.scss'],
})
export class RecipesPageComponent implements OnInit {

    recipes: Recipe[] = []
    url = '/recipes'

    constructor(private router: Router, private recipeService: RecipeService) {
        console.log('Constructor')
        this.recipes = this.recipeService.getAll()
    }

    ngOnInit() {
        console.log('Init')
    }

    public getRecipe(id: string) {
        this.router.navigate([this.url, id])
    }

}
