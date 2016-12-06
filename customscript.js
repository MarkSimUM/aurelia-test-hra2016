import {Configuration} from './configuration';  
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
//import 'fetch';

@inject(Configuration, HttpClient)
export class Test {
    heading = 'Test DF Script';
    dataResult =0;
    restPath = 'testscript';

    constructor(config1, http) {
        http.configure(config => {
            config
            .useStandardConfiguration()
            .withBaseUrl('https://api.hmrc.kines.umich.edu/api/v2/')

             .withDefaults({
               credentials: 'same-origin',
                headers : {
                   'Accept': 'application/json'
                   , 'X-DreamFactory-Api-Key': config1.API_HRA 
                   }

            });
            ;
    });

        this.http = http;
    }


    activate() {
      
    return this.http.fetch(this.restPath)
           .then(response => response.json())
           .then(dataResult => this.dataResult = dataResult);
    }
}
