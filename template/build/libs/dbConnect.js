import mongoose from "mongoose";
import chalk from "chalk";
export const connectDB = (uri) => {
    mongoose
        .connect(uri, { dbName: "test" })
        .then((c) => console.log(chalk.bgGreen(`Db connected to ${c.connection.host}`)))
        .catch((err) => console.log(chalk.redBright(err)));
};
