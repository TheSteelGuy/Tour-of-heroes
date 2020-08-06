import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Heroes Service: fetched successfully.');
    return  of(HEROES);
  }
  constructor(private messageService: MessageService) { }

  getHero(heroId: number): Observable<Hero>  {
    this.messageService.add(`HeroService: fetched hero id=${heroId}`);
    return of(HEROES.find(hero => hero.id === heroId));
  }
}
