import * as express from "express";
import * as cors from "cors";
import { tireQuoteVariables } from "../environment/quotation.variables";
import { executeTiresQuote, executeAutoQuote } from "../controller/quote.controller";
import { quote_autoResponse } from "../environment/messenger/messenger.responses";
import { sendQuotationZoho } from "../environment/zoho.flow";


const quote = express();
const router = express.Router();
quote.use(cors({origin: true}));

router.get("/tires", async (request, response) => {
    try {
        console.log(request.path)
        console.log(`TCL: request.query`, request.query);
        const variables = await tireQuoteVariables(request.query);
        const result = executeTiresQuote(variables);
        response.send(result);
    } catch (error) {
        response.send(error)
    };
});

// router.get("/tires/messenger", async (request, response) => {
//     // try {
//     //     console.log(request.path)
//     //     const variables = await tireQuoteVariables(request.query);
//     //     const result = await executeTiresQuote(variables);
//     //     response.send(result);
//     // } catch (error) {
//     //     response.send(error)
//     // };
// });



// ---------- AUTO ----------

router.post("/auto", async (request, response) => {
    interface Result {
        privateApi: Object;
        publicApi: Object
    }
    
    const userInput = request.body;
    console.log(`TCL: userInput`, JSON.stringify(userInput));

    await executeAutoQuote(userInput).then(async (result: Result) => {
        const zoho = sendQuotationZoho(result.privateApi);
        response.send(result.publicApi)
    }).catch(error => {
        response.send(error)
    });
});

router.post("/auto/messenger", async (request, response) => {
    try {
        console.log(request.path)

        interface Result {
            privateApi: Object;
            publicApi: Object
        }
    
        const userInput = request.body;
        if (userInput.thirdPartyCoverage < 100000){
            const thirdParty = ((userInput.thirdPartyCoverage).toString()).slice(0, 2);
            userInput.thirdPartyCoverage = parseInt(thirdParty);
        } else {
            const thirdParty = ((userInput.thirdPartyCoverage).toString()).slice(0, 3);
            userInput.thirdPartyCoverage = parseInt(thirdParty);
        }

        console.log(`TCL: userInput`, JSON.stringify(userInput));

        await executeAutoQuote(userInput).then(async (result: Result) => {
            const zoho = sendQuotationZoho(result.privateApi);
            console.log(result)
            const messengerResponse = quote_autoResponse(result.publicApi);
            response.json(messengerResponse);
        }).catch(error => {
            response.send(error)
        });
    } catch (error) {
        response.send(error)
    };
});

quote.use('/quote', router);
module.exports = quote; 