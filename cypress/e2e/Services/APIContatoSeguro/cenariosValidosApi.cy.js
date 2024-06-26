describe('Cenários Válidos API/BackEnd Contato Seguro', () => { 
    

    it('Cenário Válido: Buscar o status da aplicação', () => { 
      
      cy.request({  

        method: 'GET', 
        url: 'http://localhost:8400/' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 
        expect(response.body.msg).to.equal('home')

      }) 

    })


    it('Cenário Válido: Buscar lista de usuários', () => { 
      
        const expectedUsers = [
            {
                "id_user": "33",
                "name": "Maria Eduarda Santos Ferreira",
                "email": "mariaeduardasf@dominio.com",
                "telephone": "51999999999",
                "birth_date": "2024-06-23",
                "birth_city": "Porto Alegre",
                "show": "0",
                "companies": " Compliance St..."
            },
            {
                "id_user": "34",
                "name": "Danilo Silveira",
                "email": "danilosilveira@dominio.com",
                "telephone": "9999999999999",
                "birth_date": "2025-06-22",
                "birth_city": "Porto Alegre",
                "show": "0",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "35",
                "name": "Robson Santos",
                "email": "robsonsantos@dominio2.com",
                "telephone": "aaaaaaaaa",
                "birth_date": "0001-01-01",
                "birth_city": "123456789",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "36",
                "name": "Celso Fraga",
                "email": "celsofraga@dominio3.com.br",
                "telephone": "5555555555-5555555",
                "birth_date": "2001-01-01",
                "birth_city": "1234@1234",
                "show": "0",
                "companies": " Compliance St..."
            },
            {
                "id_user": "38",
                "name": "Luis JR",
                "email": "luisjr@dominio4.com.br",
                "telephone": "55555555555",
                "birth_date": "2024-06-23",
                "birth_city": "Porto Alegre",
                "show": "0",
                "companies": " Compliance St..."
            },
            {
                "id_user": "39",
                "name": "Luana Garcia",
                "email": "luanagarcia@@dominio5.com.br",
                "telephone": "99999999999",
                "birth_date": "2000-03-01",
                "birth_city": "Porto Alegre",
                "show": "0",
                "companies": " Compliance St..."
            },
            {
                "id_user": "40",
                "name": "Marcos Castro",
                "email": "marcoscastro",
                "telephone": "",
                "birth_date": "2001-03-01",
                "birth_city": "",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "41",
                "name": "99999999",
                "email": "emailinvalido1234!@#$!@#!",
                "telephone": "Roberto Carlos",
                "birth_date": "2024-03-30",
                "birth_city": "Porto:Alegre123_456",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "42",
                "name": "Jess Melo",
                "email": "Roberta23@yahoo.com",
                "telephone": "(98) 84774-0931",
                "birth_date": "2024-06-17",
                "birth_city": "Grande Adaires",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "43",
                "name": "Jorge Oliveira",
                "email": "Nezias.Martins@hotmail.com",
                "telephone": "(98) 52533-0961",
                "birth_date": "2022-09-25",
                "birth_city": "Macedo do Descoberto",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "44",
                "name": "Natasha Franco",
                "email": "Andra_Batista87@gmail.com",
                "telephone": "(34) 15509-1280",
                "birth_date": "2022-02-18",
                "birth_city": "Moraes de Nossa Senhora",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "45",
                "name": "Jaquelina Carvalho Filho",
                "email": "Jonas_Martins@hotmail.com",
                "telephone": "(08) 16949-6654",
                "birth_date": "2023-09-14",
                "birth_city": "Liliam de Nossa Senhora",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "46",
                "name": "Kelin Melo",
                "email": "Elba56@hotmail.com",
                "telephone": "(32) 56875-0671",
                "birth_date": "2023-09-05",
                "birth_city": "Mara de Nossa Senhora",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "47",
                "name": "Joyce Franco",
                "email": "Edsio.Silva14@live.com",
                "telephone": "(03) 88804-4632",
                "birth_date": "2020-03-23",
                "birth_city": "Hideo do Descoberto",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "48",
                "name": "Joyce Franco",
                "email": "Edsio.Silva14@live.com",
                "telephone": "(03) 88804-4632",
                "birth_date": "2020-03-23",
                "birth_city": "Hideo do Descoberto",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "49",
                "name": "Angelica Nogueira",
                "email": "Sadako_Souza@hotmail.com",
                "telephone": "(63) 11356-8087",
                "birth_date": "2021-05-28",
                "birth_city": "Grande Giusepe",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "50",
                "name": "Angelica Nogueira",
                "email": "Sadako_Souza@hotmail.com",
                "telephone": "(63) 11356-8087",
                "birth_date": "2021-05-28",
                "birth_city": "Grande Giusepe",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "51",
                "name": "Renner Saraiva",
                "email": "Huguetti_Braga@hotmail.com",
                "telephone": "(88) 88205-4269",
                "birth_date": "2023-09-16",
                "birth_city": "Município de Quiterio de Nossa Senhora",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "52",
                "name": "Lucilene Xavier",
                "email": "Rodney.Albuquerque@hotmail.com",
                "telephone": "(63) 63839-0839",
                "birth_date": "2023-06-12",
                "birth_city": "Oliveira do Descoberto",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "53",
                "name": "Elizabetth Franco",
                "email": "Oldaque_Pereira@hotmail.com",
                "telephone": "(11) 31644-0339",
                "birth_date": "2022-12-13",
                "birth_city": "Evelyn do Descoberto",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "54",
                "name": "Simone Moreira",
                "email": "Hilca79@gmail.com",
                "telephone": "(63) 57248-8837",
                "birth_date": "2022-07-03",
                "birth_city": "Nova Judith",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "55",
                "name": "Débora Costa",
                "email": "Renata.Pereira@live.com",
                "telephone": "(41) 89097-7066",
                "birth_date": "2020-02-15",
                "birth_city": "Grande Shokem",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "56",
                "name": "Kazuhiko Oliveira",
                "email": "Jaques.Oliveira@live.com",
                "telephone": "(42) 42217-1330",
                "birth_date": "2024-04-20",
                "birth_city": "Albuquerque de Nossa Senhora",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "57",
                "name": "Anita Oliveira",
                "email": "June20@yahoo.com",
                "telephone": "(01) 45751-8901",
                "birth_date": "2024-02-05",
                "birth_city": "Oliveira do Sul",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "58",
                "name": "Nicemar Macedo Filho",
                "email": "Yutaka_Oliveira29@yahoo.com",
                "telephone": "(00) 64524-0784",
                "birth_date": "2022-10-03",
                "birth_city": "Município de Divino",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "59",
                "name": "Edrisio Barros",
                "email": "Mercedes97@bol.com.br",
                "telephone": "(75) 31373-2290",
                "birth_date": "2022-07-27",
                "birth_city": "Simone do Descoberto",
                "show": "0",
                "companies": " Compliance To..."
            },
            {
                "id_user": "60",
                "name": "Edson Xavier",
                "email": "Elijah.Carvalho@gmail.com",
                "telephone": "(23) 79373-0840",
                "birth_date": "2022-07-31",
                "birth_city": "Paola do Descoberto",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "61",
                "name": "Marcele Costa",
                "email": "Robertson_Pereira68@live.com",
                "telephone": "(99) 67665-0564",
                "birth_date": "2022-06-30",
                "birth_city": "Souza do Sul",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "62",
                "name": "Marcele Costa",
                "email": "Robertson_Pereira68@live.com",
                "telephone": "(99) 67665-0564",
                "birth_date": "2022-06-30",
                "birth_city": "Souza do Sul",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "63",
                "name": "Walkiria Oliveira Jr.",
                "email": "David_Xavier99@gmail.com",
                "telephone": "(88) 45358-2957",
                "birth_date": "2021-06-07",
                "birth_city": "Velha Dalmildo de Nossa Senhora",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "64",
                "name": "Débora Macedo",
                "email": "Elisete92@live.com",
                "telephone": "(60) 58109-1394",
                "birth_date": "2021-02-27",
                "birth_city": "Souza do Norte",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "65",
                "name": "Benedikt-Jan Nogueira",
                "email": "Elivar.Souza87@live.com",
                "telephone": "(07) 41851-4370",
                "birth_date": "2023-05-06",
                "birth_city": "Vila Wadi de Nossa Senhora",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "66",
                "name": "Didacio Pereira",
                "email": "Lorena_Oliveira@gmail.com",
                "telephone": "(09) 29427-1733",
                "birth_date": "2021-11-02",
                "birth_city": "Nogueira do Norte",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "67",
                "name": "Heloisa Silva Jr.",
                "email": "Keylla.Nogueira@bol.com.br",
                "telephone": "(78) 23954-2300",
                "birth_date": "2021-08-18",
                "birth_city": "Vila Salete do Sul",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "68",
                "name": "Yassuyoshi Costa",
                "email": "Jess47@bol.com.br",
                "telephone": "(79) 69034-1588",
                "birth_date": "2022-12-24",
                "birth_city": "Marco do Sul",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "69",
                "name": "Márcia Xavier",
                "email": "Thomaz38@gmail.com",
                "telephone": "(78) 36859-1258",
                "birth_date": "2024-03-20",
                "birth_city": "Nogueira de Nossa Senhora",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "70",
                "name": "Edna Braga",
                "email": "Gleydson.Moreira@live.com",
                "telephone": "(83) 94135-9241",
                "birth_date": "2019-09-07",
                "birth_city": "Danilo de Nossa Senhora",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "71",
                "name": " ",
                "email": "Yuri_Martins15@yahoo.com",
                "telephone": "(22) 52786-8581",
                "birth_date": "2020-05-11",
                "birth_city": "Nogueira do Norte",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "72",
                "name": "Srta. Fredison Costa",
                "email": "Hideo.Reis0@hotmail.com",
                "telephone": "",
                "birth_date": "2024-06-02",
                "birth_city": "Vila Johann",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "73",
                "name": "Christian Macedo",
                "email": "Kazuko.Costa@live.com",
                "telephone": "(30) 33401-5640",
                "birth_date": "2023-12-19",
                "birth_city": "",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "74",
                "name": "Eronides Souza",
                "email": "emailexistente@teste.com",
                "telephone": "(77) 61422-0640",
                "birth_date": "2022-10-30",
                "birth_city": "Grande Sany de Nossa Senhora",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "75",
                "name": "Graziela Moreira",
                "email": "emailexistente@teste.com",
                "telephone": "(04) 82734-8479",
                "birth_date": "2022-04-10",
                "birth_city": "Velha Margaret do Norte",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "76",
                "name": "Abílio Moreira",
                "email": "emailexistente@teste.com",
                "telephone": "(47) 56730-5398",
                "birth_date": "2020-05-19",
                "birth_city": "Moraes do Descoberto",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "77",
                "name": "Elizabetth Oliveira Neto",
                "email": "Tarcisio94@bol.com.br",
                "telephone": "(05) 90850-5738",
                "birth_date": "2021-08-22",
                "birth_city": "Reis do Descoberto",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "78",
                "name": "Cecília Macedo",
                "email": "Rejane.Oliveira@bol.com.br",
                "telephone": "(07) 78467-7245",
                "birth_date": "2026-01-07",
                "birth_city": "Grande Massami do Sul",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "79",
                "name": "*&__?<)}$&",
                "email": "Ronie.Barros@bol.com.br",
                "telephone": "(84) 63110-9644",
                "birth_date": "2022-12-22",
                "birth_city": "Nova Rosimari",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "80",
                "name": "34428",
                "email": "Sabrina_Martins77@gmail.com",
                "telephone": "(09) 10099-5612",
                "birth_date": "2022-11-29",
                "birth_city": "Grande Rozirene do Descoberto",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "81",
                "name": "+!(/~/#::,",
                "email": "Sabrina_Martins77@gmail.com",
                "telephone": "(09) 10099-5612",
                "birth_date": "2022-11-29",
                "birth_city": "Grande Rozirene do Descoberto",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "82",
                "name": " ",
                "email": "Sabrina_Martins77@gmail.com",
                "telephone": "(09) 10099-5612",
                "birth_date": "2022-11-29",
                "birth_city": "Grande Rozirene do Descoberto",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "83",
                "name": "Juan Macedo",
                "email": "Sabrina_Martins77@gmail.com",
                "telephone": "tmnoveigaa",
                "birth_date": "2022-11-29",
                "birth_city": "Grande Rozirene do Descoberto",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "84",
                "name": "Juan Macedo",
                "email": "Sabrina_Martins77@gmail.com",
                "telephone": "+!(/~/#::,",
                "birth_date": "2022-11-29",
                "birth_city": "Grande Rozirene do Descoberto",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "85",
                "name": "Juan Macedo",
                "email": "Sabrina_Martins77@gmail.com",
                "telephone": " ",
                "birth_date": "2022-11-29",
                "birth_city": "Grande Rozirene do Descoberto",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "86",
                "name": "Juan Macedo",
                "email": "fulano.teste.com",
                "telephone": "(09) 10099-5612",
                "birth_date": "2022-11-29",
                "birth_city": "Grande Rozirene do Descoberto",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "87",
                "name": "Juan Macedo",
                "email": "fulano@@teste.com",
                "telephone": "(09) 10099-5612",
                "birth_date": "2022-11-29",
                "birth_city": "Grande Rozirene do Descoberto",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "88",
                "name": "Juan Macedo",
                "email": "fulano @teste.com",
                "telephone": "(09) 10099-5612",
                "birth_date": "2022-11-29",
                "birth_city": "Grande Rozirene do Descoberto",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "89",
                "name": "Juan Macedo",
                "email": "emailexistente@teste.com",
                "telephone": "(09) 10099-5612",
                "birth_date": "2022-11-29",
                "birth_city": "Grande Rozirene do Descoberto",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "90",
                "name": "Juan Macedo",
                "email": "Sabrina_Martins77@gmail.com",
                "telephone": "(09) 10099-5612",
                "birth_date": "2028-04-17",
                "birth_city": "Grande Rozirene do Descoberto",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "91",
                "name": "Juan Macedo",
                "email": "Sabrina_Martins77@gmail.com",
                "telephone": "(09) 10099-5612",
                "birth_date": "2024-07-10",
                "birth_city": "Grande Rozirene do Descoberto",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "92",
                "name": "Juan Macedo",
                "email": "Sabrina_Martins77@gmail.com",
                "telephone": "(09) 10099-5612",
                "birth_date": "2024-07-10",
                "birth_city": "Grande Rozirene do Descoberto",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "93",
                "name": "Juan Macedo",
                "email": "Sabrina_Martins77@gmail.com",
                "telephone": "(09) 10099-5612",
                "birth_date": "2022-11-29",
                "birth_city": "34428",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "94",
                "name": "Juan Macedo",
                "email": "Sabrina_Martins77@gmail.com",
                "telephone": "(09) 10099-5612",
                "birth_date": "2022-11-29",
                "birth_city": "+!(/~/#::,",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "95",
                "name": "Juan Macedo",
                "email": "Sabrina_Martins77@gmail.com",
                "telephone": "(09) 10099-5612",
                "birth_date": "2022-11-29",
                "birth_city": " ",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "96",
                "name": "54300",
                "email": "Juraci.Oliveira68@bol.com.br",
                "telephone": "(04) 16759-1375",
                "birth_date": "2021-01-19",
                "birth_city": "Souza do Sul",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "97",
                "name": "*%;#;{/_*$",
                "email": "Juraci.Oliveira68@bol.com.br",
                "telephone": "(04) 16759-1375",
                "birth_date": "2021-01-19",
                "birth_city": "Souza do Sul",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "98",
                "name": " ",
                "email": "Juraci.Oliveira68@bol.com.br",
                "telephone": "(04) 16759-1375",
                "birth_date": "2021-01-19",
                "birth_city": "Souza do Sul",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "99",
                "name": "Margarete Carvalho",
                "email": "Juraci.Oliveira68@bol.com.br",
                "telephone": "dfewxkgwzg",
                "birth_date": "2021-01-19",
                "birth_city": "Souza do Sul",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "100",
                "name": "Margarete Carvalho",
                "email": "Juraci.Oliveira68@bol.com.br",
                "telephone": "*%;#;{/_*$",
                "birth_date": "2021-01-19",
                "birth_city": "Souza do Sul",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "101",
                "name": "Margarete Carvalho",
                "email": "Juraci.Oliveira68@bol.com.br",
                "telephone": " ",
                "birth_date": "2021-01-19",
                "birth_city": "Souza do Sul",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "102",
                "name": "Margarete Carvalho",
                "email": "fulano.teste.com",
                "telephone": "(04) 16759-1375",
                "birth_date": "2021-01-19",
                "birth_city": "Souza do Sul",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "103",
                "name": "Margarete Carvalho",
                "email": "fulano@@teste.com",
                "telephone": "(04) 16759-1375",
                "birth_date": "2021-01-19",
                "birth_city": "Souza do Sul",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "104",
                "name": "Margarete Carvalho",
                "email": "fulano @teste.com",
                "telephone": "(04) 16759-1375",
                "birth_date": "2021-01-19",
                "birth_city": "Souza do Sul",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "105",
                "name": "Margarete Carvalho",
                "email": "emailexistente@teste.com",
                "telephone": "(04) 16759-1375",
                "birth_date": "2021-01-19",
                "birth_city": "Souza do Sul",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "106",
                "name": "Margarete Carvalho",
                "email": "Juraci.Oliveira68@bol.com.br",
                "telephone": "(04) 16759-1375",
                "birth_date": "2025-04-01",
                "birth_city": "Souza do Sul",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "107",
                "name": "Margarete Carvalho",
                "email": "Juraci.Oliveira68@bol.com.br",
                "telephone": "(04) 16759-1375",
                "birth_date": "2024-10-23",
                "birth_city": "Souza do Sul",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "108",
                "name": "Margarete Carvalho",
                "email": "Juraci.Oliveira68@bol.com.br",
                "telephone": "(04) 16759-1375",
                "birth_date": "2024-10-23",
                "birth_city": "Souza do Sul",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "109",
                "name": "Margarete Carvalho",
                "email": "Juraci.Oliveira68@bol.com.br",
                "telephone": "(04) 16759-1375",
                "birth_date": "2021-01-19",
                "birth_city": "54300",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "110",
                "name": "Margarete Carvalho",
                "email": "Juraci.Oliveira68@bol.com.br",
                "telephone": "(04) 16759-1375",
                "birth_date": "2021-01-19",
                "birth_city": "*%;#;{/_*$",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "111",
                "name": "97432",
                "email": "Roberta18@yahoo.com",
                "telephone": "(02) 48281-4265",
                "birth_date": "2022-04-21",
                "birth_city": "Velha Céphora",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "112",
                "name": "}}%_'*]|>.",
                "email": "Nicemar89@bol.com.br",
                "telephone": "(68) 49901-9571",
                "birth_date": "2023-07-23",
                "birth_city": "Matosinho do Descoberto",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "113",
                "name": " ",
                "email": "Karina61@bol.com.br",
                "telephone": "(08) 92202-7509",
                "birth_date": "2021-06-01",
                "birth_city": "Nova Donizetti",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "114",
                "name": "Nora Saraiva",
                "email": "Deny14@gmail.com",
                "telephone": "gggzpljsgm",
                "birth_date": "2021-12-18",
                "birth_city": "Nova Giuseppe do Sul",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "115",
                "name": "Mozart Macedo",
                "email": "Lissette.Martins@bol.com.br",
                "telephone": "/+:^<?@_{[",
                "birth_date": "2020-02-10",
                "birth_city": "Velha Aozeni do Descoberto",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "116",
                "name": "Arivaldo Costa Jr.",
                "email": "Lissette3@live.com",
                "telephone": " ",
                "birth_date": "2021-09-22",
                "birth_city": "Moraes do Sul",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "117",
                "name": "Cornélio Oliveira",
                "email": "fulano.teste.com",
                "telephone": "(54) 34006-7261",
                "birth_date": "2023-01-13",
                "birth_city": "Velha Leticia do Descoberto",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "118",
                "name": "Cecília Carvalho Jr.",
                "email": "fulano@@teste.com",
                "telephone": "(96) 19666-8012",
                "birth_date": "2024-04-18",
                "birth_city": "Reis de Nossa Senhora",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "119",
                "name": "Fernando Nogueira",
                "email": "fulano @teste.com",
                "telephone": "(87) 57319-5157",
                "birth_date": "2021-08-16",
                "birth_city": "Município de Eudes de Nossa Senhora",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "120",
                "name": "Dr. Omero Reis",
                "email": "emailexistente@teste.com",
                "telephone": "(68) 63605-4712",
                "birth_date": "2024-04-18",
                "birth_city": "Braga do Norte",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "121",
                "name": "Jofre Carvalho",
                "email": "Hosana.Carvalho@yahoo.com",
                "telephone": "(06) 52403-6397",
                "birth_date": "2025-06-01",
                "birth_city": "Nova Maricy do Sul",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "122",
                "name": "Waldemar Carvalho",
                "email": "Grimaldo_Silva62@yahoo.com",
                "telephone": "(16) 92570-7407",
                "birth_date": "2024-01-12",
                "birth_city": "Albuquerque do Descoberto",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "123",
                "name": "Jeoacaz Melo",
                "email": "Gisele_Silva91@yahoo.com",
                "telephone": "(12) 95101-5538",
                "birth_date": "2024-02-18",
                "birth_city": "Grande Luo",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "124",
                "name": "Inessa Batista",
                "email": "Fabiane18@gmail.com",
                "telephone": "(11) 21396-7153",
                "birth_date": "2020-12-24",
                "birth_city": "30545",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "125",
                "name": "Sebastião Macedo",
                "email": "Rachel77@gmail.com",
                "telephone": "(89) 32444-8007",
                "birth_date": "2020-11-23",
                "birth_city": " ",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "126",
                "name": "75020",
                "email": "Simone.Moreira@live.com",
                "telephone": "(38) 32019-3974",
                "birth_date": "2022-10-16",
                "birth_city": "Moraes do Descoberto",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "127",
                "name": "{$;.;![/@>",
                "email": "Alberto_Carvalho8@live.com",
                "telephone": "(68) 71641-5855",
                "birth_date": "2022-05-02",
                "birth_city": "Velha Urika",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "128",
                "name": " ",
                "email": "Amlia_Silva0@live.com",
                "telephone": "(66) 99328-0403",
                "birth_date": "2021-11-05",
                "birth_city": "Xavier do Sul",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "129",
                "name": "Sr. Julie Franco",
                "email": "Silvia_Saraiva31@yahoo.com",
                "telephone": "gummsxwmsk",
                "birth_date": "2022-11-14",
                "birth_city": "Município de Benedito do Norte",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "130",
                "name": "Cyrus Carvalho",
                "email": "rica.Macedo68@hotmail.com",
                "telephone": "/%_{,@]%.{",
                "birth_date": "2023-07-17",
                "birth_city": "Nova Lorena do Descoberto",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "131",
                "name": "Leila Batista",
                "email": "Ellen_Xavier@live.com",
                "telephone": " ",
                "birth_date": "2020-11-01",
                "birth_city": "Grande Aozeni do Sul",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "132",
                "name": "Deborah Carvalho",
                "email": "fulano.teste.com",
                "telephone": "(77) 79167-8763",
                "birth_date": "2022-10-26",
                "birth_city": "Jeronimo do Descoberto",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "133",
                "name": "Mariana Silva",
                "email": "fulano@@teste.com",
                "telephone": "(06) 27509-4713",
                "birth_date": "2023-07-08",
                "birth_city": "Nova Yolimar",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "134",
                "name": "Lamarque Xavier",
                "email": "fulano @teste.com",
                "telephone": "(23) 30071-0085",
                "birth_date": "2020-08-14",
                "birth_city": "Alzira do Norte",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "135",
                "name": "Patrícia Saraiva",
                "email": "emailexistente@teste.com",
                "telephone": "(73) 52498-2263",
                "birth_date": "2024-01-17",
                "birth_city": "Nova Claudir",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "136",
                "name": "Elaine Souza",
                "email": "Debora.Pereira38@live.com",
                "telephone": "(48) 25997-9565",
                "birth_date": "2027-01-15",
                "birth_city": "Vila Caren do Sul",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "137",
                "name": "Sra. Yosxio Batista",
                "email": "Binggeli17@hotmail.com",
                "telephone": "(63) 44742-8294",
                "birth_date": "2024-02-15",
                "birth_city": "Velha Francisca do Descoberto",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "138",
                "name": "Felice Silva",
                "email": "Cassia_Batista@bol.com.br",
                "telephone": "(89) 75629-4176",
                "birth_date": "2024-02-20",
                "birth_city": "Fortunato do Sul",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "139",
                "name": "Yohei Batista",
                "email": "Marcello_Oliveira16@bol.com.br",
                "telephone": "(89) 09430-2718",
                "birth_date": "2021-03-05",
                "birth_city": "90164",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "140",
                "name": "Jae Silva",
                "email": "Cludia.Reis@live.com",
                "telephone": "(35) 25048-0566",
                "birth_date": "2022-05-27",
                "birth_city": " ",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "141",
                "name": "59864",
                "email": "Tu.Macedo38@yahoo.com",
                "telephone": "(98) 79505-2459",
                "birth_date": "2021-01-16",
                "birth_city": "Velha Edem",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "142",
                "name": "?]'_!`@)`+",
                "email": "Devair.Saraiva@gmail.com",
                "telephone": "(88) 87804-8827",
                "birth_date": "2022-06-08",
                "birth_city": "Velha Kiyomi",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "143",
                "name": " ",
                "email": "Julia.Moreira11@hotmail.com",
                "telephone": "(61) 05154-1033",
                "birth_date": "2024-03-11",
                "birth_city": "Município de Zulamar do Sul",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "144",
                "name": "Sra. Mônica Albuquerque",
                "email": "Nadia.Souza@bol.com.br",
                "telephone": "diawswidky",
                "birth_date": "2022-07-21",
                "birth_city": "Nova Rainer",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "145",
                "name": "Kauy Albuquerque",
                "email": "Agatha_Nogueira85@gmail.com",
                "telephone": "_)._+#*^,?",
                "birth_date": "2023-09-06",
                "birth_city": "Velha Darwin",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "146",
                "name": "Teste user",
                "email": "teste@user.com",
                "telephone": "444555666",
                "birth_date": "2024-03-03",
                "birth_city": "Teste",
                "show": "0",
                "companies": " Compliance St..."
            },
            {
                "id_user": "147",
                "name": "Teste",
                "email": "Teste",
                "telephone": "123456789",
                "birth_date": "2001-05-25",
                "birth_city": "Teste",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "148",
                "name": " ",
                "email": "teste@teste",
                "telephone": "123456789",
                "birth_date": "1995-04-22",
                "birth_city": "Teste",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "149",
                "name": "Teste",
                "email": "emailexistente@teste.com",
                "telephone": "510000000",
                "birth_date": "2000-05-05",
                "birth_city": "Teste",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "150",
                "name": "Teste 2",
                "email": "emailexistente@teste.com",
                "telephone": "510000000",
                "birth_date": "2000-05-05",
                "birth_city": "Teste",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "151",
                "name": "Testedata",
                "email": "testedata@testedata.com",
                "telephone": "0000000",
                "birth_date": "2000-05-05",
                "birth_city": "Testedata",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "152",
                "name": "TesteData",
                "email": "testedata@testedata.com",
                "telephone": "55555555555",
                "birth_date": "2000-03-01",
                "birth_city": "TesteData",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "153",
                "name": "Clemente Saraiva",
                "email": "Regina_Carvalho@yahoo.com",
                "telephone": "",
                "birth_date": "2023-04-06",
                "birth_city": "Nova Regina do Sul",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "154",
                "name": "Srta. Davi Carvalho",
                "email": "Cleide.Souza73@gmail.com",
                "telephone": "(86) 33767-1346",
                "birth_date": "2021-08-15",
                "birth_city": "",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "155",
                "name": "Sr. Elete Albuquerque",
                "email": "Leslie.Moreira@hotmail.com",
                "telephone": "",
                "birth_date": "2022-02-17",
                "birth_city": "Marinete do Norte",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "156",
                "name": "Viviana Carvalho",
                "email": "Andra_Saraiva19@bol.com.br",
                "telephone": "(57) 14606-1719",
                "birth_date": "2023-04-14",
                "birth_city": "",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "157",
                "name": "Elídia Souza Filho",
                "email": "Ins_Saraiva@gmail.com",
                "telephone": "(52) 02615-9735",
                "birth_date": "2023-12-23",
                "birth_city": "Município de Dalva",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "158",
                "name": "Dioneia Melo",
                "email": "Manuela96@hotmail.com",
                "telephone": "(04) 46542-9054",
                "birth_date": "2021-08-13",
                "birth_city": "Velha Leslie do Descoberto",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "159",
                "name": "Ramah Martins",
                "email": "Alain7@gmail.com",
                "telephone": "(23) 32247-0856",
                "birth_date": "2021-12-06",
                "birth_city": "Velha Lourival do Sul",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "160",
                "name": "Toyoko Franco",
                "email": "Tadeu53@gmail.com",
                "telephone": "",
                "birth_date": "2022-12-04",
                "birth_city": "Município de Giuma de Nossa Senhora",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "161",
                "name": "Vanoil Oliveira",
                "email": "Rucy.Braga@yahoo.com",
                "telephone": "(12) 97438-9272",
                "birth_date": "2019-12-19",
                "birth_city": "",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "162",
                "name": "27574",
                "email": "Cleverson.Reis@yahoo.com",
                "telephone": "(78) 38225-6696",
                "birth_date": "2022-11-15",
                "birth_city": "Macedo do Sul",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "163",
                "name": "@:`.^#_>~#",
                "email": "Benedita72@bol.com.br",
                "telephone": "(72) 50920-7563",
                "birth_date": "2021-07-06",
                "birth_city": "Grande Alvaro",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "164",
                "name": " ",
                "email": "Noel_Reis93@yahoo.com",
                "telephone": "(53) 89232-7476",
                "birth_date": "2023-08-08",
                "birth_city": "Martins do Descoberto",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "165",
                "name": "Alessandro Albuquerque Neto",
                "email": "Carmem.Batista42@yahoo.com",
                "telephone": "kquhfocsdl",
                "birth_date": "2022-08-23",
                "birth_city": "Vila Venina de Nossa Senhora",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "166",
                "name": "Agatha Oliveira",
                "email": "Christine_Braga26@bol.com.br",
                "telephone": "{+>`{/|+'!",
                "birth_date": "2020-02-10",
                "birth_city": "Nova Nidia",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "167",
                "name": "Rizia Carvalho",
                "email": "Beatriz_Franco87@gmail.com",
                "telephone": " ",
                "birth_date": "2023-04-03",
                "birth_city": "Vila Egidio",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "168",
                "name": "Srta. Jonatan Carvalho",
                "email": "fulano.teste.com",
                "telephone": "(86) 78348-0410",
                "birth_date": "2023-05-12",
                "birth_city": "Souza do Sul",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "169",
                "name": "Rodnilson Albuquerque Filho",
                "email": "fulano@@teste.com",
                "telephone": "(06) 63132-0109",
                "birth_date": "2021-06-11",
                "birth_city": "Giselle do Norte",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "170",
                "name": "Rosemeire Albuquerque",
                "email": "fulano @teste.com",
                "telephone": "(95) 41591-3591",
                "birth_date": "2020-09-03",
                "birth_city": "Grande Casimiro do Sul",
                "show": "1",
                "companies": " Compliance St..."
            },
            {
                "id_user": "171",
                "name": "Virgínia Moraes Filho",
                "email": "emailexistente@teste.com",
                "telephone": "(49) 75481-3783",
                "birth_date": "2024-03-17",
                "birth_city": "Nogueira do Descoberto",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "172",
                "name": "Deijaniro Albuquerque Jr.",
                "email": "Edith_Carvalho@gmail.com",
                "telephone": "(08) 62847-2203",
                "birth_date": "2025-07-04",
                "birth_city": "Silvana do Descoberto",
                "show": "1",
                "companies": " Contato Segur..."
            },
            {
                "id_user": "173",
                "name": "Edson Souza",
                "email": "Rute.Silva18@yahoo.com",
                "telephone": "(93) 06256-2036",
                "birth_date": "2024-07-07",
                "birth_city": "Município de Joselita",
                "show": "1",
                "companies": " Compliance To..."
            },
            {
                "id_user": "174",
                "name": "Lindolfo Xavier",
                "email": "Glaci.Xavier79@yahoo.com",
                "telephone": "(26) 98877-5926",
                "birth_date": "2024-03-16",
                "birth_city": "79312",
                "show": "1",
                "companies": " Compliance St..."
            }
            
            
            // Novos usuário devem ser adicionados acima sempre que os testes de UI forem rodados
        ];
    
        cy.request({  
            method: 'GET', 
            url: 'http://localhost:8400/api/user' 
        }).then((response) => { 
            expect(response.status).to.equal(200);
            const users = response.body;
            expect(users).to.have.lengthOf(expectedUsers.length);
    
            expectedUsers.forEach((expectedUser, index) => {
                const user = users[index];
                expect(user.id_user).to.equal(expectedUser.id_user);
                expect(user.name).to.equal(expectedUser.name);
                expect(user.email).to.equal(expectedUser.email);
                expect(user.telephone).to.equal(expectedUser.telephone);
                expect(user.birth_date).to.equal(expectedUser.birth_date);
                expect(user.birth_city).to.equal(expectedUser.birth_city);
                expect(user.show).to.equal(expectedUser.show);
                expect(user.companies).to.equal(expectedUser.companies);
            });
        });
    });


    it('Buscar usuário por ID', () => { 
      
        cy.request({  
  
          method: 'GET', 
          url: 'http://localhost:8400/api/user/44' 
  
        }).then((response) => { 
  
        expect(response.status).to.equal(200); 
        expect(response.body.id_user).to.equal('44');
        expect(response.body.name).to.equal("Natasha Franco");
        expect(response.body.email).to.equal("Andra_Batista87@gmail.com");
        expect(response.body.telephone).to.equal("(34) 15509-1280");
        expect(response.body.birth_date).to.equal("2022-02-18");
        expect(response.body.birth_city).to.equal("Moraes de Nossa Senhora");
        expect(response.body.show).to.equal("1");
        expect(response.body.companies).to.equal(" Compliance St...");
          
        }) 
  
      })


    it('Cenário Válido: Atualizar informações do usuário', () => { 
      
        cy.request({  
  
          method: 'PATCH', 
          url: 'http://localhost:8400/api/user/44/update',
          body: {
            name: 'Novo Nome',
            email: 'novo_email@example.com',
            companies: 'Nova Empresa'
          } 

  
        }).then((response) => { 
  
          expect(response.status).to.equal(200); 
          

        });
  
      });


    it('Cenário Válido: Deletar usuário', () => { 
      
        cy.request({  
  
          method: 'DELETE', 
          url: 'http://localhost:8400/api/user/33/delete ' 
  
        }).then((response) => { 
  
          expect(response.status).to.equal(200); 
          expect(response.body.message).to.equal('data deleted successfully!')
  
        }) 
  
      })


    it('Cenário Válido: Buscar lista de Empresas', () => { 
      
        const expectedCompanies = [
            {
                "id_company": "4",
                "name": "Compliance Station",
                "cnpj": "33333333333",
                "show": "1",
                "id_adress": "2",
                "cep": "93080130",
                "country": "Argentina",
                "state": "BN",
                "city": "Burnos Aires",
                "street": "Krakoa",
                "number": "513",
                "district": "Antiskio",
                "additional": "bloco 43",
                "users": " Maria Eduarda..."
            },
            {
                "id_company": "5",
                "name": "Contato Seguro",
                "cnpj": "12312312312",
                "show": "1",
                "id_adress": "3",
                "cep": "95500000",
                "country": "Brasil",
                "state": "RS",
                "city": "Santo Antônio da Patrulha",
                "street": "Borges",
                "number": "60",
                "district": "Bairro Real",
                "additional": "apt. 110",
                "users": " Danilo Silvei..."
            }
            
            // Novas empresas devem ser adicionadas acima
        ];
    
        cy.request({  
            method: 'GET', 
            url: 'http://localhost:8400/api/company' 
        }).then((response) => { 
            expect(response.status).to.equal(200);
            const companies = response.body;
            expect(companies).to.have.lengthOf(expectedCompanies.length);
    
            expectedCompanies.forEach((expectedCompany, index) => {
                const company = companies[index];
                expect(company.id_company).to.equal(expectedCompany.id_company);
                expect(company.name).to.equal(expectedCompany.name);
                expect(company.cnpj).to.equal(expectedCompany.cnpj);
                expect(company.show).to.equal(expectedCompany.show);
                expect(company.id_adress).to.equal(expectedCompany.id_adress);
                expect(company.cep).to.equal(expectedCompany.cep);
                expect(company.country).to.equal(expectedCompany.country);
                expect(company.state).to.equal(expectedCompany.state);
                expect(company.city).to.equal(expectedCompany.city);
                expect(company.street).to.equal(expectedCompany.street);
                expect(company.number).to.equal(expectedCompany.number);
                expect(company.district).to.equal(expectedCompany.district);
                expect(company.additional).to.equal(expectedCompany.additional);
                expect(company.users).to.equal(expectedCompany.users);
            });
        });
    });


    it('Buscar Empresa por ID', () => { 
      
        const expectedCompany = {
            "id_company": "1",
            "name": "QA Station",
            "cnpj": "991836547193",
            "show": "0",
            "id_adress": "1",
            "cep": "95500000",
            "country": "Brasil",
            "state": "RS",
            "city": "Porto Alegre",
            "street": "Rua General Mostarda",
            "number": "919",
            "district": "Menino Deus",
            "additional": null,
            "users": " Maria Eduarda Santos Ferreira, Danilo Silveira, Robson Santos, Celso Fraga, Luis JR, Luana Garcia, Marcos Castro, 99999999, 99999999, 99999999, Jess Melo, Jorge Oliveira, Natasha Franco, Jaquelina Carvalho Filho, Kelin Melo, Joyce Franco, Joyce Franco, Angelica Nogueira, Angelica Nogueira, Renner Saraiva, Lucilene Xavier, Elizabetth Franco, Simone Moreira, Débora Costa, Kazuhiko Oliveira, Anita Oliveira, Nicemar Macedo Filho, Edrisio Barros, Edson Xavier, Marcele Costa, Marcele Costa, Walkiria Oliveira Jr., Débora Macedo, Benedikt-Jan Nogueira, Didacio Pereira, Heloisa Silva Jr., Yassuyoshi Costa, Márcia Xavier, Edna Braga,  , Srta. Fredison Costa, Christian Macedo, Eronides Souza, Graziela Moreira, Abílio Moreira, Elizabetth Oliveira Neto, Cecília Macedo, *&__?<)}$&, 34428, +!(/~/#::,,  , Juan Macedo, Juan Macedo, Juan Macedo, Juan Macedo, Juan Macedo, Juan Macedo, Juan Macedo, Juan Macedo, Juan Macedo, Juan Macedo, Juan Macedo, Juan Macedo, Juan Macedo, 54300, *%;#;{/_*$,  , Margarete Carvalho, Mar"
        };
    
        cy.request({  
            method: 'GET', 
            url: 'http://localhost:8400/api/company/1' 
        }).then((response) => { 
            expect(response.status).to.equal(200); 
            const company = response.body;
    
            expect(company.id_company).to.equal(expectedCompany.id_company);
            expect(company.name).to.equal(expectedCompany.name);
            expect(company.cnpj).to.equal(expectedCompany.cnpj);
            expect(company.show).to.equal(expectedCompany.show);
            expect(company.id_adress).to.equal(expectedCompany.id_adress);
            expect(company.cep).to.equal(expectedCompany.cep);
            expect(company.country).to.equal(expectedCompany.country);
            expect(company.state).to.equal(expectedCompany.state);
            expect(company.city).to.equal(expectedCompany.city);
            expect(company.street).to.equal(expectedCompany.street);
            expect(company.number).to.equal(expectedCompany.number);
            expect(company.district).to.equal(expectedCompany.district);
            expect(company.additional).to.equal(expectedCompany.additional);
            expect(company.users).to.equal(expectedCompany.users);
        });
    });


    it('Cenário Válido: Criar Empresa', () => { 
      
        cy.request({  
  
          method: 'POST', 
          url: 'http://localhost:8400/api/company/create',
          body: {
            "name": "QA Teste",
            "cnpj": "12312312311",
            "adress": {
                "cep": "333333333",
                "country": "Brasil",
                "city": "Porto Alegre",
                "street_location": "Rua Teste",
                "number": "33",
                "district": "Bairro Teste"
            }
        }

  
        }).then((response) => { 
  
          expect(response.status).to.equal(200); 
          

        });
  
      });


    it('Cenário Válido: Atualizar informações da Empresa', () => { 
    
    cy.request({  

        method: 'PATCH', 
        url: 'http://localhost:8400/api/company/1/update',
        body: {
            "name": "QA Teste",
            "cnpj": "011033011",
            "adress": {
                "cep": "11111333",
                "country": "Brasil",
                "state": "RS",
                "city": "Porto Alegre",
                "street": "Rua Teste",
                "number": "15",
                "district": "Bairro Teste"
            }
        }


    }).then((response) => { 

        expect(response.status).to.equal(200); 
        

    });

    });


    it('Cenário Válido: Deletar usuário', () => { 
      
        cy.request({  
  
          method: 'DELETE', 
          url: 'http://localhost:8400/api/company/1/delete ' 
  
        }).then((response) => { 
  
          expect(response.status).to.equal(200); 
          expect(response.body.message).to.equal('data deleted successfully!')
  
        }) 
  
      })


});