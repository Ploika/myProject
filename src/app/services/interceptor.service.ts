import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const clone = req.clone({
      headers: new HttpHeaders({
        'Authorization': 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDM2NzExNjE2N2E5M2FlMGYwMTI0OTg3NGFlN2M5YiIsInN1YiI6IjYwYzQ3MzFkYTc2YWM1MDA2ZDlkYWJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tkk18zoAJFQ3B1KaLbwGeUetNCFnSLjaDgshpE8Sy9M'
      })
    })

    return next.handle(clone)
  }
}

