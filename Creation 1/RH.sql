-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Mer 14 Décembre 2022 à 11:54
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `RH`
--

-- --------------------------------------------------------

--
-- Structure de la table `intervenir`
--

CREATE TABLE IF NOT EXISTS `intervenir` (
  `Num_Interv` int(11) NOT NULL,
  `NoProj` int(11) NOT NULL,
  `NoEmploye` int(11) NOT NULL,
  `NbHeures` int(11) NOT NULL,
  PRIMARY KEY (`Num_Interv`),
  KEY `NoProj` (`NoProj`,`NoEmploye`),
  KEY `NoEmploye` (`NoEmploye`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `intervenir`
--

INSERT INTO `intervenir` (`Num_Interv`, `NoProj`, `NoEmploye`, `NbHeures`) VALUES
(628, 16, 2098, 24),
(679, 20, 5698, 34);

-- --------------------------------------------------------

--
-- Structure de la table `liste des employes`
--

CREATE TABLE IF NOT EXISTS `liste des employes` (
  `NoEmpoye` int(11) NOT NULL,
  `Nom` text NOT NULL,
  `Prénom` text NOT NULL,
  `sexe` text NOT NULL,
  `Salaire` float NOT NULL,
  `TypeContrat` text NOT NULL,
  `Fonction` varchar(20) NOT NULL,
  `Site` varchar(50) NOT NULL,
  `Date d'embauche` date NOT NULL,
  `Date de naissance` date NOT NULL,
  `NoSrv` int(11) NOT NULL,
  PRIMARY KEY (`NoEmpoye`),
  KEY `NoSrv` (`NoSrv`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `liste des employes`
--

INSERT INTO `liste des employes` (`NoEmpoye`, `Nom`, `Prénom`, `sexe`, `Salaire`, `TypeContrat`, `Fonction`, `Site`, `Date d'embauche`, `Date de naissance`, `NoSrv`) VALUES
(2098, 'Herbes', 'James', 'Homme', 5000, 'CDD', 'Cadre', 'Troyes', '2022-12-01', '1997-12-05', 12),
(5698, 'Delagrade', 'Lea', 'Femme', 2600, 'CDD', 'Employé', 'Reims', '2022-12-03', '1998-12-16', 13);

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

CREATE TABLE IF NOT EXISTS `projet` (
  `NoProjet` int(11) NOT NULL,
  `LibelleProjet` text NOT NULL,
  `NoSrv` int(11) NOT NULL,
  PRIMARY KEY (`NoProjet`),
  KEY `NoSrv` (`NoSrv`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `projet`
--

INSERT INTO `projet` (`NoProjet`, `LibelleProjet`, `NoSrv`) VALUES
(16, 'Creation site Web', 12),
(20, 'Creation application ', 13);

-- --------------------------------------------------------

--
-- Structure de la table `service`
--

CREATE TABLE IF NOT EXISTS `service` (
  `NoSrv` int(11) NOT NULL AUTO_INCREMENT,
  `NomSrv` varchar(11) NOT NULL,
  PRIMARY KEY (`NoSrv`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Contenu de la table `service`
--

INSERT INTO `service` (`NoSrv`, `NomSrv`) VALUES
(12, 'Comptabilit'),
(13, 'Administrat');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `intervenir`
--
ALTER TABLE `intervenir`
  ADD CONSTRAINT `intervenir_ibfk_2` FOREIGN KEY (`NoProj`) REFERENCES `projet` (`NoProjet`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `intervenir_ibfk_1` FOREIGN KEY (`NoEmploye`) REFERENCES `liste des employes` (`NoEmpoye`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `liste des employes`
--
ALTER TABLE `liste des employes`
  ADD CONSTRAINT `liste@0020des@0020employes_ibfk_1` FOREIGN KEY (`NoSrv`) REFERENCES `service` (`NoSrv`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `projet`
--
ALTER TABLE `projet`
  ADD CONSTRAINT `projet_ibfk_2` FOREIGN KEY (`NoSrv`) REFERENCES `service` (`NoSrv`) ON DELETE CASCADE ON UPDATE CASCADE;
