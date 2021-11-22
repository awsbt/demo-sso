import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class ListObjectsService {

  constructor(private http: HttpClient) { }

  // private getS3Bucket(): any {
  //   const bucket = new S3(
  //     {
  //       accessKeyId: 'ACCESS-KEY-ID',
  //       secretAccessKey: 'SECRET-ACCESS-KEY',
  //       region: 'us-east-1'
  //     }
  //   );

  //   return bucket;
  // }

  public listS3Objects(accessKey: string, secretKey: string, session: string, dept: string) {  
    const bucket = new S3(
           {
             accessKeyId: accessKey,
             secretAccessKey: secretKey,
             sessionToken: session,
             region: 'us-gov-west-1'
           }
    );

    const params = {
      Bucket: dept,
      Prefix: 'legal/legal.txt'
    };

    bucket.listObjects(params, function (err, data) {
      if (err) {
               console.log('There was an error getting your files: ' + err);
               return;
             }
             console.log('Successfully get files.', data);
             return;
    });
  }

    // bucket.listObjects(params, function (err, data) {
    //     if (err) {
    //       console.log('There was an error getting your files: ' + err);
    //       return;
    //     }
    //     console.log('Successfully get files.', data);
    //     return;
    //   });
      

  // public listS3Objects(accessKey: string, secretKey: string): Observable<any> {  
  //   return this.http.get<any>(environment.s3BucketEndPointURL,
  //     {
  //       headers: new HttpHeaders({          
  //         AccessKey: accessKey,
  //         SecretKey: secretKey
  //         })
  //     }).pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     );
  // }  

  // Error handling 
//   handleError(error: any) {
//     let errorMessage = '';
//     if(error.error instanceof ErrorEvent) {
//       // Get client-side error
//       errorMessage = error.error.message;
//     } else {
//       // Get server-side error
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     window.alert(errorMessage);
//     return throwError(errorMessage);
//  }
}
