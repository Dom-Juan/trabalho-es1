-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 19-Ago-2021 às 05:43
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `es1`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `coordinator`
--

CREATE TABLE `coordinator` (
  `id` int(11) NOT NULL,
  `nome` text COLLATE utf8_bin NOT NULL,
  `nome_usuario` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `informacoes_aluno`
--

CREATE TABLE `informacoes_aluno` (
  `tipo_curso` varchar(1) COLLATE utf8_bin NOT NULL,
  `id_informacoes` int(11) NOT NULL,
  `semestre` int(1) NOT NULL,
  `aprovacao_grad` int(2) NOT NULL,
  `aprovacao_opt` int(2) NOT NULL,
  `conceitos` bit(1) NOT NULL,
  `reprova_total` int(1) NOT NULL,
  `reprova_ultimo_semestre` int(1) DEFAULT NULL,
  `aprova_proef` bit(1) NOT NULL,
  `exame_quali` int(1) NOT NULL COMMENT '1-aprovado 2-reprovado 3-não',
  `limite_quali` text COLLATE utf8_bin NOT NULL,
  `limite_tese` text COLLATE utf8_bin NOT NULL,
  `artigos_aceito` int(11) NOT NULL,
  `artigo_aguardando` int(11) NOT NULL,
  `estagio_artigo_submissao` text COLLATE utf8_bin DEFAULT NULL,
  `estagio_pesquisa` text COLLATE utf8_bin NOT NULL,
  `participou_congresso_nacional` text COLLATE utf8_bin NOT NULL,
  `participou_congreso_exterior` text COLLATE utf8_bin NOT NULL,
  `participou_pesquisa_exterior` text COLLATE utf8_bin NOT NULL,
  `algo_declarar` text COLLATE utf8_bin NOT NULL,
  `id_coordenador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `informacoes_aluno`
--

INSERT INTO `informacoes_aluno` (`tipo_curso`, `id_informacoes`, `semestre`, `aprovacao_grad`, `aprovacao_opt`, `conceitos`, `reprova_total`, `reprova_ultimo_semestre`, `aprova_proef`, `exame_quali`, `limite_quali`, `limite_tese`, `artigos_aceito`, `artigo_aguardando`, `estagio_artigo_submissao`, `estagio_pesquisa`, `participou_congresso_nacional`, `participou_congreso_exterior`, `participou_pesquisa_exterior`, `algo_declarar`, `id_coordenador`) VALUES
('1', 1, 1, 1, 1, b'1', 1, 1, b'1', 1, '1', '1', 1, 1, '1', '1', '1', '1', '1', '1', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `numero_usp` int(11) NOT NULL,
  `nome` text COLLATE utf8_bin NOT NULL,
  `email` text COLLATE utf8_bin NOT NULL,
  `senha` text COLLATE utf8_bin NOT NULL,
  `nome_usuario` text COLLATE utf8_bin NOT NULL,
  `tipo_usuario` int(1) NOT NULL COMMENT '1 - aluno, 2 professor, 3 cord'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`numero_usp`, `nome`, `email`, `senha`, `nome_usuario`, `tipo_usuario`) VALUES
(171257271, 'tilt', 'tilt@tilt.com', '123', 'tilt', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `coordinator`
--
ALTER TABLE `coordinator`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `informacoes_aluno`
--
ALTER TABLE `informacoes_aluno`
  ADD PRIMARY KEY (`id_informacoes`),
  ADD KEY `fk_coordenador` (`id_coordenador`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`numero_usp`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `coordinator`
--
ALTER TABLE `coordinator`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `informacoes_aluno`
--
ALTER TABLE `informacoes_aluno`
  MODIFY `id_informacoes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
