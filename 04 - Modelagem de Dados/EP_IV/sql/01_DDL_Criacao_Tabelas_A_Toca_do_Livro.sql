-- 1. Criação do Schema (Banco de Dados)
CREATE SCHEMA IF NOT EXISTS `a_toca_do_livro` DEFAULT CHARACTER SET utf8mb4;
USE `a_toca_do_livro`;

-- -----------------------------------------------------
-- 1. Entidades de Endereço e Logística (Tabelas Pai)
-- -----------------------------------------------------

-- 1.1 ENDERECO
CREATE TABLE IF NOT EXISTS ENDERECO (
    CEP VARCHAR(8) NOT NULL PRIMARY KEY,
    Logradouro VARCHAR(100) NOT NULL,
    Bairro VARCHAR(100),
    Cidade VARCHAR(100) NOT NULL,
    Estado CHAR(2) NOT NULL
);

-- 1.2 EDITORA
CREATE TABLE IF NOT EXISTS EDITORA (
    ID_Editora INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nome_Editora VARCHAR(100) NOT NULL UNIQUE
);

-- 1.3 AUTOR
CREATE TABLE IF NOT EXISTS AUTOR (
    ID_Autor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nome_Autor VARCHAR(100) NOT NULL
);

-- 1.4 TRANSPORTADORA
CREATE TABLE IF NOT EXISTS TRANSPORTADORA (
    ID_Transportadora INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nome_Transportadora VARCHAR(100) NOT NULL UNIQUE
);

-- -----------------------------------------------------
-- 2. Entidades Principais
-- -----------------------------------------------------

-- 2.1 CLIENTE
CREATE TABLE IF NOT EXISTS CLIENTE (
    ID_Cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(150) NOT NULL,
    Email VARCHAR(150) NOT NULL UNIQUE,
    CEP VARCHAR(8) NOT NULL,
    FOREIGN KEY (CEP) REFERENCES ENDERECO(CEP)
);

-- 2.2 PREFERENCIA_CLIENTE (Tabela de Ligação M:N de Preferências)
CREATE TABLE IF NOT EXISTS PREFERENCIA_CLIENTE (
    ID_Cliente INT NOT NULL,
    Preferencia VARCHAR(50) NOT NULL,
    PRIMARY KEY (ID_Cliente, Preferencia),
    FOREIGN KEY (ID_Cliente) REFERENCES CLIENTE(ID_Cliente)
);

-- 2.3 LIVRO
CREATE TABLE IF NOT EXISTS LIVRO (
    ISBN VARCHAR(13) NOT NULL PRIMARY KEY, -- Usamos VARCHAR para ISBN
    Titulo VARCHAR(200) NOT NULL,
    Preco_Custo DECIMAL(10, 2) NOT NULL,
    Preco_Venda DECIMAL(10, 2) NOT NULL,
    Quantidade_Estoque INT NOT NULL DEFAULT 0,
    ID_Editora INT NOT NULL,
    FOREIGN KEY (ID_Editora) REFERENCES EDITORA(ID_Editora)
);

-- 2.4 LIVRO_AUTOR (Tabela de Ligação M:N de Autoria)
CREATE TABLE IF NOT EXISTS LIVRO_AUTOR (
    ISBN VARCHAR(13) NOT NULL,
    ID_Autor INT NOT NULL,
    PRIMARY KEY (ISBN, ID_Autor),
    FOREIGN KEY (ISBN) REFERENCES LIVRO(ISBN),
    FOREIGN KEY (ID_Autor) REFERENCES AUTOR(ID_Autor)
);

-- -----------------------------------------------------
-- 3. Entidades de Vendas e Logística
-- -----------------------------------------------------

-- 3.1 VENDA (Super-Tipo)
CREATE TABLE IF NOT EXISTS VENDA (
    ID_Venda INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ID_Cliente INT NOT NULL,
    Tipo_Venda ENUM('Fisica', 'Online') NOT NULL,
    FOREIGN KEY (ID_Cliente) REFERENCES CLIENTE(ID_Cliente)
);

-- 3.2 VENDA_FISICA (Sub-Tipo)
CREATE TABLE IF NOT EXISTS VENDA_FISICA (
    ID_Venda INT NOT NULL PRIMARY KEY,
    Data_Hora_Transacao DATETIME NOT NULL,
    FOREIGN KEY (ID_Venda) REFERENCES VENDA(ID_Venda)
);

-- 3.3 VENDA_ONLINE (Sub-Tipo)
CREATE TABLE IF NOT EXISTS VENDA_ONLINE (
    ID_Venda INT NOT NULL PRIMARY KEY,
    Data_Pedido DATETIME NOT NULL,
    Forma_Pagamento VARCHAR(50) NOT NULL,
    FOREIGN KEY (ID_Venda) REFERENCES VENDA(ID_Venda)
);

-- 3.4 ITEM_VENDA
CREATE TABLE IF NOT EXISTS ITEM_VENDA (
    ID_Venda INT NOT NULL,
    ID_Item INT NOT NULL,
    ISBN VARCHAR(13) NOT NULL,
    Preco_Venda_Realizada DECIMAL(10, 2) NOT NULL,
    Quantidade INT NOT NULL,
    PRIMARY KEY (ID_Venda, ID_Item), -- Chave Composta
    FOREIGN KEY (ID_Venda) REFERENCES VENDA(ID_Venda),
    FOREIGN KEY (ISBN) REFERENCES LIVRO(ISBN)
);

-- 3.5 ENVIO
CREATE TABLE IF NOT EXISTS ENVIO (
    ID_Envio INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ID_Venda INT NOT NULL UNIQUE, -- 1:1 com VENDA
    CEP_Envio VARCHAR(8) NOT NULL,
    ID_Transportadora INT NOT NULL,
    FOREIGN KEY (ID_Venda) REFERENCES VENDA(ID_Venda),
    FOREIGN KEY (ID_Transportadora) REFERENCES TRANSPORTADORA(ID_Transportadora)
);

-- 3.6 AVALIACAO
CREATE TABLE IF NOT EXISTS AVALIACAO (
    ID_Avaliacao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ID_Cliente INT NOT NULL,
    ISBN VARCHAR(13) NOT NULL,
    Avaliacao INT CHECK (Avaliacao BETWEEN 1 AND 5), -- CHECK para garantir notas válidas
    Comentario TEXT,
    FOREIGN KEY (ID_Cliente) REFERENCES CLIENTE(ID_Cliente),
    FOREIGN KEY (ISBN) REFERENCES LIVRO(ISBN)
);