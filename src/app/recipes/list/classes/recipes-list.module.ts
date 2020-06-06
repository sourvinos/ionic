import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecipesPageComponent } from './recipes-list.page';
import { RecipesPageRoutingModule } from './recipes-list.routing.module';

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
