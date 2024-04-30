import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  actions: Array<any> = [
    {title: "Home", "route": "/home", "icon": "home"},
    {title: "Products", "route": "/products", "icon": "store"},
    {title: "New Product", "route": "/newProduct", "icon": "add"}
  ];
  currentAction: any;

  setCurrentAction(action: any) {
    this.currentAction = action;
  }
}
