import { IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(4, { message: 'username must be more then 4 symbols' })
  username: string;

  @IsEmail()
  email: string;

  @MinLength(8, { message: 'password must be more then 8 symbols' })
  password: string;
}
