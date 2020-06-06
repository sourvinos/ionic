import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
    {
        path: 'recipes', children: [
            { path: '', loadChildren: '../recipes/list/classes/recipes-list.module#RecipesPageModule' },
            { path: ':recipeId', loadChildren: '../recipes/details/classes/recipe-details.module#RecipeDetailsPageModule' }
        ]
    }]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
