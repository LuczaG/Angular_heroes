import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero } from '@app/_models';
import { HeroService } from '@app/_services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  heroForm!: FormGroup;
  // A Definite Assignment Assertion (!) megmondja a typeScriptnek, hogy
  //ennek a változónak futás közben is lesz értéke.

  constructor(private heroService: HeroService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getHeroes();
    this.creatHeroForm();
  }

  getHeroes(): void {
    this.heroService.getAllHeroes()
      .subscribe(data => this.heroes = data);
  }

  creatHeroForm() {
    this.heroForm = this.fb.group({
      heroName: ['', Validators.required]
    });
  }

  onSubmit() {
    let obj: Hero = {
      name: this.heroForm.value.heroName
    };
    this.heroService.addHero(obj).subscribe(() => {
      this.getHeroes();
    });
    this.heroForm.reset();
  }
}