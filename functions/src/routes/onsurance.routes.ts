// import * as express from "express";
// import * as cors from "cors";
// import { getProtectionVariables } from "../environment/messenger";
// import { userProfileDbRefRoot } from "../database/customer.database";
// import { getDatabaseInfo, updateDatabaseInfo } from "../model/databaseMethods";
// import { checkMessengerId } from "../model/errors";

// const onsurance = express();
// // Automatically allow cross-origin requests
// onsurance.use(cors({ origin: true }));
// // onsurance.use(authMiddleware);

// onsurance.get(`/messenger`, async (request, response) => {
//     try {
//         console.log(request.path);
//     } catch (error) {
//         const resp = require('../environment/responses.messenger');
//         if (error.status) response.status(error.status).send(resp[error.callback](error.variables));
//         response.send(error);
//     };
// });

// module.exports = onsurance;