import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  constructor() { }

  heroForm = new FormGroup({
    name: new FormControl('')
  });


  hero: Hero;

  onSubmit() {
    this.hero = {
      id: null,
      name: this.heroForm.value['name'],
      createdOn: new Date().toLocaleDateString(),
      lastModifiedOn: new Date().toLocaleDateString(),
    };

    console.log(this.hero);
  }

  ngOnInit(): void {
  }

}
