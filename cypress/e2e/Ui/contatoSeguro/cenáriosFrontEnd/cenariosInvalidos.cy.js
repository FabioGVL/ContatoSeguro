import elem from '../../../../support/elements';

describe('Testes de UI/FrontEnd cadastro Contato Seguro', () => {

    beforeEach( () => {
        cy.visit('/')
            
    });


    it('Cenário Inválido: Campo Nome (Números)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.numero)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.get('i').should('have.text', 'Nome inválido');


    });


    it('Cenário Inválido: Campo Nome (Caracteres especiais)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.caracteresEspeciais)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.get('i').should('have.text', 'Nome inválido');


    });


    it('Cenário Inválido: Campo Nome (Espaço em branco)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(' ')
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.get('i').should('have.text', 'Nome inválido');


    });


    it('Cenário Inválido: Campo Telefone (Letras)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.letras)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.get('i').should('have.text', 'Telefone inválido');


    });


    it('Cenário Inválido: Campo Telefone (Caracteres especiais)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.caracteresEspeciais)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.get('i').should('have.text', 'Telefone inválido');


    });


    it('Cenário Inválido: Campo Telefone (Espaço em branco)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(' ')
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.get('i').should('have.text', 'Nome inválido');


    });


    it('Cenário Inválido: Campo E-mail (Fora do formato padrão)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type('fulano.teste.com')
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.get('i').should('have.text', 'Email inválido');

    });


    it('Cenário Inválido: Campo E-mail (Excesso do caracter especial @)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type('fulano@@teste.com')
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.get('i').should('have.text', 'Email inválido');

    });


    it('Cenário Inválido: Campo E-mail (Espaço em branco)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type('fulano @teste.com')
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.get('i').should('have.text', 'Email inválido');

    });


    it('Cenário Inválido: Campo E-mail (Email existente)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type('emailexistente@teste.com')
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.get('i').should('have.text', 'Email já cadastrado');

    });


    it('Cenário Inválido: Campo Data (Ano posterior ao vigente)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.dataFutura)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.get('i').should('have.text', 'Data inválida');

    });


    it('Cenário Inválido: Campo Data (Data de nascimento recente)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.dataVigente)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.get('i').should('have.text', 'Data inválida');

    });


    it('Cenário Inválido: Campo Cidade (Números)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.numero)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.get('i').should('have.text', 'Cidade inválida');


    });


    it('Cenário Inválido: Campo Cidade (Caracteres especiais)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.Empresa123email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.caracteresEspeciais)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.get('i').should('have.text', 'Cidade inválida');


    });


    it('Cenário Inválido: Campo Cidade (Espaço em branco)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(' ')
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.get('i').should('have.text', 'Cidade inválida');


    });


    it('Cenário Inválido: Campo Empresa (Números)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).type(elem.numero) 
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.wait(500)
        cy.get('i').should('have.text','Insira as empresas do usuário!');
        


    });


    it('Cenário Inválido: Campo Empresa (Caracteres especiais)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).type(elem.caracteresEspeciais) 
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.wait(500)
        cy.get('i').should('have.text','Insira as empresas do usuário!');


    });


    it('Cenário Inválido: Campo Empresa (Espaço em branco)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).type(' ') 
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.wait(500)
        cy.get('i').should('have.text','Insira as empresas do usuário!');


    });


});