import {Configuration} from './configuration';  
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
//import 'fetch';

@inject(Configuration, HttpClient)
export class Users {
    heading = 'Survey Gizmo';
    data = [];
    restPath = '';
    constructor(config1, http) {
        http.configure(config => {
            config
            .useStandardConfiguration()
            .withBaseUrl(config1.baseUrl_SG)
            .withDefaults({
                credentials: 'same-origin',
                headers: {
                    'Accept': 'application/json',
                    'X-Dreamfactory-API-Key': config1.API_SG
                }
            })
            ;
    });

        this.http = http;
    }


    activate() {
    //return this.http.fetch('2507252')
      return this.http.fetch(this.restPath)
           .then(response => response.json())
           .then(data => this.data = data);
    }
}
