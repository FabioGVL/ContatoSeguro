import faker from 'faker-br';

const elements = {
    
    // Itens e ID's para validação do teste
    logocontatoSeguro: 'img[src*="data:image/png;base64"]',
    novoUsuario: '#new-user',
    botaoSalvar: '.sc-eCImPb > button',
    botaoFechar: '.react-modal-close > img',
    botaoEditar: ':nth-child(1) > :nth-child(7) > :nth-child(1) > img',
    botaoExcluir: ':nth-child(1) > :nth-child(7) > :nth-child(2)',
    popUpCadastro: '.ReactModal__Content',
    campoNome: '[placeholder="Nome"]',
    campoEmail: '[placeholder="Email"]',
    campoTelefone: '[placeholder="Telefone"]',
    campoCidade: '[placeholder="Cidade de nascimento"]',
    campoData: '[placeholder="Data de nascimento"]',
    campoEmpresa: '#search_input',
    gradeNome:'thead > tr > :nth-child(1)',
    gradeEmail:'thead > tr > :nth-child(2)',
    gradeTelefone:'thead > tr > :nth-child(3)',
    gradeCidade:'thead > tr > :nth-child(4)',
    gradeData:'thead > tr > :nth-child(5)',
    gradeEmpresa:'thead > tr > :nth-child(6)',
    Empresa123: '.optionContainer > :nth-child',
};

// Funções para gerar dados randomicos
function gerarDataAnoVigente() {
    const anoAtual = new Date().getFullYear();
    const mes = Math.floor(Math.random() * 12); // 0-11 (Janeiro-Dezembro)
    const dia = Math.floor(Math.random() * 28) + 1; // 1-28 para evitar problemas com meses diferentes
    const data = new Date(anoAtual, mes, dia);
    return data.toISOString().split('T')[0];
}

function gerarCaracteresEspeciais(tamanho) {
    const caracteresEspeciais = '!@#$%^&*()_+{}:"<>?|[];\',./`~';
    let resultado = '';
    for (let i = 0; i < tamanho; i++) {
        resultado += caracteresEspeciais.charAt(Math.floor(Math.random() * caracteresEspeciais.length));
    }
    return resultado;
}

// Gerando dados fake para cada execução do teste
const elementosAleatorios = {
    ...elements,
    get nome() {
        return faker.name.findName();
    },
    get email() {
        return faker.internet.email();
    },
    get telefone() {
        return faker.phone.phoneNumber('(##) #####-####');
    },
    get cidade() {
        return faker.address.city();
    },
    get data() {
        return faker.date.past(5).toISOString().split('T')[0];
    },
    get dataFutura() {
        return faker.date.future(5).toISOString().split('T')[0];
    },
    get dataVigente() {
        return gerarDataAnoVigente();
    },
    get numero() {
        return faker.random.number();
    },
    get letras() {
        return faker.random.alpha({ count: 10 });
    },
    get caracteresEspeciais() {
        return gerarCaracteresEspeciais(10);
    },
};

export default elementosAleatorios;