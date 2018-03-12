import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable }                   from 'rxjs/Observable';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	constructor(
		private router: Router,
		private route: ActivatedRoute,
	) { }
	expression(){
		this.router.navigate(['/register'],{relativeTo: this.route});
	}
	ngOnInit() { }
}