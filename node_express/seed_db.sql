-- Table structure for database `seed_db` table `api_users`

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `api_users` (
  `id` int(11) PK NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `useremail` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `country` varchar(100) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `api_users`
--

INSERT INTO `api_users` (`id`, `firstname`, `lastname`, `useremail`, `address`, `country`) VALUES
(1, 'Iggy', 'Rusman', 'iggy.rusman@example.com', '2246 Ibishoek, Nieuwersluis, Friesland, 95940', 'Netherlands'),
(2, 'Brooklyn', 'Singh', 'brooklyn.singh@example.com', '2506 Ferguson Street, Dunedin, West Coast, 97363', 'New Zealand'),
(3, 'Montserrat', 'Ferrer', 'montserrat.ferrer@example.com', '2054 Avenida de La Albufera, Logroño, Extremadura, 59816', 'Spain'),
(4, 'Neiva', 'Melo', 'neiva.melo@example.com', '4761 Rua São Paulo, Patos, Espírito Santo, 32626', 'Brazil'),
(5, 'Joren', 'Maaskant', 'joren.maaskant@example.com', '7897 Hopeseweg, Slochteren, Drenthe, 17114', 'Netherlands'),
(6, 'Everardus', 'Rosa', 'everardus.rosa@example.com', '9484 Havenhof, Sneek, Overijssel, 85068', 'Netherlands'),
(7, 'Carol', 'Kennedy', 'carol.kennedy@example.com', '7295 Woodlawn Avenue, Tralee, Kerry, 89655', 'Ireland'),
(8, 'Bartjan', 'Kemerink', 'bartjan.kemerink@example.com', '799 Golstraat, Landerd, Zuid-Holland, 74692', 'Netherlands'),
(9, 'Daniel', 'Bergeron', 'daniel.bergeron@example.com', '8031 West Ave, Lloydminster, Nunavut, U9C 7W0', 'Canada'),
(10, 'William', 'Michel', 'william.michel@example.com', '5916 Avenue du Château, Bedano, Uri, 7440', 'Switzerland');


--
-- Indexes for table `api_users`
--
ALTER TABLE `api_users`
  ADD PRIMARY KEY (`id`);


--
-- AUTO_INCREMENT for table `api_users`
--
ALTER TABLE `api_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;
