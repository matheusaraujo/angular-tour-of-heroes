import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";

@Component({
  selector: "app-heroes",
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailComponent],
  templateUrl: "./heroes.component.html",
  styleUrl: "./heroes.component.css",
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
