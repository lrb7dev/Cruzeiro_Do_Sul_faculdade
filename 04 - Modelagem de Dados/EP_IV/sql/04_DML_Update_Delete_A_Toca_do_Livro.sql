-- =======================================================
-- 4. DML: ATUALIZAÇÃO E EXCLUSÃO DE DADOS (UPDATE e DELETE)
-- =======================================================

-- -----------------------------------------------------
-- A. COMANDOS DE ATUALIZAÇÃO (UPDATE)
-- -----------------------------------------------------

-- UPDATE 1: Aumentar o preço de venda de um livro específico.
-- Aumenta o preço de venda do livro 'A Hora da Estrela' em 10%.
UPDATE LIVRO
SET Preco_Venda = Preco_Venda * 1.10
WHERE ISBN = '9788535914838';

-- UPDATE 2: Alterar o status de pagamento de uma venda online.
-- Supondo que a Venda 2 tenha tido sua forma de pagamento contestada e alterada para 'Transferência Bancária'.
UPDATE VENDA_ONLINE
SET Forma_Pagamento = 'Transferência Bancária'
WHERE ID_Venda = 2;

-- UPDATE 3: Corrigir o estoque de um livro.
-- O estoque do livro 'Americanah' estava errado e precisa ser corrigido para 50 unidades.
UPDATE LIVRO
SET Quantidade_Estoque = 50
WHERE Titulo = 'Americanah' AND ID_Editora = (SELECT ID_Editora FROM EDITORA WHERE Nome_Editora = 'Intrínseca');

-- -----------------------------------------------------
-- B. COMANDOS DE EXCLUSÃO (DELETE)
-- -----------------------------------------------------

-- DELETE 1: Excluir uma preferência de leitura de um cliente (Tabela de Ligação).
-- O Cliente 3 não tem mais interesse em 'História'.
DELETE FROM PREFERENCIA_CLIENTE
WHERE ID_Cliente = 3 AND Preferencia = 'História';

-- DELETE 2: Excluir uma avaliação (Tabela Filha).
-- A Avaliação do cliente 2 para 'Cem Anos de Solidão' foi removida.
DELETE FROM AVALIACAO
WHERE ID_Cliente = 2 AND ISBN = '9788501018867';

-- DELETE 3: Excluir o Cliente 3 (Exemplo de Exclusão de Entidade Pai).
-- Para excluir o Cliente 3 será preciso remover:
-- 1. Todas as VENDAS associadas ao Cliente 3.
-- 2. Todos os subtipos de venda (VENDA_ONLINE / VENDA_FISICA) associados a essas vendas.
-- 3. Todos os ITENS_VENDA associados a essas vendas.
-- 4. Todos os ENVIOS associados a essas vendas.
-- (As preferência já foi excluída no DELETE 1).

-- Excluir o Envio relacionado à Venda 3 (Cliente 3)
DELETE FROM ENVIO WHERE ID_Venda = 3;

-- Excluir os Itens de Venda relacionados à Venda 3
DELETE FROM ITEM_VENDA WHERE ID_Venda = 3;

-- Excluir o Subtipo de Venda (Online) relacionado à Venda 3
DELETE FROM VENDA_ONLINE WHERE ID_Venda = 3;

-- Excluir a Venda 3 (Tabela Pai da transação)
DELETE FROM VENDA WHERE ID_Venda = 3;

-- Agora podemos excluir o Cliente 3
DELETE FROM CLIENTE WHERE ID_Cliente = 3;

-- VERIFICAÇÃO FINAL 
-- SELECT * FROM CLIENTE;