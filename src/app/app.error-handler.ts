import { Observable, throwError } from 'rxjs'
import { Router } from "@angular/router"
import { HttpErrorResponse } from '@angular/common/http'

export class ErrorHandler{

  constructor(private router: Router) { }

  static handleError(error: Response | any){
    let errorMessage: string
    if(error instanceof HttpErrorResponse){
      errorMessage = `Erro ${error.status} ao acessar URL ${error.url} - ${error.statusText}`
    }
    else{
      errorMessage = `${error.toString()}`
    }
    console.error(error)
    return throwError(() => new Error(error.message))
  }
}
