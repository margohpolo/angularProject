-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: usersapidb
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `api_users`
--

DROP TABLE IF EXISTS `api_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `useremail` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `country` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_users`
--

LOCK TABLES `api_users` WRITE;
/*!40000 ALTER TABLE `api_users` DISABLE KEYS */;
INSERT INTO `api_users` VALUES (1,'Iggy','Rusman','iggy.rusman@example.com','2246 Ibishoek, Nieuwersluis, Friesland, 95940','Netherlands'),(2,'Brooklyn','Singh','brooklyn.singh@example.com','2506 Ferguson Street, Dunedin, West Coast, 97363','New Zealand'),(3,'Montserrat','Ferrer','montserrat.ferrer@example.com','2054 Avenida de La Albufera, Logroño, Extremadura, 59816','Spain'),(4,'Neiva','Melo','neiva.melo@example.com','4761 Rua São Paulo, Patos, Espírito Santo, 32626','Brazil'),(5,'Joren','Maaskant','joren.maaskant@example.com','7897 Hopeseweg, Slochteren, Drenthe, 17114','Netherlands'),(6,'Everardus','Rosa','everardus.rosa@example.com','9484 Havenhof, Sneek, Overijssel, 85068','Netherlands'),(7,'Carol','Kennedy','carol.kennedy@example.com','7295 Woodlawn Avenue, Tralee, Kerry, 89655','Ireland'),(8,'Bartjan','Kemerink','bartjan.kemerink@example.com','799 Golstraat, Landerd, Zuid-Holland, 74692','Netherlands'),(9,'Daniel','Bergeron','daniel.bergeron@example.com','8031 West Ave, Lloydminster, Nunavut, U9C 7W0','Canada'),(10,'William','Michel','william.michel@example.com','5916 Avenue du Château, Bedano, Uri, 7440','Switzerland');
/*!40000 ALTER TABLE `api_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-25  9:14:02
