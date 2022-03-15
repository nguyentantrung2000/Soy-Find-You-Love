import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(public http: HttpClient){}
  public async getUser(apiPath:string):Promise<Observable<any>> {
   let result = this.http.get(environment.endpoint+apiPath);
   return result;
  }
  

  public async getLike(apiPath:string):Promise<Observable<any>> {
   let result = this.http.get(environment.endpoint+apiPath);
   return result;
  }
  public async getDisLike(apiPath:string):Promise<Observable<any>> {
    let result = this.http.get(environment.endpoint+apiPath);
    return result;
   }

   
  // public async postData(name:string,pirce:number,photoURL:string,popularity:string,quantity:number,collectionName:string){
  //  return this.http.post(environment.endpoint+'api',{
  //     data:{name:name,
  //    pirce : pirce, photoURL : photoURL,popularity:popularity
  //    ,quantity:quantity},
  //    collectionName:collectionName
  //  });
  // }
  
}
