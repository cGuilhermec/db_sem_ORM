import { createConnection } from "../../database/connection";


const findUser = async () => {

    const client = await createConnection();

    client.query(
        'SELECT access.name FROM user'
    );
};
