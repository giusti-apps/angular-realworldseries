import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/debounceTime";
import { AuthService } from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  navOpen: boolean;
  minHeight: string;
  private _initWinHeight = 0;

  constructor(private auth: AuthService) {
    auth.handleAuth();
  }

  ngOnInit(): void {
    /*Aqui se pone un Observer a la escucha del evento resize del elemento window
    debounceTime es una funcion que sirve para que el evento sea escuchado cada 200 milis
    esto permite un gran ahorro en costos de procesamiento.*/ 
    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe((event) => this._resizeFn(event));

      this._initWinHeight = window.innerHeight;
      this._resizeFn(null);
  }

  /**
   * El metodo navToggledHandler, es el manejador el evento que emitimos en header.component.ts
   * Si nos fijamos en app.component.html veremos que la etiqueta app-header
   * tiene asociado por Event Binding al evento navToggled, que es el evento que creamos
   * en header.component.ts y establece que el manejador de dicho evento sea esta funcion.
   */
  navToggledHandler(e: boolean) {
    this.navOpen = e;
  }

  private _resizeFn(e) {
    const winHeight: number = e ? e.target.innerHeight : this._initWinHeight;
    this.minHeight = `${winHeight}px`;
  }
}
