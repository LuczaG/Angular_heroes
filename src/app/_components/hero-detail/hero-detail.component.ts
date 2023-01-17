import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '@app/_models/hero';
import { HeroService } from '@app/_services';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero!: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHeroById();
  }

  getHeroById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroByID(id).subscribe(hero => {
      console.log(hero);
      this.hero = hero;
    });
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(
      () => this.goBack())
    ;
  }

  delete(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    confirm("Are you sure you want to delete this hero?")
    ? this.heroService.deleteHero(id).subscribe(
      () => this.goBack())
    : "";
  }

  goBack(): void {
    this.location.back();
  }
}
