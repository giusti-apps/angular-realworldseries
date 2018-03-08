import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";
import 'rxjs/add/operator/filter';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() navToggled = new EventEmitter();
  navOpen = false;

  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {
    // If nav is open after routing, close it
    /*Segun entiendo, esto lo que hace es cerrar el nav si quedo abierto.
    Para eso toma el evento del Router NavigationStart 
    y lo subscribe al evento propio toggleNav(),
    siempre y cuando navOpen sea true (o sea que el nav haya quedado abierto)*/

    this.router.events
      .filter(event => event instanceof NavigationStart && this.navOpen)
      .subscribe(event => this.toggleNav());
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
    this.navToggled.emit(this.navOpen);
  }

}