import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  changePageCheveux(){
    this.router.navigate(['/cheveux']);
  }

  changePageVisage(){
    this.router.navigate(['/visage']);
  }

  changePageCorps(){
    this.router.navigate(['/corps']);
  }
}
