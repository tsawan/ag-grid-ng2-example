import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AppComponent} from './app.component';
import {SlateComponent} from './Slate';

@Component({
    selector: 'main-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h1> AG-Grid / Angular-2 router Test App </h1> 
    <a [routerLink]=" ['SlateComponent'] ">Order</a>
    <a [routerLink]=" ['AppComponent'] ">Grid</a>
    <router-outlet></router-outlet>
    <br>
    <hr>
    <br>
    `
 })
@RouteConfig([
		{ path: '/', component: SlateComponent, name: 'SlateComponent' },
		{ path: '/app', component: AppComponent, name: 'AppComponent' },
		{ path: '/slate', component: SlateComponent, name: 'SlateComponent' }
])

export class MainComponent {

	constructor() { 
		console.log('MC CtoR'); 
    }

}