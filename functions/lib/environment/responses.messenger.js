"use strict";
// request.query comes from get
// request.body comes from post
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
    RESPONSES
    TODO:
        create a chatfuel block for every response
        Fix the quick replies
*/
exports.singleDeactivation = variables => {
    const singleDeactivation = {
        "messages": [
            {
                "text": `Sua proteção ${variables.protectionOff} está desligada!`
            }
        ],
        "set_attributes": {
            "status-protecao": variables.statusProtection,
            "user-credit": variables.newSwitch,
            "valorconsumido": variables.consumedSwitch,
            "dias": variables.days,
            "horas": variables.hours,
            "minutos": variables.minutes,
            "segundos": variables.seconds
        },
        "redirect_to_blocks": [
            `Pos Off`
        ]
    };
    return singleDeactivation;
};
exports.deactivationSuccessful = variables => {
    const deactivationSuccessful = {
        "messages": [
            {
                "text": "Sua proteção está desligada!"
            }
        ],
        "set_attributes": {
            "status-protecao": variables.statusProtection,
            "user-credit": variables.newSwitch,
            "valorconsumido": variables.consumedSwitch,
            "dias": variables.days,
            "horas": variables.hours,
            "minutos": variables.minutes,
            "segundos": variables.seconds
        },
        "redirect_to_blocks": [
            `Pos Off`
        ]
    };
    return deactivationSuccessful;
};
exports.deactivationActivation = variables => {
    const deactivationActivation = {
        "messages": [
            {
                "text": `Sua proteção ${variables.protectionOff} está desligada!`
            },
            {
                "text": `Sua proteção ${variables.protectionOn} está ligada!`
            }
        ],
        "set_attributes": {
            "status-protecao": variables.statusProtection,
            "user-credit": variables.newSwitch,
            "valorconsumido": variables.consumedSwitch,
            "dias": variables.days,
            "horas": variables.hours,
            "minutos": variables.minutes,
            "segundos": variables.seconds
        },
        "redirect_to_blocks": [
            `Pos Off`
        ]
    };
    return deactivationActivation;
};
exports.activationSuccessful = variables => {
    console.log("TCL: variables.protectionOn", variables.protectionOn);
    const activationSuccessful = {
        "messages": [
            {
                "text": `Sua proteção está ligada!`
            }
        ],
        "set_attributes": {
            "status-protecao": variables.statusProtection,
        },
        "redirect_to_blocks": [
            `Desligar`
        ]
    };
    return activationSuccessful;
};
exports.firstActivation = (variables) => __awaiter(void 0, void 0, void 0, function* () {
    const firstActivation = {
        "messages": [
            {
                "text": "Muito bom {{first name}}. Agora você é oficialmente parte da Onsurance."
            },
            {
                "text": "A proteção do veículo {{itemInUse}} está ativada."
            },
        ],
        "set_attributes": {
            "status-protecao": variables.statusProtection,
        },
        "redirect_to_blocks": [
            `firstActivation`
        ]
    };
    return firstActivation;
});
exports.noChangeAllOff = variables => {
    const noChangeAllOff = {
        "messages": [
            {
                "text": "Olá {{first name}}. Não houve alteração na proteção do seu {{itemInUse}}. Atualmente ela está desligada."
            },
        ],
        "set_attributes": {
            "status-protecao": "OFF",
        },
        "redirect_to_blocks": [
            `Ligar`
        ]
    };
    return noChangeAllOff;
};
exports.noChangeAllOn = variables => {
    const noChangeAllOff = {
        "messages": [
            {
                "text": "Olá {{first name}}. Não houve alteração na proteção do seu {{itemInUse}}. Atualmente ela está ligada."
            },
        ],
        "set_attributes": {
            "status-protecao": "ON",
        },
        "redirect_to_blocks": [
            `Ligar`
        ]
    };
    return noChangeAllOff;
};
exports.noChange = variables => {
    const noChangeAllOff = {
        "messages": [
            {
                "text": "Olá {{first name}}. Não houve alteração na proteção do seu {{itemInUse}}."
            },
            {
                "text": `Atualmente ${variables.statusProtection.on.join(", ")} está(ão) ligada(s) e ${variables.statusProtection.off.join(", ")} está(ão) desligada(s).`
            },
        ],
        "set_attributes": {
            "status-protecao": "ON",
        },
        "redirect_to_blocks": [
            `Ligar`
        ]
    };
    return noChangeAllOff;
};
exports.noUserProfile = variables => {
    const noUserProfile = {
        "messages": [
            {
                "text": "Olá {{first name}}. Não conseguimos encontrar seu perfil em nosso sistema. Por favor, verifique se seu email está correto."
            },
            {
                "text": `Verifique também, se ${variables.userEmail} é o mesmo email que foi usado na compra dos créditos em nosso site.`
            },
        ],
        "redirect_to_blocks": [
            `Informar Email`
        ]
    };
    return noUserProfile;
};
exports.noOnboard = variables => {
    const noOnboard = {
        "messages": [
            {
                "text": "Olá {{first name}}. Parece que seu primeiro onboard ainda não foi realizado em nosso sistema."
            },
            {
                "text": `Verifique se seus dados foram aprovados.`
            },
            {
                "text": `Caso todos os passos acima já tenham sido realizados, contate nossos especialista que rapidamente seu problema será resolvido. Agoradecemos a compreensão.`
            },
        ],
        "redirect_to_blocks": [
            `Informar Dados`
        ]
    };
    return noOnboard;
};
exports.firstAccess = variables => {
    const firstAccess = {
        "messages": [
            {
                "text": "Opaa! Verificamos os dados com sucesso."
            },
            {
                "text": "Agora está tudo pronto para acessar o Onsurance para o seu veículo."
            },
        ],
        "set_attributes": {
            "car-model": variables.itemModel,
            "car-brand": variables.itemBrand,
        },
        "redirect_to_blocks": [
            `welcome`
        ]
    };
    return firstAccess;
};
exports.alreadyDidFirstAccess = variables => {
    const noOnboard = {
        "messages": [
            {
                "text": "Opaa! Notamos que você já realizou o primeiro acesso à sua conta."
            },
            {
                "text": `Seu perfil já está apto para utilizar normalmente a proteção Onsurance.`
            },
            {
                "text": `Caso haja algum problema, contate nossos especialista que rapidamente seu problema será resolvido. Agoradecemos a compreensão.`
            },
        ],
        "redirect_to_blocks": [
            `Ligar`
        ]
    };
    return noOnboard;
};
exports.noItemInUse = variables => {
    const noItemInUse = {
        "messages": [
            {
                "text": `Olá {{first name}}. Não encontramos o veículo ${variables.itemInUse} em seu perfil.`
            },
            {
                "text": `Verifique se seus dados foram aprovados e seu veículo cadastrado. Caso não seja o dono do item, verifique se o acesso foi liberado para o seu perfil.`
            },
            {
                "text": `Caso todos os passos acima já tenham sido realizados, contate nossos especialista que rapidamente seu problema será resolvido. Agoradecemos a compreensão.`
            },
        ],
        "redirect_to_blocks": [
            `changeItem`
        ]
    };
    return noItemInUse;
};
exports.noItemProfile = variables => {
    const noItemProfile = {
        "messages": [
            {
                "text": `Olá {{first name}}. Não encontramos o veículo ${variables.itemInUse} em nosso sistema.`
            },
            {
                "text": `Verifique se seus dados foram aprovados e seu veículo cadastrado.`
            },
            {
                "text": `Caso todos os passos acima já tenham sido realizados, contate nossos especialista que rapidamente seu problema será resolvido. Agoradecemos a compreensão.`
            },
        ],
        "redirect_to_blocks": [
            `changeItem`
        ]
    };
    return noItemProfile;
};
exports.noItemAccess = variables => {
    const noItemAccess = {
        "messages": [
            {
                "text": `Oooops. Você não tem permissão para gerenciar a proteção deste veículo. Entre em contato com o proprietário.`,
                "quick_replies": [
                    {
                        "title": "Entrar em contato",
                        "block_names": ["Human interaction"]
                    },
                    {
                        "title": "Trocar de veículo",
                        "block_names": ['changeItem']
                    }
                ]
            },
            {
                "text": `Caso todos os passos acima já tenham sido realizados, contate nossos especialista que rapidamente seu problema será resolvido. Agoradecemos a compreensão.`
            },
        ],
    };
    return noItemAccess;
};
exports.noOwnerCredit = variables => {
    /*
        TODO:
            Send response to owner message account


    */
    const noOwnerCredit = {
        "messages": [
            {
                "text": `Olá {{first name}}. Infelizmente não podemos ativar a proteção para o o veículo {{itemInUse}}.`
            },
            {
                "text": `O proprietário do veículo não possui saldos suficiente.`
            },
            {
                "text": `Caso já tenha efetuado a recarga, contate nossos especialista que rapidamente seu problema será resolvido. Agoradecemos a compreensão.`
            },
        ],
        "redirect_to_blocks": [
            `littleCredit`
        ]
    };
    return noOwnerCredit;
};
exports.noUserCredit = variables => {
    const noUserCredit = {
        "messages": [
            {
                "text": `Olá {{first name}}. Infelizmente não podemos ativar a proteção para o o veículo {{itemInUse}}.`
            },
            {
                "text": `Você não possui saldos suficiente. Seu saldo atual é: R$${variables.userCredit}`
            },
            {
                "text": `Caso já tenha realizado a recarga, verifique se o pagamento já foi confirmado. Caso já tenha, contate nossos especialista que rapidamente seu problema será resolvido. Agoradecemos a compreensão.`
            },
        ],
        "redirect_to_blocks": [
            `littleCredit`
        ]
    };
    return noUserCredit;
};
exports.noWallet = variables => {
    const noWallet = {
        "messages": [
            {
                "text": `Não encontramos sua carteira de créditos em nosso sistema.`
            },
            {
                "text": `Você já realizou a compra dos créditos em nosso site?`
            },
            {
                "text": `Caso já tenha realizado a compra, verifique se o pagamento já foi confirmado. Caso já tenha, contate nossos especialista que rapidamente seu problema será resolvido. Agoradecemos a compreensão.`
            },
        ],
        "redirect_to_blocks": [
            `littleCredit`
        ]
    };
    return noWallet;
};
exports.noClientId = variables => {
    const noClientId = {
        "messages": [
            {
                "text": `Não encontramos o identificador da sua compra feita em nosso sistema.`
            },
            {
                "text": `Você já realizou a compra dos créditos em nosso site?`
            },
            {
                "text": `Caso já tenha realizado a compra, verifique se o pagamento já foi confirmado. Caso já tenha, contate nossos especialista que rapidamente seu problema será resolvido. Agoradecemos a compreensão.`
            },
        ],
        "redirect_to_blocks": [
            `littleCredit`
        ]
    };
    return noClientId;
};
exports.noItemToGiveAccess = variables => {
    const noItemInUse = {
        "messages": [
            {
                "text": `Olá {{first name}}. Não encontramos o veículo ${variables.itemInUse} em seu perfil.`
            },
            {
                "text": `Verifique se seus dados foram aprovados e seu veículo cadastrado.`
            },
            {
                "text": `Caso todos os passos acima já tenham sido realizados, contate nossos especialista que rapidamente seu problema será resolvido. Agoradecemos a compreensão.`
            },
        ],
        "redirect_to_blocks": [
            `giveAccess`
        ]
    };
    return noItemInUse;
};
exports.noPermissionToGiveAccess = variables => {
    const noPermissionToGiveAccess = {
        "messages": [
            {
                "text": `Oooops. Você não tem permissão para liberar o acesso deste veículo.`,
                "quick_replies": [
                    {
                        "title": "Entrar em contato",
                        "block_names": ["Human Interaction"]
                    },
                    {
                        "title": "Trocar de veículo",
                        "block_names": ['changeItem']
                    },
                    {
                        "title": "Menu de Opções",
                        "block_names": ['Menu de opções']
                    },
                ]
            },
        ]
    };
    return noPermissionToGiveAccess;
};
exports.noAccessToSelf = variables => {
    const noAccessToSelf = {
        "messages": [
            {
                "text": `Oooops. Você não pode dar acesso a sí mesmo hehe.`,
                "quick_replies": [
                    {
                        "title": "Entrar em contato",
                        "block_names": ["Human Interaction"]
                    },
                    {
                        "title": "Dar acesso",
                        "block_names": ['giveAccess']
                    },
                    {
                        "title": "Menu de Opções",
                        "block_names": ['Menu de opções']
                    },
                ]
            },
        ]
    };
    return noAccessToSelf;
};
exports.userAlreadyHavePermission = variables => {
    const userAlreadyHavePermission = {
        "messages": [
            {
                "text": `Oooops. O usuário já tem permissão para gerenciar a proteção deste veículo.`,
            },
            {
                "text": `Agora só falta compartilhar com ${variables.thirdPartyEmail} para que vocês consigam proteger o veículo ${variables.itemToAccess} `,
                "quick_replies": [
                    {
                        "title": "Entrar em contato",
                        "block_names": ["Human Interaction"]
                    },
                    {
                        "title": "Dar acesso para outro veículo",
                        "block_names": ['giveAccess']
                    },
                    {
                        "title": "Compartilhar acesso",
                        "block_names": ['shareAccess']
                    },
                    {
                        "title": "Menu de Opções",
                        "block_names": ['Menu de opções']
                    },
                ]
            },
        ],
    };
    return userAlreadyHavePermission;
};
exports.userUsingDiffMessenger = variables => {
    const userUsingDiffMessenger = {
        "messages": [
            {
                "text": `Opa!!! Essa conta de email já está vinculada a outro messenger.`
            },
            {
                "text": `Por favor, contate nossos especialistas para que possamos resolver este problema juntos.`
            },
            {
                "text": "O que deseja fazer?",
                "quick_replies": [
                    {
                        "title": "Falar com Especialista",
                        "block_names": ["Human interaction"]
                    },
                    {
                        "title": "Menu de Opções",
                        "block_names": ["Menu de opções"]
                    },
                    {
                        "title": "Indicar a Onsurance",
                        "block_names": ["Referer"]
                    },
                    {
                        "title": "Conhecer a Onsurance",
                        "block_names": ["PRON"]
                    },
                ]
            },
        ]
    };
    return userUsingDiffMessenger;
};
exports.giveAccessMessenger = variables => {
    const giveAccessMessenger = {
        "messages": [
            {
                "text": `Acesso concedito com sucesso!`
            },
            {
                "text": `Só falta que o usuário ${variables.thirdPartyEmail} acesse em sua conta do messenger.`
            },
        ],
        "redirect_to_blocks": [
            `shareAccess`
        ]
    };
    return giveAccessMessenger;
};
exports.giveAccessNoMessenger = variables => {
    const giveAccessNoMessenger = {
        "messages": [
            {
                "text": `Não há uma conta do messenger cadastrada em nosso sistema.`
            },
            {
                "text": `Por favor, contate nossos especialistas para que possamos resolver este problema juntos.`
            },
        ],
        "redirect_to_blocks": [
            `Human interaction`
        ]
    };
    return giveAccessNoMessenger;
};
exports.indicationDone = variables => {
    let text = `Tudo pronto! Você acabou de ser indicado por ${variables.indicator}. Quando realizar as compra dos créditos iniciais, vocês dois ganharão 200 horas de proteção.`;
    if (variables.indicatorProfile !== null && variables.indicatorProfile.firstName !== undefined && variables.indicatorProfile.lastName !== undefined) {
        text = `Tudo pronto! Você acabou de ser indicado por ${variables.indicatorProfile.firstName} ${variables.indicatorProfile.lastName}. Quando realizar as compra dos créditos iniciais, vocês dois ganharão 200 horas de proteção.`;
    }
    ;
    const indicationDone = {
        "messages": [
            {
                "text": text,
            },
            {
                "text": `O que deseja fazer agora?`,
                "quick_replies": [
                    {
                        "title": "Indicar a Onsurance",
                        "block_names": ["Referer"]
                    },
                    {
                        "title": "Conhecer a Onsurance",
                        "block_names": ["PRON"]
                    },
                    {
                        "title": "Falar com Especialista",
                        "block_names": ["Human interaction"]
                    },
                    {
                        "title": "Menu de Opções",
                        "block_names": ["Menu de opções"]
                    },
                ]
            },
        ],
    };
    return indicationDone;
};
exports.indicatorEqualIndicated = variables => {
    const indicatorEqualIndicated = {
        "messages": [
            {
                "text": `Você não pode se indicar hehe. Espertinho...`,
                "quick_replies": [
                    {
                        "title": "Indicar a Onsurance",
                        "block_names": ["Referer"]
                    },
                    {
                        "title": "Conhecer a Onsurance",
                        "block_names": ["PRON"]
                    },
                    {
                        "title": "Falar com Especialista",
                        "block_names": ["Human interaction"]
                    },
                    {
                        "title": "Menu de Opções",
                        "block_names": ["Menu de opções"]
                    },
                ]
            }
        ],
    };
    return indicatorEqualIndicated;
};
exports.serverError = variables => {
    const serverError = {
        "messages": [
            {
                "text": "OOOoooppsss. Tivemos um pequeno erro em nosso servidor. Por favor verifique se está conectado à internet e tente novamente em 5 segundos."
            },
            {
                "text": "O que deseja fazer?",
                "quick_replies": [
                    {
                        "title": "Falar com Especialista",
                        "block_names": ["Human interaction"]
                    },
                    {
                        "title": "Menu de Opções",
                        "block_names": ["Menu de opções"]
                    },
                    {
                        "title": "Indicar a Onsurance",
                        "block_names": ["Referer"]
                    },
                    {
                        "title": "Conhecer a Onsurance",
                        "block_names": ["PRON"]
                    },
                ]
            },
        ]
    };
    return serverError;
};
exports.alreadyHaveIndicator = variables => {
    const alreadyHaveIndicator = {
        "messages": [
            {
                "text": `Identificamos que você já recebeu indicação de um usuário. O que deseja fazer?`,
                "quick_replies": [
                    {
                        "title": "Indicar a Onsurance",
                        "block_names": ["Referer"]
                    },
                    {
                        "title": "Conhecer a Onsurance",
                        "block_names": ["PRON"]
                    },
                    {
                        "title": "Falar com Especialista",
                        "block_names": ["Human interaction"]
                    },
                    {
                        "title": "Menu de Opções",
                        "block_names": ["Menu de opções"]
                    },
                ]
            }
        ],
    };
    return alreadyHaveIndicator;
};
/*

        CHANGE ITEM IN PROFILE MESSENGER

*/
exports.changeItem = (variables) => __awaiter(void 0, void 0, void 0, function* () {
    let replies = [];
    yield variables.vehiclePlates.forEach(element => {
        const reply = {
            "title": element,
            "set_attributes": {
                "itemInUse": element
            }
        };
        replies.push(reply);
    });
    replies.push({
        "title": "Falar com Especialista",
        "block_names": ["Human interaction"]
    }, {
        "title": "Menu de Opções",
        "block_names": ["Menu de opções"]
    });
    const changeItemResponse = {
        "messages": [
            {
                "text": "Qual opção deseja escolher?",
                "quick_replies": replies,
                "quick_reply_options": {
                    "process_text_by_ai": false,
                    "text_attribute_name": "itemInUse"
                }
            }
        ],
    };
    return changeItemResponse;
});
exports.changeItemInfo = variables => {
    try {
        console.log("TCL: variables", variables);
        console.log("TCL: variables.itemProfile.protectiondata.protectionStatus", variables.itemProfile.protectionData.protectionStatus);
        console.log("TCL: variables.itemProfile.protectiondata.protectionStatus.theft", variables.itemProfile.protectionData.protectionStatus.theft);
        let protectionStatus = "ON";
        if (variables.itemProfile.protectionData.protectionStatus.theft === false) {
            protectionStatus = "OFF";
        }
        ;
        console.log("TCL: protectionStatus", protectionStatus);
        const changeItemInfoResponse = {
            "messages": [
                {
                    "text": `Tudo pronto para usar seu ${variables.itemProfile.brand} ${variables.itemProfile.model}.`
                },
                {
                    "text": `Seu Onsurance está atualmente ${protectionStatus}.`
                }
            ],
            "set_attributes": {
                "car-brand": variables.itemProfile.brand,
                "car-model": variables.itemProfile.model,
                "status-protecao": protectionStatus,
                "itemInUse": variables.itemProfile.plate
            },
        };
        return changeItemInfoResponse;
    }
    catch (error) {
        const serverError = {
            "messages": [
                {
                    "text": "OOOoooppsss. Tivemos um pequeno erro em nosso servidor. Por favor verifique se está conectado à internet e tente novamente em 5 segundos."
                },
                {
                    "text": "O que deseja fazer?",
                    "quick_replies": [
                        {
                            "title": "Falar com Especialista",
                            "block_names": ["Human interaction"]
                        },
                        {
                            "title": "Menu de Opções",
                            "block_names": ["Menu de opções"]
                        },
                        {
                            "title": "Indicar a Onsurance",
                            "block_names": ["Referer"]
                        },
                        {
                            "title": "Conhecer a Onsurance",
                            "block_names": ["PRON"]
                        },
                    ]
                },
            ]
        };
        return {
            status: 200,
            text: serverError
        };
    }
};
exports.onlyOneItemInProfile = variables => {
    try {
        const onlyOneItemInProfileResponse = {
            "messages": [
                {
                    "text": `Opa!!! Só encontrei o veículo ${variables.vehiclePlate} em seu perfil.`
                },
                {
                    "text": `Pode continuar utilizando seu Onsurance normalmente.`
                },
                {
                    "text": `Caso tenha comprado o Onsurance pra outro veículo, entre em contato com nossos especialistas para resolver esse problema.`,
                    "quick_replies": [
                        {
                            "title": "Função  ✅ON| ☑️OFF",
                            "block_names": ["Ligar"]
                        },
                        {
                            "title": "Falar com Especialista",
                            "block_names": ["Human interaction"]
                        },
                        {
                            "title": "Menu de Opções",
                            "block_names": ["Menu de opções"]
                        }
                    ]
                }
            ],
            "set_attributes": {
                "car-brand": variables.itemProfile.brand,
                "car-model": variables.itemProfile.model,
                "itemInUse": variables.vehiclePlate
            },
        };
        return onlyOneItemInProfileResponse;
    }
    catch (error) {
        const serverError = {
            "messages": [
                {
                    "text": "OOOoooppsss. Tivemos um pequeno erro em nosso servidor. Por favor verifique se está conectado à internet e tente novamente em 5 segundos."
                },
                {
                    "text": "O que deseja fazer?",
                    "quick_replies": [
                        {
                            "title": "Falar com Especialista",
                            "block_names": ["Human interaction"]
                        },
                        {
                            "title": "Menu de Opções",
                            "block_names": ["Menu de opções"]
                        },
                        {
                            "title": "Indicar a Onsurance",
                            "block_names": ["Referer"]
                        },
                        {
                            "title": "Conhecer a Onsurance",
                            "block_names": ["PRON"]
                        },
                    ]
                },
            ]
        };
        return {
            status: 200,
            text: serverError
        };
    }
    ;
};
//# sourceMappingURL=responses.messenger.js.map