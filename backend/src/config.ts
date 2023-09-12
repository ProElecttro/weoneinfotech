import { DataSource } from "typeorm"
import Tables from "./entities";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Vms@#8843",
    database: "v1infotech",
    synchronize: true,
    logging: true,
    entities: Tables
});

export default AppDataSource;