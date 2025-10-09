/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { request } from 'supertest';
/* eslint-disable @typescript-eslint/no-unused-vars */

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request  = context.switchToHttp().getRequest();
    const authHeader = request.headers["authorization"];
    return authHeader === "Bearer my-secret-token" ;
  }
}
