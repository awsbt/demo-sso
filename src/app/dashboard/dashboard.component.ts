import { Component, OnInit } from '@angular/core';
import { AwsCognitoService } from '../service/aws-cognito.service';
import { CredentialsService } from '../service/credentials.service';
import { IdentityService } from '../service/identity.service';
import { ListObjectsService } from '../service/list-objects.service';
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
  identityId: any;
  accessKeyId: any;
  secretKey: any;
  session: any;

  constructor(private awsCognitoService: AwsCognitoService, private identityService: IdentityService,
              private credentialsService: CredentialsService, private listObjectsService: ListObjectsService) { }

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
      localStorage.setItem('identityId', response.IdentityId);      
    })      
  }

  getCredentialsForIdentity() {
    console.log('Calling Credentials for Identity');
    this.id_token = localStorage.getItem('id_token'); 
    this.identityId = localStorage.getItem('identityId'); 
     this.credentialsService.getCredentialsFromIdentity(this.id_token, this.identityId).subscribe
      ((response: any) => {
      console.log('Response: ', response);
      localStorage.setItem('AccessKeyId', response.Credentials.AccessKeyId);      
      localStorage.setItem('SecretKey', response.Credentials.SecretKey);  
      localStorage.setItem('SessionToken', response.Credentials.SessionToken);  
    })      
  }

  s3ListObjects() {      
    this.accessKeyId = localStorage.getItem('AccessKeyId');      
    this.secretKey = localStorage.getItem('SecretKey');    
    this.session = localStorage.getItem('SessionToken');    
    this.listObjectsService.listS3Objects(this.accessKeyId, this.secretKey, this.session, 'acme-proj-legal');    
  }

  s3ListObjectsMarketing() {
    this.accessKeyId = localStorage.getItem('AccessKeyId');      
    this.secretKey = localStorage.getItem('SecretKey');    
    this.session = localStorage.getItem('SessionToken');    
    this.listObjectsService.listS3Objects(this.accessKeyId, this.secretKey, this.session, 'acme-proj-marketing');    
  }

  s3GetObject() {
    
  }

  logout(): void {
    window.location.assign(environment.logout);
  }

}
