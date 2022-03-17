import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public http: HttpClient ) { }

  public async sendMess(converId: any, data: any){
    return await this.http.post(environment.endpoint + 'user/conversation', {converId: converId, messData: data}).subscribe();
  }
}
