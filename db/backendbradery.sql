-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : dim. 12 nov. 2023 à 20:40
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `backendbradery`
--

-- --------------------------------------------------------

--
-- Structure de la table `productbuys`
--

DROP TABLE IF EXISTS `productbuys`;
CREATE TABLE IF NOT EXISTS `productbuys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `totalPrice` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `productbuys`
--


-- --------------------------------------------------------

--
-- Structure de la table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `inventory` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `inventory`, `image`) VALUES
(1, 'T-shirt Blanc', '19.99', 100, 'T-shirt Blanc.jpg'),
(2, 'Jean Slim Noir', '49.99', 75, 'Jean Slim Noir.jpg'),
(3, 'Chaussures de Sport', '89.99', 50, 'Chaussures de Sport.jpg'),
(4, 'Veste en Cuir', '199.99', 25, 'Veste en Cuir.jpg'),
(5, 'Robe d\'Été', '29.99', 60, 'Robe d\'Été.jpg'),
(6, 'Cravate en Soie', '24.99', 40, 'Cravate en Soie.jpg'),
(7, 'Sac à Main', '59.99', 30, 'Sac à Main.jpg'),
(8, 'Chapeau Panama', '34.99', 20, 'Chapeau Panama.jpg'),
(9, 'Écharpe en Laine', '29.99', 45, 'Écharpe en Laine.jpg'),
(10, 'Ceinture en Cuir', '39.99', 70, 'Ceinture en Cuir.jpg'),
(11, 'Montre Classique', '149.99', 15, 'Montre Classique.jpg'),
(12, 'Bottes en Cuir', '99.99', 40, 'Bottes en Cuir.jpg'),
(13, 'Lunettes de Soleil', '79.99', 50, 'Lunettes de Soleil.jpg'),
(14, 'Chemise à Carreaux', '44.99', 55, 'Chemise à Carreaux.png'),
(15, 'Pull-over Gris', '64.99', 11, 'Pull-over Gris.jpg'),
(16, 'Short en Jean', '39.99', 47, 'short_en_jean.jpg'),
(17, 'Sandales d\'Été', '49.99', 28, 'sandale_d\'été.jpg'),
(18, 'Bijoux Fantaisie', '14.99', 76, 'bijoux_fantaisie.jpg'),
(19, 'Pantalon Chino', '54.99', 32, 'le-chino-woman.jpg'),
(20, 'Blouse Florale', '39.99', 29, 'blouse_florale.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
