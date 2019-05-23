import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavExtraService } from '../nav-extra.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  data = new Array<String>();
  constructor(private router: Router, private navExtra : NavExtraService ) { }

  ngOnInit() {
  }

  changePageCheveux(){
    this.data.push("Cheveux");
    this.navExtra.setExtras(this.data);
    this.router.navigate(['/cheveux']);
  }

  changePageVisage(){
    this.data.push("Visage");
    this.navExtra.setExtras(this.data);
    this.router.navigate(['/visage']);
  }

  changePageCorps(){
    this.data.push("Cheveux");
    this.navExtra.setExtras(this.data);
    this.router.navigate(['/corps']);
  }
}
