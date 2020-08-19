import { Length, IsEmail} from "class-validator"
import { InputType, Field } from "type-graphql";
import { IsEmailAlreadyExist, } from "./IsEmailAlreadyExist";
import { PasswordMixin } from "../../shared/PasswordInput";
import { OkMixin } from "../../shared/OkMixin";

//-----------------------------

// edit ogr.dpu.edu.tr here

//-----------------------------

@InputType()
export class RegisterInput extends OkMixin(PasswordMixin(class {})){

    @Field()
    @Length(2, 30)
    firstName: string

    @Field() 
    @Length(2, 30)
    lastName: string

    @Field() 
    @IsEmail()
    @IsEmailAlreadyExist({ message: "email allready in use"} )
    email: string


}