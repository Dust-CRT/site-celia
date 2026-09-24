import { Component } from '@angular/core';
import { Dashboard } from '../../pages/dashboard/dashboard';
import { MenuLateral } from '../menu-lateral/menu-lateral';

@Component({
  selector: 'app-menu-superior',
  imports: [Dashboard, MenuLateral],
  templateUrl: './menu-superior.html',
  styleUrl: './menu-superior.css',
})
export class MenuSuperior {

}
