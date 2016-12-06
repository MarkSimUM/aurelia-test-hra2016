import {Configuration} from './configuration';  
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

//import {HttpClient} from 'aurelia-http-client';
//import 'fetch';

@inject(Configuration, HttpClient)
export class Account {
	
    heading = 'HRA 1.5 DB - DEV testing page version 2';
    dataAcct = [];
    restPath = '_table/core_account?x=1';

    constructor(config1, http) {
	//	this.restPath = this.restPath +  config1.API_HRA ;  
        http.configure(config => {
            config
      //      .useStandardConfiguration()
            .withBaseUrl(config1.baseUrl_HRA)

            .withDefaults({
           //    credentials: 'same-origin'
                headers : {
                  'Accept': 'application/json'
			    //     'Cache-Control': 'no-cache',
			   //       'Accept': '*/*'
             //      , 'X-DreamFactory-Api-Key': config1.API_HRA 
                  }

            });
        });
        this.http = http;
		this.restPath = this.restPath +  '&api_key='+config1.API_HRA ;  
    }

    activate() {
        //_table/core_account/285?related=CORE_ORGANIZATION_by_ACCOUNT_ID
    return this.http.fetch(this.restPath)
           .then(response => response.json())
           .then(dataAcct => this.dataAcct = dataAcct);
    }
}
export class Organization {

    dataOrg = [];

    constructor(http) {
        http.configure(config => {
            config
            .useStandardConfiguration()
            .withBaseUrl('https:///api.hmrc.kines.umich.edu/api/v2/hra15dev/')

            .withDefaults({
                credentials: 'same-origin',
                //   body: 'api_key=430a001fe2957626c3ef6141dfb2e66d31d0ac3674971f636406a83df9b33c76'
                headers: {
                    'Accept': 'application/json',
                    'X-Dreamfactory-API-Key': '28bd704e6982cfa41ffff5239d4e7df5ed3601c01138dc1fbee752dd4408eacb'
                }
            })
        ;
    });

        this.http = http;
    }


    activate() {
        return this.http.fetch('_table/core_organization')
                .then(response => response.json())
                .then(dataOrg => this.dataOrg = dataOrg);
    }
}
