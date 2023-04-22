import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @IsString({ message: 'Should be a string' })
  @Length(8, 16, { message: 'Longer than 8 and less than 16' })
  readonly password: string;
}
