import { Resolver, Query, Mutation, Arg } from "type-graphql";

import { Product } from "../entity/Products";

@Resolver()
export class ProductResolver {
  @Mutation(() => Boolean)
  async createProduct(
    @Arg("name") name: string,
    @Arg("quantity") quantity: number
  ) {


   

   // const result=await Product.insert({ name, quantity });
    console.log(Product.insert({name,quantity}));
    

    return true;
  }

  @Query(() => [Product])
  products() {
    return Product.find();
  }
}
