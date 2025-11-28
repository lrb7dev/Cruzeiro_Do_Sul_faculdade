-- =======================================================
-- 2. DML: INSERÇÃO DE DADOS EM ORDEM DE DEPENDÊNCIA (INSERT)
-- =======================================================

-- -----------------------------------------------------
-- 1. Tabelas Pai (Sem FKs dependentes)
-- -----------------------------------------------------

-- ENDERECO
INSERT INTO ENDERECO (CEP, Logradouro, Bairro, Cidade, Estado) VALUES
('36880000', 'Rua Principal', 'Centro', 'Carangola', 'MG'),
('20040001', 'Rua da Assembleia', 'Centro', 'Rio de Janeiro', 'RJ'),
('01001000', 'Praça da Sé', 'Sé', 'São Paulo', 'SP'),
('70040100', 'Eixo Monumental', 'Asa Norte', 'Brasília', 'DF');

-- EDITORA
INSERT INTO EDITORA (Nome_Editora) VALUES
('Editora Record'),
('Companhia das Letras'),
('Editora Rocco'),
('Intrínseca');

-- AUTOR
INSERT INTO AUTOR (Nome_Autor) VALUES
('Gabriel Garcia Marquez'),
('Clarice Lispector'),
('J.R.R. Tolkien'),
('Chimamanda Ngozi Adichie'),
('Yuval Noah Harari');

-- TRANSPORTADORA
INSERT INTO TRANSPORTADORA (Nome_Transportadora) VALUES
('Loggi Express'),
('Correios BR'),
('JadLog');

-- -----------------------------------------------------
-- 2. Tabelas Principais (Dependem das Tabelas Pai)
-- -----------------------------------------------------

-- CLIENTE
INSERT INTO CLIENTE (Nome, Email, CEP) VALUES
('Ana Silva', 'ana.silva@email.com', '01001000'), -- SP
('Bruno Costa', 'bruno.costa@email.com', '20040001'), -- RJ
('Carlos Dantas', 'carlos.dantas@email.com', '36880000'); -- MG

-- LIVRO
INSERT INTO LIVRO (ISBN, Titulo, Preco_Custo, Preco_Venda, Quantidade_Estoque, ID_Editora) VALUES
('9788501018867', 'Cem Anos de Solidão', 35.00, 79.90, 50, 1), -- Record
('9788535914838', 'A Hora da Estrela', 25.00, 54.90, 30, 2), -- Cia das Letras
('9788520937861', 'Sapiens: Uma Breve História da Humanidade', 60.00, 119.90, 20, 3), -- Rocco
('9788580579998', 'Americanah', 45.00, 89.90, 40, 4); -- Intrínseca

-- -----------------------------------------------------
-- 3. Tabelas de Ligação e Relacionamento
-- -----------------------------------------------------

-- PREFERENCIA_CLIENTE
INSERT INTO PREFERENCIA_CLIENTE (ID_Cliente, Preferencia) VALUES
(1, 'Ficção Clássica'),
(1, 'Romance'),
(2, 'Filosofia'),
(3, 'Ficção Clássica'),
(3, 'História');

-- LIVRO_AUTOR (Associa autores aos livros)
INSERT INTO LIVRO_AUTOR (ISBN, ID_Autor) VALUES
('9788501018867', 1), -- Cem Anos de Solidão (Marquez)
('9788535914838', 2), -- A Hora da Estrela (Lispector)
('9788520937861', 5), -- Sapiens (Harari)
('9788580579998', 4); -- Americanah (Adichie)

-- -----------------------------------------------------
-- 4. Vendas, Subtipos e Detalhes
-- -----------------------------------------------------

-- VENDA (Venda 1: Física)
INSERT INTO VENDA (ID_Venda, ID_Cliente, Tipo_Venda) VALUES
(1, 1, 'Fisica');
INSERT INTO VENDA_FISICA (ID_Venda, Data_Hora_Transacao) VALUES
(1, '2024-10-20 10:30:00');

-- VENDA (Venda 2: Online)
INSERT INTO VENDA (ID_Venda, ID_Cliente, Tipo_Venda) VALUES
(2, 2, 'Online');
INSERT INTO VENDA_ONLINE (ID_Venda, Data_Pedido, Forma_Pagamento) VALUES
(2, '2024-10-21 14:00:00', 'Cartão de Crédito');

-- VENDA (Venda 3: Online)
INSERT INTO VENDA (ID_Venda, ID_Cliente, Tipo_Venda) VALUES
(3, 3, 'Online');
INSERT INTO VENDA_ONLINE (ID_Venda, Data_Pedido, Forma_Pagamento) VALUES
(3, '2024-10-22 18:45:00', 'PIX');

-- ITEM_VENDA (Detalhes da Venda 2)
INSERT INTO ITEM_VENDA (ID_Venda, ID_Item, ISBN, Preco_Venda_Realizada, Quantidade) VALUES
(2, 1, '9788501018867', 79.90, 1), -- Cem Anos
(2, 2, '9788580579998', 89.90, 1); -- Americanah

-- ITEM_VENDA (Detalhes da Venda 3)
INSERT INTO ITEM_VENDA (ID_Venda, ID_Item, ISBN, Preco_Venda_Realizada, Quantidade) VALUES
(3, 1, '9788520937861', 119.90, 2); -- Sapiens (2 cópias)

-- ENVIO (Associa Venda 2 e 3)
INSERT INTO ENVIO (ID_Venda, CEP_Envio, ID_Transportadora) VALUES
(2, '20040001', 1), -- RJ, Loggi
(3, '36880000', 2); -- MG, Correios

-- AVALIACAO (Cliente 2 avalia livro de ISBN 9788501018867)
INSERT INTO AVALIACAO (ID_Cliente, ISBN, Avaliacao, Comentario) VALUES
(2, '9788501018867', 5, 'Um clássico obrigatório. História e escrita impecáveis.');