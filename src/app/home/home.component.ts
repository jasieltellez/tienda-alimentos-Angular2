import { Component, OnInit} from '@angular/core';
import {NavBarComponent} from '../nav-bar/nav-bar.component'
import {CatalogoComponent} from '../catalogo/catalogo.component'
import {ProdDetailsComponent} from '../prod-details/prod-details.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
catalogoVisible=true;
detailsVisible=false;
cartVisible=false;

  constructor() { }

  ngOnInit() {
  }





changeVisibility()
{
this.catalogoVisible=!this.catalogoVisible;
this.detailsVisible=!this.detailsVisible;
}
}
