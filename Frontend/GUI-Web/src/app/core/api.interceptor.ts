import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // Chỉ thay thế khi đang gọi localhost
    if (req.url.startsWith('http://localhost:8080')) {

      const apiReq = req.clone({
        url: req.url.replace(
          'http://localhost:8080',
          environment.apiUrl
        )
      });

      return next.handle(apiReq);
    }

    return next.handle(req);
  }
}
