import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../common/recipe.model';
import { RecipeService } from '../../common/recipe.service';

@Component({
    selector: 'app-recipe-details',
    templateUrl: '../ui/recipe-details.page.html',
    styleUrls: ['../ui/recipe-details.page.scss'],
})

export class RecipeDetailsComponent {

    recipe: Recipe

    constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {
        this.activatedRoute.params.subscribe(p => {
            if (p.recipeId) { this.getRecord(p.recipeId) }
        })
    }

    private getRecord(recipeId: string) {
        return this.recipe = this.recipeService.getRecipe(recipeId)
    }

}
