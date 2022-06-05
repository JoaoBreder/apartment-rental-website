const Database = require('./config');

const initDb = {
    async init() {
        const db = await Database();

        // Tabela dos Locadores
        await db.exec(`
        CREATE TABLE LOCADOR (
            ID_LOCADOR INTEGER PRIMARY KEY AUTOINCREMENT,
            NOME VARCHAR(100) NOT NULL,
            LOGIN VARCHAR(100) NOT NULL,
            SENHA VARCHAR(12) NOT NULL
        )`);

        await db.exec(`CREATE INDEX LOGIN_INDEX ON LOCADOR (LOGIN)`);

        // Tabela dos Clientes
        await db.exec(`
        CREATE TABLE CLIENTE (
            ID_CLIENTE INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            NOME VARCHAR(100) NOT NULL,
            EMAIL VARCHAR(100) NOT NULL,
            CPF CHAR(14) NOT NULL,
            TELEFONE_1 CHAR(15) NOT NULL,
            TELEFONE_2 CHAR(15)
        )`);

        // Tabela dos Imóveis
        await db.exec(`
        CREATE TABLE IMOVEL (
            ID_IMOVEL INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
            ID_PEDIDO INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            ID_CLIENTE INTEGER NOT NULL REFERENCES 
                CLIENTE (ID_CLIENTE),
            ID_LOCADOR INTEGER NOT NULL REFERENCES
                LOCADOR (ID_LOCADOR),
            NUMERO VARCHAR(100) NOT NULL,
            DATA DATE NOT NULL,
            INICIO_LOCACAO DATE NOT NULL,
            FIM_LOCACAO DATE NOT NULL,
            DIAS_LOCACAO INTEGER NOT NULL,
            VALOR_TOTAL NUMERIC(10, 2) NOT NULL,
            TAXA_CANCELAMENTO NUMERIC(10, 2) NOT NULL
        )`);

        // Tabela das Formas de Pagamento
        await db.exec(`
        CREATE TABLE FORMA_PAGAMENTO (
            ID_FORMA_PAGAMENTO INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            NOME VARCHAR(100) NOT NULL
        )`);

        // Tabela das Palavras-Chave
        await db.exec(`
        CREATE TABLE PALAVRA_CHAVE (
            ID_PALAVRA_CHAVE INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            PALAVRAC_CHAVE VARCHAR(100) NOT NULL
        )`);

        // Tabela para relacionar Forma de Pagamento e Pedido
        await db.exec(`
        CREATE TABLE FORMA_PAGAMENTO_PEDIDO (
            ID_PEDIDO INTEGER NOT NULL REFERENCES
                PEDIDO (ID_PEDIDO),
            ID_FORMA_PAGAMENTO INTEGER NOT NULL REFERENCES
                FORMA_PAGAMENTO (ID_FORMA_PAGAMENTO),
            VALOR NUMERIC(10, 2) NOT NULL,
            PRIMARY KEY (ID_PEDIDO, ID_FORMA_PAGAMENTO)
        )`);

        // Tabela para relacionar Imóvel e Palavra Chave
        await db.exec(`
        CREATE TABLE IMOVEL_PALAVRA_CHAVE (
            ID_IMOVEL INTEGER NOT NULL REFERENCES
                IMOVEL (ID_IMOVEL),
            ID_PALAVRA_CHAVE INTEGER NOT NULL REFERENCES
                PALAVRA_CHAVE (ID_PALAVRA_CHAVE),
            PRIMARY KEY (ID_IMOVEL, ID_PALAVRA_CHAVE)
        )`);

        await db.close();
    }
};

// Criar banco de dados e suas tabelas
initDb.init();