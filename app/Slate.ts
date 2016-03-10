import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'slate',
    templateUrl: 'app/slate.html'
 })
export class SlateComponent {

	constructor(private router: Router) {}

	move() {
		try {
		this.router.navigate(['/AppComponent']);
		}
		catch (e) { console.error('swalloed dehyd');}
	}
}