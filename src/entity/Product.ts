import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Product extends BaseEntity{
    //baseentity lets us use user.find or user.create

    
    @Field(() => ID)//able to query
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;


}