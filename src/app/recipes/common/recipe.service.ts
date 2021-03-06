import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })

export class RecipeService {

    private recipes: Recipe[] = [
        { id: '1', description: 'Steak', about: 'Steak grilled on BBQ', imageUrl: 'steak.jpg' },
        { id: '2', description: 'Pasta', about: 'Home made pasta', imageUrl: 'pasta.jpg' },
        { id: '3', description: 'Pizza', about: 'Italians do it better', imageUrl: 'pizza.jpg' },
        { id: '4', description: 'Salad', about: 'Fresh vegetables and feta cheese', imageUrl: 'salad.jpg' }
    ]

    constructor() { }

    getAll() {
        return this.recipes
    }

    getRecipe(recipeId: string): Recipe | null {
        return this.recipes.find(recipe => {
            return recipe.id === recipeId
        })
    }

    deleteRecipe(recipeId: string): void {
        this.recipes = this.recipes.filter(recipe => {
            return recipe.id !== recipeId
        })
        console.log(this.recipes)
    }

}
