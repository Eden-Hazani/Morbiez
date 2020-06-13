-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2020 at 02:48 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `morbiez`
--

-- --------------------------------------------------------

--
-- Table structure for table `burgers`
--

CREATE TABLE `burgers` (
  `burgerId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `price` int(11) NOT NULL,
  `imageFileLocation` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `burgers`
--

INSERT INTO `burgers` (`burgerId`, `name`, `description`, `price`, `imageFileLocation`) VALUES
(5, 'Regular Burger', '', 5, 'regular-burger.svg'),
(6, 'Cheese Burger', '', 12, 'cheese-burger.svg');

-- --------------------------------------------------------

--
-- Table structure for table `burgersvstoppings`
--

CREATE TABLE `burgersvstoppings` (
  `burgerId` int(11) NOT NULL,
  `toppingId` int(11) NOT NULL,
  `burgerToppingId` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `burgersvstoppings`
--

INSERT INTO `burgersvstoppings` (`burgerId`, `toppingId`, `burgerToppingId`, `amount`) VALUES
(5, 9, 1, 0),
(5, 10, 2, 0),
(5, 14, 3, 0),
(5, 13, 4, 0),
(5, 11, 5, 0),
(5, 12, 6, 0),
(6, 9, 7, 0),
(6, 10, 8, 0),
(6, 11, 9, 0),
(6, 12, 10, 0),
(6, 13, 11, 0),
(6, 14, 12, 0);

-- --------------------------------------------------------

--
-- Table structure for table `drinks`
--

CREATE TABLE `drinks` (
  `drinksId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `picked` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `drinks`
--

INSERT INTO `drinks` (`drinksId`, `name`, `description`, `picked`, `price`) VALUES
(1, 'Coke Zero', 'That Refreshing coke taste with 0 sugar!', 0, 3),
(2, 'Regular Coke', 'That Refreshing coke taste with a bit of sugar!', 0, 3),
(3, 'Fanta', 'Wanta Fanta?!', 0, 2);

-- --------------------------------------------------------

--
-- Table structure for table `sidedishes`
--

CREATE TABLE `sidedishes` (
  `sideDishId` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `price` int(11) NOT NULL,
  `imageFileLocation` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sidedishes`
--

INSERT INTO `sidedishes` (`sideDishId`, `name`, `description`, `price`, `imageFileLocation`) VALUES
(1, 'Spicy Chicken Wings', 'Our signature hot wings\r\n(if you ask for the sauce recipe we will have to kill you, just saying...)', 7, 'chicken-wing-icon.svg');

-- --------------------------------------------------------

--
-- Table structure for table `sides`
--

CREATE TABLE `sides` (
  `sideId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `picked` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sides`
--

INSERT INTO `sides` (`sideId`, `name`, `price`, `picked`) VALUES
(1, 'Fries', 3, 0),
(2, 'Onion Rings', 2, 0),
(3, 'Mashed Potatoes ', 3, 0);

-- --------------------------------------------------------

--
-- Table structure for table `toppings`
--

CREATE TABLE `toppings` (
  `toppingId` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `imageFileLocation` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `toppings`
--

INSERT INTO `toppings` (`toppingId`, `name`, `price`, `description`, `imageFileLocation`) VALUES
(9, 'Fried Onions', 4, '', 'onion-topping.svg'),
(10, 'Blue Cheese', 3, '', 'blueCheese-topping.svg'),
(11, 'Fried Egg', 2, '', 'egg-topping.svg'),
(12, 'Fried Mushroom', 4, '', 'mushroom-topping.svg'),
(13, 'Chilli Peppers', 2, '', 'chilliPepers-topping.svg'),
(14, 'Bacon', 3, '', 'bacon-topping.svg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `burgers`
--
ALTER TABLE `burgers`
  ADD PRIMARY KEY (`burgerId`);

--
-- Indexes for table `burgersvstoppings`
--
ALTER TABLE `burgersvstoppings`
  ADD PRIMARY KEY (`burgerToppingId`),
  ADD KEY `burgerId` (`burgerId`),
  ADD KEY `toppingId` (`toppingId`);

--
-- Indexes for table `drinks`
--
ALTER TABLE `drinks`
  ADD PRIMARY KEY (`drinksId`);

--
-- Indexes for table `sidedishes`
--
ALTER TABLE `sidedishes`
  ADD PRIMARY KEY (`sideDishId`);

--
-- Indexes for table `sides`
--
ALTER TABLE `sides`
  ADD PRIMARY KEY (`sideId`);

--
-- Indexes for table `toppings`
--
ALTER TABLE `toppings`
  ADD PRIMARY KEY (`toppingId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `burgers`
--
ALTER TABLE `burgers`
  MODIFY `burgerId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `burgersvstoppings`
--
ALTER TABLE `burgersvstoppings`
  MODIFY `burgerToppingId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `drinks`
--
ALTER TABLE `drinks`
  MODIFY `drinksId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sidedishes`
--
ALTER TABLE `sidedishes`
  MODIFY `sideDishId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sides`
--
ALTER TABLE `sides`
  MODIFY `sideId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `toppings`
--
ALTER TABLE `toppings`
  MODIFY `toppingId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `burgersvstoppings`
--
ALTER TABLE `burgersvstoppings`
  ADD CONSTRAINT `burgersvstoppings_ibfk_1` FOREIGN KEY (`toppingId`) REFERENCES `toppings` (`toppingId`),
  ADD CONSTRAINT `burgersvstoppings_ibfk_2` FOREIGN KEY (`burgerId`) REFERENCES `burgers` (`burgerId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
