import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero';
import { HeroService } from 'src/app/services/hero-service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroForm = new FormGroup({
    name: new FormControl('')
  });


  savedHero: Hero;

  onSubmit() {
    const hero = {
      name: this.heroForm.value['name'],
    };

    this.heroService.addHero(hero).subscribe(hero => this.savedHero = hero);
    console.log(this.savedHero);
  }

  ngOnInit(): void {
  }

}
