import { Component, OnInit } from '@angular/core';
import { Live } from 'src/app/shared/model/live.model';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  // listagem de lives que já aconteceram!
  livesPrevious : Live[];

  constructor(
    public liveService: LiveService
  ) { }

  ngOnInit(): void {
    // inicialização do componente
    this.getLives();
  }

  getLives() {
    // Faz a requisição para a api externa
    
    //this.liveService.getLivesWithFlag('previous')
    // terá como retorno um observable. Então iremos definir um subscribe que define o que irá acontecer quando esses dados chegarem dessa requisição da api externa.
    this.liveService.getLivesWithFlag('previous').subscribe(data => {
      // data.content pq o ResponsePageable tem o atributo content, que são as lives.
      this.livesPrevious = data.content;

    });
  }

}
