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
     const url = `${Constants.searchArtWorkURL}?type=${requestObj.type}&name=`+encodeURIComponent(requestObj.value);
     return this.getRequest(url);
  }

  getLatestArtWorks():Observable<any> {
      const url = `${Constants.artworksURL}`;
      return this.getRequest(url);
  }

  addArtWorkObject(artworkObj:any):Observable<any> {
      return this.postRequest(Constants.artworksURL,artworkObj);
  }

  getArtworkById(id:any):Observable<any> {
    const url = `${Constants.artworksURL}/${id}`;
    return this.getRequest(url);
  }

  deleteArtworkById(id:any):Observable<any> {
    const url = `${Constants.artworksURL}/${id}`;
    return this.deleteRequest(url);
 }


/**Private methods **/
  private postRequest(target:string, reqObject:any):Observable<any>{
   return this.http.post(target , reqObject)
      .pipe(
        catchError(this.handleError)
      );
  }

 private getRequest(completeURL):Observable<any>{
   return this.http.get(completeURL)
      .pipe(
        catchError(this.handleError)
      );
  }

 private deleteRequest(completeURL):Observable<any>{
   return this.http.delete(completeURL)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    alert("Some error has occurred, please contact support.");
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
