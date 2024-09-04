import { registerDecorator, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface, ValidatorOptions } from "class-validator";


export function ConfirmedPassword( property:string,validatorOption?:ValidatorOptions){
return (object:any,propertyName:string)=>{
registerDecorator({
    target:object.constructor,
    propertyName,
    options:validatorOption,
    constraints:[property ,],
    validator:ConfirmPasswordConstraint
})
}
}




@ValidatorConstraint({
    name:"ConfirmedPassword",
    async:false
})


export class ConfirmPasswordConstraint implements ValidatorConstraintInterface{
    validate(value: any, args?: ValidationArguments) {
        const {object ,constraints}=args
        const[relatedPropertyName]=constraints
        const relatedValue=object[relatedPropertyName]
        return value === relatedValue 
    }
        defaultMessage(args: ValidationArguments):string {
          return "password and confirm password should be equals "
    }
}


