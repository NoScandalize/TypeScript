import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect() {

    const dbUri = config.get<string>("dbUri");

    try {

        await mongoose.connect(dbUri)
        Logger.info("Conexão com o banco de dados realizada com sucesso!")

    } catch(error) {
        Logger.error("Não foi possível conectar ao Banco de dados.")
        Logger.error(`Erro:  ${error}`)
        process.exit(1);
    }

}

export default connect;
