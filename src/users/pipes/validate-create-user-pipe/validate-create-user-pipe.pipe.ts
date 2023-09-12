import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateCreateUserPipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('validatecreate user pipe');
    console.log(value);
    console.log(metadata);
    return value;
  }
}
