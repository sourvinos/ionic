import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })

export class RecipeService {

    private recipes: Recipe[] = []

    constructor() {
        const r1: Recipe = { id: '1', description: 'Schnitzel' }
        const r2: Recipe = { id: '2', description: 'Spaghetti' }
        const r3: Recipe = { id: '3', description: 'Pizza' }
        const r4: Recipe = { id: '4', description: 'Tuna salad' }
        this.recipes.push(r1, r2, r3, r4)
    }

    getAll() {
        return this.recipes
    }

    getRecipe(recipeId: string): Recipe | null {
        return this.recipes.find(recipe => {
            return recipe.id === recipeId
        })
    }

}
