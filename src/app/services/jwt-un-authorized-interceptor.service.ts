import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { JwtInterceptorService } from './jwt-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class JwtUnAuthorizedInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(tap
      ((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do something in case of success. For now no action is needed!
        }
      },
        (error: any) => {
          if (error.status == 401) {
            console.log(error);
            alert("401 Unathorized")
          };
        }
      ));
  }
}
