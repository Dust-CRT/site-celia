import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuSuperior } from '../../components/menu-superior/menu-superior';

interface NavLink {
  label: string;
  fragment: string;
}

interface HeroImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, MenuSuperior],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  readonly navLinks: NavLink[] = [
    { label: 'Sobre o Projeto', fragment: 'projeto' },
    { label: 'Equipe Gestora', fragment: 'equipe' },
    { label: 'Contato e Suporte', fragment: 'contato' },
  ];

  readonly instagramUrl = 'https://instagram.com/';

  // Troque/adicione os caminhos das suas imagens aqui
  readonly heroImages: HeroImage[] = [
    { src: 'img/ProdutoCelia.png', alt: 'Pulseira Célia' },
    { src: 'img/ProdutoCelia2.png', alt: 'Pulseira Célia - detalhe do sensor' },
    { src: 'img/ProdutoCelia3.png', alt: 'Pulseira Célia sendo usada' },
  ];

  readonly currentSlide = signal(0);

  private autoplayId?: ReturnType<typeof setInterval>;
  private readonly autoplayIntervalMs = 4000;

  ngOnInit(): void {
    this.startAutoplay();
  }

  next(): void {
    this.currentSlide.update((i) => (i + 1) % this.heroImages.length);
  }
  
  private startAutoplay(): void {
    this.autoplayId = setInterval(() => this.next(), this.autoplayIntervalMs);
  }
}