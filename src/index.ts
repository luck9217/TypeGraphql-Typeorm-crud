import "reflect-metadata";

import { startServer } from "./app";
import { connectDB } from "./config/typeorm";

async function main() {


    try {
        connectDB.initialize;
        console.log("Database is connected")
    
        const app = await startServer();
        app.listen(3005);
        console.log("Server on port 3005");
        
    } catch (error) {
        console.log(error)
        
    }

}

main();