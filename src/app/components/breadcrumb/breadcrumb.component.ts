import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  public mostrarTodos = false;
  constructor() { }

  ngOnInit() {

  }

  public toggle() {
    if (!this.mostrarTodos) {
      this.mostrarTodos = true;
    } else {
      this.mostrarTodos = false;

    }
    console.log(this.mostrarTodos);
  }

}
