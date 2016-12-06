//import {computedFrom} from 'aurelia-framework';
import {Configuration} from './configuration';  
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(Configuration, HttpClient)
export class Signin {


  heading = 'Sign in';
  dataUser = [];
  restPath = 'user/session';

  // These view models will be given values
  // from the signup form user input
  email = '';
  password = '';

  // Any signup errors will be reported by
  // giving this view model a value in the
  // catch block within the signup method
  signupError = '';
  firstName = 'John';
  lastName = 'Version2';
  previousValue = this.fullName;
  
  constructor(config1, http) {
		   
        http.configure(config => {
            config
      //      .useStandardConfiguration()
            .withBaseUrl(config1.baseUrl)

            .withDefaults({
               credentials: 'same-origin',
                headers : {
                   'Accept': 'application/json'
                   , 'X-DreamFactory-Api-Key': config1.API_BASE 
                   }

            });
        });
        this.http = http;
    }


  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  //@computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
    signup() {

        // Object to hold the view model values passed into the signup method
        var userInfo = { email: this.email, password: this.password }
		
	 	
        return this.http.fetch(this.restPath, {
            method: 'post',
            body: userInfo
        })
		//.then(response => response.json());
	//	.then(dataUser => this.datauser = dataUser);
	      
        alert(`Welcome, ${this.email}!`);
    };
  submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
