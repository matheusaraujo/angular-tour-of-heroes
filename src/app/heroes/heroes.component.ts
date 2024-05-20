import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-heroes",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: "./heroes.component.html",
  styleUrl: "./heroes.component.css",
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
