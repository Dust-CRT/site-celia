import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  imports: [],
  templateUrl: './menu-lateral.html',
  styleUrl: './menu-lateral.css',
})
export class MenuLateral {
menuAberto : boolean = false;
  constructor(private router: Router){};

   navegarPara(rota: string): void {
    this.router.navigate([rota]);
    this.menuAberto = false;
  }

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }
}
