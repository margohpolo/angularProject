import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { FTAuthInterceptor } from './ft-auth.interceptor';
import { FTHttpErrorInterceptor } from './ft-httperrorinterceptor.service';

export const FTauthInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: FTAuthInterceptor,
    multi: true },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: FTHttpErrorInterceptor,
    multi:true
  }
];
