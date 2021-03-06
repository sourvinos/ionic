import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesPageComponent } from './recipes-list.page';

const routes: Routes = [
    { path: '', component: RecipesPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class RecipesPageRoutingModule { }
