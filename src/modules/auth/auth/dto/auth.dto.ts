import { IsPhoneNumber, IsString, Length } from "class-validator";


export class SendOtpDto{
    @IsPhoneNumber("IR")
    mobile:string
}


export class CheckOtpDto{
    @IsPhoneNumber("IR")
    mobile:string

    @IsString()
    @Length(5,5,{message:"incorrect code"})
    code:string
}