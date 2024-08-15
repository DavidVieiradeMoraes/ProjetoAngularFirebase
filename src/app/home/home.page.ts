import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  perfil = {
    foto: 'https://s2.glbimg.com/14HekejauWTTQGBRfOkj4Dnhzqc=/e.glbimg.com/og/ed/f/original/2019/01/11/animal-mammal-mane-fauna-llama-alpaca-head-lama-vertebrate-camel-like-mammal-arabian-camel-902545.jpg',
    nome: 'David',    
    profissao: 'Programador',
    email: 'David@mail.com',
    idioma: 'Ingles',
    cidade: 'capela do alto',
    desde: '2023',
    Biografia: 'Programador blablblblalablba',
    
  }
    metricas = [
      {
        nome: 'curtidas',
        valor: '45k',
      },
      {
        nome: 'seguindo',
        valor: '45k',
      },
      {
        nome: 'amigos',
        valor: '1',
      },
    ]

    amigos = [
      {
        foto: '',
        amigo: 'Maquiavel',
        citacao: '@maquiavel',
        frase: 'É melhor ser temido do que amado'
      }
    ] 
 
}
