# 📚 A Toca do Livro: Implementação de Modelo Lógico Normalizado (3FN)

## 📌 Visão Geral do Projeto

Este repositório contém os scripts SQL (DDL e DML) para a implementação e manipulação do banco de dados relacional do minimundo **"A Toca do Livro"**. O projeto foi desenvolvido com base em um Modelo Lógico de Dados revisado e rigorosamente normalizado para a **Terceira Forma Normal (3FN)**, garantindo integridade, atomicidade e mínima redundância de dados.

**Ferramenta Utilizada:** MySQL Workbench.

---

## 🏗️ Modelo Lógico e Normalização (3FN)

O modelo original foi revisado para corrigir violações das Formas Normais (1FN, 2FN e 3FN), resultando em 14 entidades.

### Principais Decomposições para 3FN:

| Entidade Original | Violação Corrigida | Nova Estrutura (Normalizada) |
| :--- | :--- | :--- |
| **CLIENTE** | Dependência Transitiva (`CEP` -> `Endereço`) e 1FN (`Preferências`) | Decomposto em **CLIENTE**, **ENDERECO**, e **PREFERENCIA\_CLIENTE**. |
| **LIVRO** | Dependência Transitiva (`Editora`) e 1FN (`Autor`) | Decomposto em **LIVRO**, **EDITORA**, **AUTOR**, e **LIVRO\_AUTOR**. |
| **VENDA** | Dependência Transitiva por `Tipo_Venda` (campos nulos/contingentes) | Implementado como Supertipo (**VENDA**) com Subtipos Exclusivos (**VENDA\_FISICA** e **VENDA\_ONLINE**). |
| **ENVIO** | Dependência Transitiva (`Transportadora`) | Decomposto em **ENVIO** e **TRANSPORTADORA**. |

---

## 🚀 Instruções de Execução (MySQL Workbench)

Para recriar e interagir com o banco de dados `a_toca_do_livro`, siga a ordem de execução dos scripts:

### Pré-Requisito

1.  Ter o **MySQL Server** ativo e rodando.
2.  Ter o **MySQL Workbench** instalado e conectado ao servidor.

### Sequência de Scripts

| Ordem | Arquivo | Conteúdo | Objetivo |
| :---: | :--- | :--- | :--- |
| **1** | `01_DDL_Criacao_Tabelas_A_Toca_do_Livro.sql` | `CREATE SCHEMA`, `CREATE TABLE` | Cria o banco de dados `a_toca_do_livro` e todas as 14 tabelas, definindo PKs, FKs e restrições de integridade. |
| **2** | `02_DML_Populacao_Dados_A_Toca_do_Livro.sql` | `INSERT INTO` | Povoa todas as tabelas com dados de exemplo, respeitando a ordem de dependência das chaves estrangeiras. |
| **3** | `03_DML_Consultas_A_Toca_do_Livro.sql` | `SELECT` (4 Consultas) | Demonstra a extração de dados utilizando `JOIN`s, `GROUP BY`, `ORDER BY`, e funções de agregação, provando a eficácia do modelo 3FN. |
| **4** | `04_DML_Update_Delete_A_Toca_do_Livro.sql` | `UPDATE`, `DELETE` (6 Comandos) | Realiza a manipulação de dados, corrigindo estoques e preços (`UPDATE`), e realizando exclusões em cascata e pontuais (`DELETE`), testando a integridade referencial. |

### Como Executar no Workbench:

1.  Abra a conexão com o servidor MySQL no Workbench.
2.  Vá em `File > Open SQL Script...` e abra o arquivo `01_DDL_...sql`.
3.  Clique no ícone de **Raio grande** (Executar Tudo) para criar as tabelas.
4.  Repita o processo para os scripts `02_DML_...sql`, `03_DML_...sql` e `04_DML_...sql` em sequência.

---

## 🔎 DML em Destaque

O script `03_DML_Consultas_A_Toca_do_Livro.sql` contém exemplos avançados de consulta:

### Exemplo de Consulta 2: Livros Mais Vendidos
Esta consulta utiliza 5 JOINs para ligar a venda ao item, livro, autor e editora, provando que a decomposição em 3FN permite análises complexas sem redundância.

```sql
SELECT
    L.Titulo,
    A.Nome_Autor,
    ED.Nome_Editora,
    SUM(IV.Quantidade) AS Total_Unidades_Vendidas
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
