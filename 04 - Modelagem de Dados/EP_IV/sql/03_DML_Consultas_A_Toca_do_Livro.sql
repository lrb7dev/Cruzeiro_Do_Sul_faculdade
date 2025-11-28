-- =======================================================
-- 3. DML: CONSULTAS DE DADOS (SELECT, JOIN, GROUP BY)
-- =======================================================

-- Consulta 1: Listar Clientes e o Endereço Completo (Usando JOIN e Resolvendo a 3FN do Endereço)
-- Objetivo: Mostrar a informação completa de onde reside um cliente específico.
SELECT 
    C.Nome,
    C.Email,
    E.Logradouro,
    E.Bairro,
    E.Cidade,
    E.Estado
FROM 
    CLIENTE C
JOIN 
    ENDERECO E ON C.CEP = E.CEP
WHERE 
    C.Nome = 'Bruno Costa';

-- -----------------------------------------------------

-- Consulta 2: Livros mais Vendidos por Autor e Editora (Usando Múltiplos JOINs e GROUP BY)
-- Objetivo: Calcular a quantidade total vendida de cada livro e exibir detalhes do autor e editora.
SELECT
    L.Titulo,
    A.Nome_Autor,
    ED.Nome_Editora,
    SUM(IV.Quantidade) AS Total_Unidades_Vendidas,
    SUM(IV.Preco_Venda_Realizada * IV.Quantidade) AS Receita_Bruta
FROM
    ITEM_VENDA IV
JOIN
    LIVRO L ON IV.ISBN = L.ISBN
JOIN
    LIVRO_AUTOR LA ON L.ISBN = LA.ISBN
JOIN
    AUTOR A ON LA.ID_Autor = A.ID_Autor
JOIN
    EDITORA ED ON L.ID_Editora = ED.ID_Editora
GROUP BY 
    L.Titulo, A.Nome_Autor, ED.Nome_Editora
ORDER BY 
    Total_Unidades_Vendidas DESC
LIMIT 3;

-- -----------------------------------------------------

-- Consulta 3: Detalhes das Vendas Online Entregues (Usando UNION e Condições Complexas)
-- Objetivo: Listar o ID da venda, a data do pedido e a transportadora apenas para vendas do tipo Online que foram enviadas.
SELECT 
    V.ID_Venda,
    VO.Data_Pedido,
    T.Nome_Transportadora
FROM 
    VENDA V
JOIN
    VENDA_ONLINE VO ON V.ID_Venda = VO.ID_Venda
JOIN 
    ENVIO E ON V.ID_Venda = E.ID_Venda
JOIN 
    TRANSPORTADORA T ON E.ID_Transportadora = T.ID_Transportadora
ORDER BY 
    VO.Data_Pedido DESC;

-- -----------------------------------------------------

-- Consulta 4: Média de Avaliação por Livro (Usando Agregação)
-- Objetivo: Calcular a média de notas recebidas para cada livro que tenha pelo menos uma avaliação.
SELECT
    L.Titulo,
    AVG(A.Avaliacao) AS Media_Avaliacoes,
    COUNT(A.ID_Avaliacao) AS Total_Avaliacoes
FROM
    AVALIACAO A
JOIN
    LIVRO L ON A.ISBN = L.ISBN
GROUP BY
    L.Titulo
HAVING
    Total_Avaliacoes > 0
ORDER BY
    Media_Avaliacoes DESC;