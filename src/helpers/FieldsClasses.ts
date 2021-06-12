import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
export class ProductType {

    @Field(() => String)
    nombre!: string

    @Field(() => Int)
    precio!: number

    @Field(() => Int)
    cantidad!: number

    @Field(() => Date)
    fechaCreacion!: Date
}