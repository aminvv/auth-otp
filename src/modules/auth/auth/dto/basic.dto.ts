import { IsEmail, IsMobilePhone, IsString } from "class-validator";
import { ConfirmedPassword } from "src/common/typeDefination/decorator/confirm-password.decorator";

export class SignupDto{
    @IsString()
    first_name:string

    @IsString()
    last_name:string


    @IsString()
    email:string

    @IsMobilePhone()
    mobile:string

    @IsString()
    password:string

    @IsString()
    @ConfirmedPassword("password")
    confirm_password:string



}

export class LoginDto{
    @IsEmail()
    @IsString()
    email:string

    @IsString()
    password:string 
}