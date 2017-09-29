import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
contProductos=0;
badgeVisible=false;

  constructor() { }

  ngOnInit() {
    if(this.contProductos==0){
        this.badgeVisible=false;
    }
    else{
          this.badgeVisible=true;
    }
  }
 actualizarContador(){
  this.contProductos=JSON.parse(localStorage.getItem('kart')).length
  if(this.contProductos==0){
      this.badgeVisible=false;
  }
  else{
        this.badgeVisible=true;
  }
 }
}
