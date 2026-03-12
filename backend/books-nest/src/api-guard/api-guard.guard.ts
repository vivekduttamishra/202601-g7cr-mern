import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiKeyValidatorService } from 'src/api-key-validator/api-key-validator.service';

@Injectable()
export class ApiGuardGuard implements CanActivate {

  constructor(private apiKeyValidator:ApiKeyValidatorService){}


  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request=context.switchToHttp().getRequest()
    const apiKey= request.headers["api-key"]
    

    return this.apiKeyValidator.isKeyPresent(apiKey);
  }
}
