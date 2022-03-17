import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(public http: HttpClient) {}

  //get Userall
  public async getUser(apiPath: string): Promise<Observable<any>> {
    let result = this.http.get(environment.endpoint + apiPath);
    return result;
  }

  ///get UserWithId
  public UserWithId(params: string) {
    return this.http.get(environment.endpoint + `user/${params}`);
  }
  public async UpdateUserLocation(
    collectionName: string,
    docId: string,
    Location: { lat: string; long: string }
  ) {
    return this.http.post(environment.endpoint + 'user/location', {
      data: {
        collectionName: collectionName,
        docId: docId,
        Location: Location,
      },
    });
  }
  /// Post Like
  public async LikeService(
    collectionName: string,
    docId: string | undefined,
    docIDs: string
  ) {
    return this.http.post(environment.endpoint + 'user/likelist', {
      data: {
        collectionName: collectionName,
        docId: docId,
        docIDs: docIDs,
      },
    });
  }
  public async UnLikeService(
    collectionName: string,
    docId: string | undefined,
    docIDs: string
  ) {
    return this.http.post(environment.endpoint + 'user/unlikelist', {
      data: {
        collectionName: collectionName,
        docId: docId,
        docIDs: docIDs,
      },
    });
  }

  public async UpdateData(
    collectionName: string,
    docId: string,
    gioitinh: string,
    noio: string,
    ngaysinh: string,
    sothich: []
  ) {
    return this.http.put(environment.endpoint + '/user/update', {
      data: {
        gioitinh: gioitinh,
        noio: noio,
        ngaysinh: ngaysinh,
        sothich: sothich,
      },
      collectionName: collectionName,
      docId: docId,
    });
  }
  // public async postData(name:string,pirce:number,photoURL:string,popularity:string,quantity:number,collectionName:string){
  //  return this.http.post(environment.endpoint+'api',{
  //     data:{name:name,
  //    pirce : pirce, photoURL : photoURL,popularity:popularity
  //    ,quantity:quantity},
  //    collectionName:collectionName
  //  });
  // }

  public async getChatList(params: any) {
    console.log(params);
    let res =  await this.http.get(
      environment.endpoint + `user/conversation/${params}`
    );
    return res;
  }
}
