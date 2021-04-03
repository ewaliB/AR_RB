import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { Constants } from 'src/app/Constants';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http: HttpClient) { }

  searchArtWork(requestObj:any):Observable<any> {
      return this.postRequest(Constants.searchArtWorkURL,requestObj);
  }

  getLatestArtWorks():Observable<any> {
      //return this.postRequest(Constants.latestArtworksURL,{});
      return this.http.get( "assets/data/artworkData.json");
  }

  addArtWorkObject(artworkObj:any):Observable<any> {
      return this.postRequest(Constants.addArtWorkObjURL,artworkObj);
  }

  private postRequest(target:string, reqObject:any):Observable<any>{
   return this.http.post(target , reqObject)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
