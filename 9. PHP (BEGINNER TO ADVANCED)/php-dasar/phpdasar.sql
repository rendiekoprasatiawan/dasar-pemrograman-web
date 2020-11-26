-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2020 at 09:03 AM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phpdasar`
--

-- --------------------------------------------------------

--
-- Table structure for table `daftarbuku`
--

CREATE TABLE `daftarbuku` (
  `id` int(11) NOT NULL,
  `judul` varchar(100) NOT NULL,
  `kode` char(8) NOT NULL,
  `pengarang` varchar(100) NOT NULL,
  `penerbit` varchar(100) NOT NULL,
  `gambar` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `daftarbuku`
--

INSERT INTO `daftarbuku` (`id`, `judul`, `kode`, `pengarang`, `penerbit`, `gambar`) VALUES
(2, 'rt', 'ryg', 'reh', 'sryhy', '5fb8893c6be79.jpg'),
(3, 'rseeesry', 'ertg', 'seyr', 'er', '5fb8894bdb1ea.jpg'),
(4, 'yiyrti', 'ttri', 'ryw55y', 'eu', '5fb8895882d5b.jpg'),
(5, 'tryi', 'tikty', 'tyj', 'trjt', '5fb8896503651.jpg'),
(6, 'tyity', 'ykgrtyrd', 'dtydr', 'rty', '5fb8897a960ba.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', '$2y$10$lHLZhiEc6jW/K.Eh4ueEKOmBQF5e3p5MvTmE6sEh4.qmpp/ej2Nnu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `daftarbuku`
--
ALTER TABLE `daftarbuku`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `daftarbuku`
--
ALTER TABLE `daftarbuku`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
