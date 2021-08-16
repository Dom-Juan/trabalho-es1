-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 14-Ago-2021 às 20:00
-- Versão do servidor: 10.4.20-MariaDB
-- versão do PHP: 7.3.29

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
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `informacoes_aluno`
--
ALTER TABLE `informacoes_aluno`
  ADD PRIMARY KEY (`id_informacoes`),
  ADD KEY `fk_coordenador` (`id_coordenador`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `informacoes_aluno`
--
ALTER TABLE `informacoes_aluno`
  MODIFY `id_informacoes` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `informacoes_aluno`
--
ALTER TABLE `informacoes_aluno`
  ADD CONSTRAINT `fk_coordenador` FOREIGN KEY (`id_coordenador`) REFERENCES `coordinator` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
