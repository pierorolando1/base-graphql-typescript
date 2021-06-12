import { Resolver, Query, Mutation, Arg, ObjectType, Field } from 'type-graphql'
import { ProductType } from '../helpers/FieldsClasses'
import { Product } from '../models/Product.model'


@Resolver()
export class ProductResolver {

    @Mutation(() => ProductType)
    async createProduct(
        @Arg("nombre") nombre: string,
        @Arg("cantidad") cantidad: number,
        @Arg("precio") precio: number,
    ) {
        const product = new Product({ nombre, cantidad, precio })
        await product.save()

        return product
    }

    @Query(() => [ProductType])
    async getProducts() {
        return await Product.find()
    }

}