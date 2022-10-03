import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "pg_superuser",
    database: "mangaReaderDev",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
});
