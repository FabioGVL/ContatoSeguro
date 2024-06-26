import elem from '../../../../support/elements';

describe('Testes de UI/FrontEnd cadastro Contato Seguro', () => {

    beforeEach( () => {
        cy.visit('/')
            
    });


    it('Cenário Válido: Validação de informações do corpo da página inicial', () => {

        cy.get(elem.logocontatoSeguro).should(`be.visible`)
        cy.get(elem.novoUsuario).should('be.visible')
        cy.get(`${elem.gradeNome}, ${elem.gradeEmail}, ${elem.gradeTelefone}, ${elem.gradeData}, ${elem.gradeCidade}, ${elem.gradeEmpresa}`).should('be.visible');


    });


    it('Cenário Válido: Validação do botão +Novo Usuário', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.popUpCadastro).should('be.visible')
        cy.get(`${elem.campoNome}, ${elem.campoEmail}, ${elem.CampoTelefone}, ${elem.CampoData}, ${elem.CampoCidade}, ${elem.CampoEmpresa}`).should('be.visible');

    });


    it('Cenário Válido: Validação de pop-up', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.popUpCadastro).should('be.visible')
        cy.get(`${elem.campoNome}, ${elem.campoEmail}, ${elem.CampoTelefone}, ${elem.CampoData}, ${elem.CampoCidade}, ${elem.CampoEmpresa}`).should('be.visible')
        cy.get(`${elem.botaoSalvar},${elem.botaoFechar}`).should('be.visible');

    });


    it('Cenário Válido: Cadastro de Novo Usuário', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
                
    })


    it('Cenário Válido: Edição de Usuário', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get(elem.botaoEditar).should('be.visible')
        cy.get(elem.botaoEditar).click();
        
    })


    it('Cenário Válido: Exclusão de Usuário', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get(elem.botaoExcluir).should('be.visible')
        cy.get(elem.botaoExcluir).click()
        cy.wait(500)
        cy.get('.swal2-popup').should('be.visible')
        cy.wait(500)
        cy.get('i').should('have.text','Usuário deletado com sucesso!');
                
    })


    it('Cenário Válido: Validação do campo Nome (campo obrigatório)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get(elem.campoNome).should('have.attr', 'required');
                
    })


    it('Cenário Válido: Validação do campo Telefone (campo obrigatório)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get(elem.campoTelefone).should('have.attr', 'required');
                
    })
            

    it('Cenário Válido: Validação do campo E-mail (campo obrigatório)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get(elem.campoEmail).should('have.attr', 'required');
                
    })


    it('Cenário Válido: Validação do campo Data (campo obrigatório)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get(elem.campoData).should('have.attr', 'required');
                
    })


    it('Cenário Válido: Validação do campo Cidade (campo obrigatório)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoEmpresa).click() 
        const randomIndex = Math.floor(Math.random() * 3) + 1
        cy.wait(500)
        cy.get(`${elem.Empresa123}(${randomIndex})`).scrollIntoView().click({ force: true })
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get(elem.campoCidade).should('have.attr', 'required');
                
    })


    it('Cenário Válido: Validação do campo Cidade (campo obrigatório)', () => {

        cy.get(elem.novoUsuario).click()
        cy.get(elem.campoNome).type(elem.nome)
        cy.get(elem.campoEmail).type(elem.email)
        cy.get(elem.campoTelefone).type(elem.telefone)
        cy.get(elem.campoData).type(elem.data)
        cy.get(elem.campoCidade).type(elem.cidade)
        cy.get(elem.botaoSalvar).click({ force: true })
        cy.get('.swal2-popup').should('be.visible')
        cy.wait(500)
        cy.get('i').should('have.text','Insira as empresas do usuário!');
                
    })


});