import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string
  public rodada: number = 0
  public rodadaFrase: Frase


  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase)
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.resposta)
  }

  public verificarResposta(): void {
    // console.log('Verificar resposta: ', this.resposta)
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta.')
      this.rodada++
      this.rodadaFrase = this.frases[this.rodada]
    } else {
      alert('A tradução está errada')
    }

  }
}
