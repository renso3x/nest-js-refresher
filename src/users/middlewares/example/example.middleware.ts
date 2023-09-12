import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;

    if (!authorization)
      throw new HttpException('No Auth', HttpStatus.FORBIDDEN);
    if (authorization === '12345') {
      next();
    } else {
      throw new HttpException('Invalid', HttpStatus.FORBIDDEN);
    }
  }
}
