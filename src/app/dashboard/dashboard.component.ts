import { Component, OnInit } from '@angular/core';
import { AwsCognitoService } from '../service/aws-cognito.service';
import { IdentityService } from '../service/identity.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tokenDetails: any;
  token: any;
  id_token: any;

  constructor(private awsCognitoService: AwsCognitoService, private identityService: IdentityService) { }

  ngOnInit(): void {
    console.log('Token: ', localStorage.getItem('token'));

    this.token = localStorage.getItem('token');

    if (this.token) {
      const base64Url = this.token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      this.tokenDetails = JSON.parse(atob(base64));

      console.log(this.tokenDetails);
    }
  }

  idToken() {
    this.id_token = localStorage.getItem('id_token');
    if (this.id_token) {
      const base64Url = this.id_token.split('.')[1];      
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      this.tokenDetails = JSON.parse(atob(base64));

      console.log('ID Token Detail: ', this.tokenDetails);    
    }
  }

  getId() {  
    console.log('Calling get identity');
    this.id_token = localStorage.getItem('id_token');  
     this.identityService.getIdentityFromCognito(this.id_token).subscribe
      ((response: any) => {
      console.log('Response: ', response);
    })      
  }

  logout(): void {
    window.location.assign(environment.logout);
  }

}
