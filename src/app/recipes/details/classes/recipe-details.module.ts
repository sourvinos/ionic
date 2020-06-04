import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecipeDetailsPageRoutingModule } from './recipe-details-routing.module';
import { RecipeDetailsComponent } from './recipe-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeDetailsPageRoutingModule
  ],
  declarations: [RecipeDetailsComponent]
})
export class RecipeDetailsPageModule { }
