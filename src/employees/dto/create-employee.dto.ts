import {
  IsEmail,
  IsEnum,
  IsMobilePhone,
  MinLength,
  MaxLength,
} from 'class-validator';

export enum GenderType {
  Male = 'M',
  Female = 'F',
}

export class CreateEmployeeDto {
  @MinLength(6)
  @MaxLength(10)
  firstName: string;
  @MinLength(6)
  @MaxLength(10)
  lastName: string;
  @IsEmail()
  email: string;
  @IsMobilePhone('si-LK')
  number: string;
  @IsEnum(GenderType, {
    message: 'gender must be a enum M or F value',
  })
  gender: string;
  photo?: string;
}
