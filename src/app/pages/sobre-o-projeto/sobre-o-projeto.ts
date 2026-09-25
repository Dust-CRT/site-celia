import { Component, signal } from '@angular/core';
import { MenuSuperior } from '../../components/menu-superior/menu-superior';
import { Router } from '@angular/router';


interface RegistroEstresse {
  horario: string;
  nivel: number; // 0 a 10
}
 
interface MensagemChat {
  autor: 'bot' | 'usuario';
  texto: string;
}

type NivelEmocional = 'calmo' | 'moderado' | 'agitado';
 

@Component({
  selector: 'app-sobre-o-projeto',
  imports: [MenuSuperior],
  templateUrl: './sobre-o-projeto.html',
  styleUrl: './sobre-o-projeto.css',
})
export class SobreOProjeto {
  logado : boolean = false;

  constructor(private router: Router){};
  readonly nomePaciente = 'Maria Aparecida';

  navegarPara(rota: string): void {
    this.router.navigate([rota]);
    
  }

  

  readonly ultimoEvento = {
    tempoDecorrido: '2h 15min',
    horario: '14:32',
  };
 
  readonly estadoEmocional: { nivel: NivelEmocional; label: string; descricao: string } = {
    nivel: 'moderado',
    label: 'Moderado',
    descricao: 'Duas oscilações de ansiedade registradas, sem episódios prolongados.',
  };
 
  readonly registros: RegistroEstresse[] = [
    { horario: '06h', nivel: 2 },
    { horario: '08h', nivel: 3 },
    { horario: '10h', nivel: 5 },
    { horario: '12h', nivel: 4 },
    { horario: '14h', nivel: 8 },
    { horario: '16h', nivel: 6 },
    { horario: '18h', nivel: 3 },
    { horario: '20h', nivel: 2 },
  ];
 
  readonly maiorNivel = Math.max(...this.registros.map((r) => r.nivel));
 
  readonly chatAberto = signal(false);
 
 
  toggleChat(): void {
    this.chatAberto.update((aberto: any) => !aberto);
  }
 
  baixarRelatorio(formato: 'pdf' | 'csv'): void {
    // TODO: integrar com o serviço real de geração de relatórios
    console.log(`Solicitado relatório em formato ${formato}`);
  }
}
