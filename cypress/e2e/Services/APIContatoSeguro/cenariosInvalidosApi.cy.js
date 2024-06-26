describe('Cenários Inválidos API/BackEnd Contato Seguro', () => {


it('Cenário inválido: Buscar usuário inválido (ID apenas com letras)', () => { 
      
    cy.request({  

      method: 'GET', 
      url: 'http://localhost:8400/api/user/aa',
      failOnStatusCode: false 

    }).then((response) => { 

    expect(response.status).to.equal(400); 
    expect(response.body.message).to.equal('invalid data!');
         
    }) 

  })


it('Cenário inválido: Buscar usuário inválido (ID com números e letras)', () => { 
      
    cy.request({  

      method: 'GET', 
      url: 'http://localhost:8400/api/user/33aa',
      failOnStatusCode: false 

    }).then((response) => {  

    expect(response.status).to.equal(400); 
    expect(response.body.message).to.equal('invalid data!');
        
    })

})


it('Cenário inválido: Buscar usuário inválido (ID com números e caracteres especiais)', () => { 
      
    cy.request({  

      method: 'GET', 
      url: 'http://localhost:8400/api/user/33@@',
      failOnStatusCode: false 

    }).then((response) => {  

    expect(response.status).to.equal(400); 
    expect(response.body.message).to.equal('invalid data!'); 
        
    })

})


it('Cenário inválido: Buscar usuário inválido (ID com caracteres especiais)', () => { 
      
    cy.request({  

      method: 'GET', 
      url: 'http://localhost:8400/api/user/@@',
      failOnStatusCode: false 

    }).then((response) => {  

    expect(response.status).to.equal(400); 
    expect(response.body.message).to.equal('invalid data!');   
    
    })

})


it('Cenário inválido: Buscar usuário inválido (ID inexistente – Com dígitos)', () => { 
      
    cy.request({  

      method: 'GET', 
      url: 'http://localhost:8400/api/user/500',
      failOnStatusCode: false 

    }).then((response) => {  

    expect(response.status).to.equal(404); 
    expect(response.body.message).to.equal('requested data not found!');
        
    })

})


it('Cenário inválido: Buscar usuário inválido (ID inexistente – Em branco)', () => { 
      
    cy.request({  

      method: 'GET', 
      url: 'http://localhost:8400/api/user/',
      failOnStatusCode: false 

    }).then((response) => { 
        
    expect(response.status).to.equal(405); 
        
    })

})


it('Cenário inválido: Buscar usuário inválido (ID negativo)', () => { 
      
    cy.request({  

      method: 'GET', 
      url: 'http://localhost:8400/api/user/-1',
      failOnStatusCode: false 

    }).then((response) => {
        
    expect(response.status).to.equal(404); 
    expect(response.body.message).to.equal('requested data not found!');
        
    })

})


it('Cenário inválido: Deletar usuário inválido (ID inexistente/inválido)', () => { 
      
    cy.request({  

      method: 'DELETE', 
      url: 'http://localhost:8400/api/user/999/delete',
      failOnStatusCode: false 

    }).then((response) => {  

    expect(response.status).to.equal(404); 
    expect(response.body.message).to.equal('unable to delete data!');
        
    })

})


it('Cenário Inválido: Criar usuário (Campos obrigatórios não inclusos)', () => { 
      
    cy.request({  

      method: 'POST', 
      url: 'http://localhost:8400/api/user/create', 
      failOnStatusCode: false,
      body: {
        "name": "Marco Aurélio",
        "e-mail": "MarcoA@teste.com",
        "companies": ["Empresa 1"]
    }
    

    }).then((response) => {  

    expect(response.status).to.equal(400); 
    expect(response.body.message).to.equal('invalid data!');
        
    })

})


it('Cenário inválido: Buscar empresa inválida (ID apenas com letras)', () => { 
      
    cy.request({  

      method: 'GET', 
      url: 'http://localhost:8400/api/company/aa',
      failOnStatusCode: false 

    }).then((response) => { 
        
    expect(response.status).to.equal(400); 
    expect(response.body.message).to.equal('invalid data!');
        
    })

})


it('Cenário inválido: Buscar empresa inválida (ID com números e letras)', () => { 
      
    cy.request({  

        method: 'GET', 
        url: 'http://localhost:8400/api/company/1aa',
        failOnStatusCode: false 
  
      }).then((response) => { 
          
    expect(response.status).to.equal(400); 
    expect(response.body.message).to.equal('invalid data!');
        
    })

})


it('Cenário inválido: Buscar empresa inválida (ID com números e caracteres especiais)', () => { 
      
    cy.request({  

        method: 'GET', 
        url: 'http://localhost:8400/api/company/1@@',
        failOnStatusCode: false 
  
      }).then((response) => { 
          
    expect(response.status).to.equal(400); 
    expect(response.body.message).to.equal('invalid data!');
        
    })

})


it('Cenário inválido: Buscar empresa inválida (ID com caracteres especiais)', () => { 
      
    cy.request({  

        method: 'GET', 
        url: 'http://localhost:8400/api/company/@@',
        failOnStatusCode: false 
  
      }).then((response) => { 
          
    expect(response.status).to.equal(400); 
    expect(response.body.message).to.equal('invalid data!');
        
    })

})


it('Cenário inválido: Buscar empresa inválida (ID inexistente – Com dígitos)', () => { 
      
    cy.request({  

        method: 'GET', 
        url: 'http://localhost:8400/api/company/500',
        failOnStatusCode: false 
  
      }).then((response) => { 
          
    expect(response.status).to.equal(404); 
    expect(response.body.message).to.equal('requested data not found!');
        
    })

})


it('Cenário inválido: Buscar empresa inválida (ID inexistente – Em branco)', () => { 
      
    cy.request({  

        method: 'GET', 
        url: 'http://localhost:8400/api/company/',
        failOnStatusCode: false 
  
      }).then((response) => { 
          
    expect(response.status).to.equal(405); 
    
        
    })

})


it('Cenário inválido: Buscar empresa inválida (ID negativo)', () => { 
      
    cy.request({  

        method: 'GET', 
        url: 'http://localhost:8400/api/company/-1',
        failOnStatusCode: false 
  
      }).then((response) => { 
          
    expect(response.status).to.equal(404); 
    expect(response.body.message).to.equal('requested data not found!');
        
    })

})


it('Cenário inválido: Deletar empresa inexistente (ID inexistene/inválido)', () => { 
      
    cy.request({  

        method: 'DELETE', 
        url: 'http://localhost:8400/api/company/999/delete',
        failOnStatusCode: false 
  
      }).then((response) => { 
          
    expect(response.status).to.equal(404); 
    expect(response.body.message).to.equal('unable to delete data!');
        
    })


})


});