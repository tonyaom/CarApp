import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError(error => {
      if (error) {
        switch (error.status) {
          case 404:
            toastr.error('Endpoint not found.');
            break;
          case 500:
            toastr.error('Internal server error.');
            break;
          default:
            toastr.error('Unable to connect to the server.');
            break;
        }
      }
      throw error;
    })
  )
};
