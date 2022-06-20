import { Resolver, Query, Mutation, Arg, InputType, Field, Int } from "type-graphql";

import { Product } from "../entity/Products";

@InputType()
class ProductInput {
  @Field()
  name!: string;

  @Field(() => Int)
  quantity!: number;
}

@Resolver()
export class ProductResolver {
  @Mutation(() => Boolean)
  async createProduct(
    @Arg("name") name: string,
    @Arg("quantity") quantity: number
  ) {
    const result = Product.insert({ name, quantity });


    console.log(result);

    return true;
  }

  @Query(() => [Product])// add @field to entity to relationaty input on query
  products() {
    return Product.find();
  }
}
