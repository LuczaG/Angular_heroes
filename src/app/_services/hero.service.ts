import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '@app/_models';
import { environment } from 'src/environments/environment';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

 getAllHeroes() {
  return this.http.get<Hero[]>(`${environment.apiUrl}/posts`, httpOption);
 }

 getHeroByID(heroId: Number) {
  return this.http.get<Hero>(`${environment.apiUrl}/posts/${heroId}`, httpOption);
 }

 addHero(hero: Hero) {
  return this.http.post<Hero>(`${environment.apiUrl}/posts`, hero, httpOption);
 }
}
