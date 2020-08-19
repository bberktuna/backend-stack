import { Resolver, Query, Ctx } from "type-graphql"

import { User } from "../../entity/User"
import { MyContext } from "../../types/MyContext"


@Resolver()
export class MeResolver {

    @Query(() => User, {nullable: true})
    async me(@Ctx() ctx: MyContext) {
        if (!ctx.req.session!.userId){
            return undefined
        }
        return User.findOne(ctx.req.session!.userId)
    }
}
    