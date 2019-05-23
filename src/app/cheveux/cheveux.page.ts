import { Component, OnInit } from '@angular/core';
import { NavExtraService } from '../nav-extra.service';

@Component({
  selector: 'app-cheveux',
  templateUrl: './cheveux.page.html',
  styleUrls: ['./cheveux.page.scss'],
})
export class CheveuxPage implements OnInit {

  data: Array<String>;
  constructor(private navExtra : NavExtraService) { 
    this.data = this.navExtra.getExtras();
    console.log(this.data);
  }

  ngOnInit() {
  }

}
