import {DataSource} from 'typeorm';
import path from 'path'


//typeorm config
export const connectDB = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "usersdb",
    entities: [
        path.join(__dirname, '../entity/**/**.ts')
    ],
    synchronize: true, //review changes and upload
    logging: true,// information log
    ssl:false //connection secure

    //fix connection with mysql
    // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin';
    // flush privileges;
})