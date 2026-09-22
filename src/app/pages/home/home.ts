import { Component } from '@angular/core';

interface NavLink {
  label: String;
  fragment: String;

}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly navLinks: NavLink[] = [
    { label: 'Sobre o Projeto', fragment: 'projeto' },
    { label: 'Equipe Gestora', fragment: 'equipe' },
    { label: 'Sobre a Doença de Alzheimer', fragment: 'alzheimer' },
    { label: 'Contato e Suporte', fragment: 'contato' },
    { label: 'Download e Compra', fragment: 'download' },
  ];
 
  readonly instagramUrl = 'https://instagram.com/';

}
