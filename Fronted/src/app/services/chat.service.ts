import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private apiUrl = `${environment.apiUrl}/api/chats`;

  constructor(private http: HttpClient) {}

  getChats(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addChat(chat: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, chat);
  }
  darLike(chatId: number) {
  return this.http.post(`${this.apiUrl}/${chatId}/like`, {});
}

}
