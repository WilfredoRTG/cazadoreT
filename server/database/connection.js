import dotenv from "dotenv";
dotenv.config()

import mysql2 from 'mysql2/promise';


export const db = await mysql2.createConnection(
    {
        host: "mysql", 
        user: "root",
        password: "cazadores",
        database: "cazadoresTalento",
        port: "3306"
    }
);