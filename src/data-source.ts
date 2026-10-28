import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "practice",
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    poolSize: 10,
    subscribers: [],
    extra: {
        authPlugin: 'sha256_password',
    }
})
