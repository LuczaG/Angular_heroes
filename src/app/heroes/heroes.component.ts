import { Component, OnInit } from '@angular/core';
import { Hero } from '../_model/hero';
import { HEROES } from '../_model/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;


  constructor() { }

  // az itt megadott metódusok a komponenes 
  //betöltésekor automatikusan meghívódnak
  ngOnInit(): void {

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
