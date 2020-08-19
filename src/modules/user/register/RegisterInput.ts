import { Length, IsEmail} from "class-validator"
import { InputType, Field } from "type-graphql";
import { IsEmailAlreadyExist, } from "./IsEmailAlreadyExist";

//-----------------------------

// edit ogr.dpu.edu.tr here

//-----------------------------

@InputType()
export class RegisterInput {

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

    @Field()
     password: string
}