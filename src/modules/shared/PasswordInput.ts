import { InputType, Field, ClassType } from "type-graphql";
import { MinLength, MaxLength} from "class-validator"

//-----------------------------

// edit ogr.dpu.edu.tr here

//-----------------------------

export const PasswordMixin = <T extends ClassType>(BaseClass: T) => {

@InputType({isAbstract: true})
class PasswordInput extends BaseClass{

    @Field()
    @MinLength(5)
    @MaxLength(32)
    password: string
}
 return PasswordInput
}