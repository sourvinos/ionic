import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../../common/recipe.model';
import { RecipeService } from '../../common/recipe.service';

@Component({
    selector: 'app-recipe-details',
    templateUrl: '../ui/recipe-details.page.html',
    styleUrls: ['../ui/recipe-details.page.scss'],
})

export class RecipeDetailsComponent {

    recipe: Recipe

    constructor(private activatedRoute: ActivatedRoute, private alertController: AlertController, private recipeService: RecipeService, private router: Router) {
        this.activatedRoute.params.subscribe(p => {
            if (p.recipeId) {
                this.getRecord(p.recipeId)
                this.recipe = this.getRecord(p.recipeId)
            }
        })
    }

    private getRecord(recipeId: string) {
        return this.recipe = this.recipeService.getRecipe(recipeId)
    }

    onDeleteRecipe() {
        this.alertController.create({
            header: 'Confirm',
            message: 'This recipe will be gone for ever',
            buttons: [
                { text: 'Cancel', role: 'cancel' },
                {
                    text: 'OK', handler: () => {
                        this.recipeService.deleteRecipe(this.recipe.id)
                        this.router.navigate(['/recipes'])
                    }
                }
            ]
        }).then(response => {
            response.present()
        })
    }

}
