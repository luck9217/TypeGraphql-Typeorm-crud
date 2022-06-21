# TypeGraphql-Typeorm-crud

Example use Type Graphql , typeORM.

CRUD Simple with mysql database

Playground: [localhost/3005/](http://localhost:3005/graphql)

Querys and Mutation

mutation{
  createProduct(variables:{
    name:"Mouse"
    quantity:3

  } ){
    id
    name
    createdAt
  }
}

mutation{
 deleteProduct(id: 30)
}


mutation{
  updateProduct (id:1, fields:{
    name:"changed"
  }
  )
}


query{
  products {
    id
    name
    quantity
  }
}
