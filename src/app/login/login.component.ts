import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	form: FormGroup;
	user: User;

	constructor(
		private router: Router,
		private fb: FormBuilder
	) { 
		this.user = new User();
	}

	ngOnInit() {
		this.buildForm();
	}

	buildForm(): void {
		this.form = this.fb.group({
			'username': [this.user.username, [Validators.required]],
			'password': [this.user.password, [Validators.required]],
		});
		this.form.valueChanges.subscribe(data => this.onValueChanged(data));
		this.onValueChanged();
	}

	formErrors = {
		'username': '',
		'password': ''
	};

	validationMessages = {
		'email': {
			'required': 'Username is required.',
		},
		'password': {
			'required': 'Password is required.'
		}
	};

	onValueChanged(data?: any) {
		if (!this.form) {
			return;
		}
		const thisForm = this.form;

		for(const field in this.formErrors) {
			// clear previous messages if any
			this.formErrors[field] = '';
			const control = thisForm.get(field);

			if(control && control.dirty && !control.valid) {
				const messages = this.validationMessages[field];
				for(const key in control.errors) {
					this.formErrors[field] += messages[key] + ' ';
				}
			}
		}
	}

	onSubmit(event) {
		if (this.form.valid) {
			let user: any = {
				'email': this.user.username,
				'password': this.user.password
			}
			
			this.router.navigateByUrl(`/dashboard`);
			// this._ls.login(user).then((response) => {
			// 	if (response.status != 200) {
			// 		return alert(`Login Unauthotized !`);
			// 	}
			// 	this.router.navigateByUrl(`/dashboard`);	
			// });
		} else {
			this.onValueChanged();
		}
	}
}

export class User {
    username: string;
    password: string;
}
