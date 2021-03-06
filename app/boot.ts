import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
//import {AppComponent} from './app.component'
import {MainComponent} from './MainComponent';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

bootstrap(MainComponent, [...ROUTER_PROVIDERS,
	provide(LocationStrategy, { useClass: HashLocationStrategy })
	]);
