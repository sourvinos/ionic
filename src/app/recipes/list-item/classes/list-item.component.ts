import { Component, Input } from '@angular/core';
import { Recipe } from '../../common/recipe.model';

@Component({
    selector: 'app-list-item',
    templateUrl: '../ui/list-item.html',
    styleUrls: ['../ui/list-item.scss'],
})
export class ListItemComponent {

    @Input() recipe: Recipe

}
