import { IsString, IsPhoneNumber, IsNotEmpty, IsEmail } from 'class-validator';
//
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public first_name: string;

  @IsString()
  @IsNotEmpty()
  public last_name: string;

  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  public phone_number: string;

  // @IsNumber()
  // @IsNotEmpty()
  // public point: number;
}
