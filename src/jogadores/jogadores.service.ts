import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class JogadoresService {
  private jogadores: Jogador[] = [];

  private readonly logger = new Logger(JogadoresService.name);

  async criarAtualizarJogador(criarJogadorDto: CriarJogadorDto): Promise<void> {
    this.logger.log(`criaJogadorDTO: ${JSON.stringify(criarJogadorDto)}`);
    await this.criarJogador(criarJogadorDto);
  }

  private criarJogador(criarJogadorDto: CriarJogadorDto): void {
    const { email, telefoneCelular, nome } = criarJogadorDto;

    const jogador: Jogador = {
      _id: uuidv4(),
      email,
      telefoneCelular,
      nome,
      ranking: 'A',
      posicaoRanking: 1,
      urlFotoJogador: 'www.google.com.br/foto123.jpg',
    };

    this.jogadores.push(jogador);
    console.log('jogadores: ', jogador); //teste apenas
  }
}
