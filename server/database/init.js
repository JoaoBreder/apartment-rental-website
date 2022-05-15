const Database = require('./config');

const initDb = {
    async init() {
        const db = await Database();

        // Tabela dos Locadores
        await db.exec(`
        CREATE TABLE LOCADOR (
            ID_LOCADOR INT NOT NULL PRIMARY KEY,
            NOME VARCHAR(100) NOT NULL,
            LOGIN VARCHAR(100) NOT NULL,
            SENHA VARCHAR(12) NOT NULL
        )`);

        // Tabela dos Clientes
        await db.exec(`
        CREATE TABLE CLIENTE (
            ID_CLIENTE INT NOT NULL PRIMARY KEY,
            NOME VARCHAR(100) NOT NULL,
            EMAIL VARCHAR(100) NOT NULL,
            CPF CHAR(14) NOT NULL,
            TELEFONE_1 CHAR(15) NOT NULL,
            TELEFONE_2 CHAR(15)
        )`);

        // Tabela dos Imóveis
        await db.exec(`
        CREATE TABLE IMOVEL (
            ID_IMOVEL INT NOT NULL PRIMARY KEY,
            LOGRADOURO VARCHAR(100) NOT NULL,
            NUMERO VARCHAR(10) NOT NULL,
            BAIRRO VARCHAR(50) NOT NULL,
            COMPLEMENTO VARCHAR(100) NOT NULL,
            DESCRICAO VARCHAR(250) NOT NULL,
            VALOR_DIARIA NUMERIC(10, 2) NOT NULL,
            DISPONIBILIDADE CHAR(1) NOT NULL DEFAULT "D"
        )`);

        // Tabela dos Pedidos
        await db.exec(`
        CREATE TABLE PEDIDO (
            ID_PEDIDO INT NOT NULL PRIMARY KEY,
            ID_CLIENTE INT NOT NULL REFERENCES 
                CLIENTE (ID_CLIENTE),
            ID_LOCADOR INT NOT NULL REFERENCES
                LOCADOR (ID_LOCADOR),
            NUMERO VARCHAR(100) NOT NULL,
            DATA DATE NOT NULL,
            INICIO_LOCACAO DATE NOT NULL,
            FIM_LOCACAO DATE NOT NULL,
            DIAS_LOCACAO INT NOT NULL,
            VALOR_TOTAL NUMERIC(10, 2) NOT NULL,
            TAXA_CANCELAMENTO NUMERIC(10, 2) NOT NULL
        )`);

        // Tabela das Formas de Pagamento
        await db.exec(`
        CREATE TABLE FORMA_PAGAMENTO (
            ID_FORMA_PAGAMENTO INT NOT NULL PRIMARY KEY,
            NOME VARCHAR(100) NOT NULL
        )`);

        // Tabela das Palavras-Chave
        await db.exec(`
        CREATE TABLE PALAVRA_CHAVE (
            ID_PALAVRA_CHAVE INT NOT NULL PRIMARY KEY,
            PALAVRAC_CHAVE VARCHAR(100) NOT NULL
        )`);

        // Tabela para relacionar Forma de Pagamento e Pedido
        await db.exec(`
        CREATE TABLE FORMA_PAGAMENTO_PEDIDO (
            ID_PEDIDO INT NOT NULL REFERENCES
                PEDIDO (ID_PEDIDO),
            ID_FORMA_PAGAMENTO INT NOT NULL REFERENCES
                FORMA_PAGAMENTO (ID_FORMA_PAGAMENTO),
            VALOR NUMERIC(10, 2) NOT NULL,
            PRIMARY KEY (ID_PEDIDO, ID_FORMA_PAGAMENTO)
        )`);

        // Tabela para relacionar Imóvel e Palavra Chave
        await db.exec(`
        CREATE TABLE IMOVEL_PALAVRA_CHAVE (
            ID_IMOVEL INT NOT NULL REFERENCES
                IMOVEL (ID_IMOVEL),
            ID_PALAVRA_CHAVE INT NOT NULL REFERENCES
                PALAVRA_CHAVE (ID_PALAVRA_CHAVE),
            PRIMARY KEY (ID_IMOVEL, ID_PALAVRA_CHAVE)
        )`);

        await db.close();
    }
};

// Criar banco de dados e suas tabelas
initDb.init();