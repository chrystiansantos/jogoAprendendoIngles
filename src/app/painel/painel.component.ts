import { Component, EventEmitter, Output } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  public instrucao: string = "Traduza a frase:"
  //aqui crio um atributo com nome frases do tipo frases que recebe frases que vem do mock
  public frases: Frase[] = FRASES;
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;
  public tentativas: number = 3;
  //new EventEmitter => podemos onde for nescessaro emitir um evento
  
  @Output() public encerrarJogo = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  atualizarResposta(resposta: Event): void {
    //tenho que fazer dessa forma pois o angular nao reconhece o target.value por isso uso o htmlInputElement
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }
  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr === this.resposta) {
      //trocar pergunta da rodada
      this.rodada++;

      if (this.rodada == 4) {
        this.encerrarJogo.emit('vitoria');
      }

      //atualiza o objeto rodadaFrase
      this.atualizaRodada();
      //progresso
      this.progresso += (100 / this.frases.length);
    } else {
      //diminuir a variavel tentativas
      this.tentativas--;
      if (this.tentativas == -1) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }
  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    //limpar resposta
    this.resposta = ""
  }
}