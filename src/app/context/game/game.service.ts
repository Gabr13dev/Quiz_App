import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ErrorHandler } from 'src/app/app.error-handler'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './game.model';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${environment.BASE_API}/api/Game/`)
      .pipe(
        catchError((ErrorHandler.handleError))
      );
  }

}
