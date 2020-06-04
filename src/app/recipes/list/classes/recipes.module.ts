import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecipesPageRoutingModule } from './recipes-routing.module';
import { RecipesPageComponent } from './recipes.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RecipesPageRoutingModule
    ],
    declarations: [RecipesPageComponent]
})

export class RecipesPageModule { }
