-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2021 at 11:16 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `group7_sql`
--
CREATE DATABASE IF NOT EXISTS `group7_sql` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `group7_sql`;

-- --------------------------------------------------------

--
-- Table structure for table `category_task`
--

CREATE TABLE `category_task` (
  `CATEGORY_TASK_ID` int(11) NOT NULL,
  `CATEGORY_NAME` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CREATE_DATE` date DEFAULT NULL,
  `CREATE_USER` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `UPDATE_DATE` date DEFAULT NULL,
  `UPDATE_USER` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DELETE_FLG` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_task`
--

INSERT INTO `category_task` (`CATEGORY_TASK_ID`, `CATEGORY_NAME`, `CREATE_DATE`, `CREATE_USER`, `UPDATE_DATE`, `UPDATE_USER`, `DELETE_FLG`) VALUES
(4, 'code', '2021-01-02', 'Math', '2021-01-05', 'Witch', 'N'),
(5, 'find', '2021-01-01', 'John', '2021-01-02', 'Marco', 'flag');

-- --------------------------------------------------------

--
-- Table structure for table `comment_task`
--

CREATE TABLE `comment_task` (
  `COMMENT_TASK_ID` int(11) NOT NULL,
  `USER_COMMENT_ID` int(11) DEFAULT NULL,
  `PHASE_NAME` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `COMMENT` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CREATE_COMMENT_DATE` datetime DEFAULT NULL,
  `TASK_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `EMPLOYEE_ID` int(11) NOT NULL,
  `FULL_NAME` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `USER_NAME` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PASSWORD` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `BIRTH_DAY` date DEFAULT NULL,
  `EMAIL` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `IMAGE` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `POSITION` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ROLL` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DELETE_FLAG` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`EMPLOYEE_ID`, `FULL_NAME`, `USER_NAME`, `PASSWORD`, `BIRTH_DAY`, `EMAIL`, `IMAGE`, `POSITION`, `ROLL`, `DELETE_FLAG`) VALUES
(1, 'John Switch', 'John', '1234', '1989-12-19', 'abc@gmail.com', NULL, 'xxxxx', 'xxxxx', 'flag'),
(2, 'John Math', 'Math', '4567', '1989-12-19', 'def@gmail.com', NULL, 'xxxxx', 'xxxxx', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `TASK_ID` int(11) NOT NULL,
  `JOB` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `STATUS` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CATEGORY` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TITLE` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PROGRESS` int(11) DEFAULT NULL,
  `EFFORT` int(11) DEFAULT NULL,
  `IMPORTANT` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DESCRIPTION` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `FILE` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ASSIGNEE_ID` int(11) DEFAULT NULL,
  `REGISTER_USER_ID` int(11) DEFAULT NULL,
  `CONFIRMATION_ID` int(11) DEFAULT NULL,
  `IMPLEMENTATION_ID` int(11) DEFAULT NULL,
  `TEST_ID` int(11) DEFAULT NULL,
  `APPROVAL_ID` int(11) DEFAULT NULL,
  `FINISH_ID` int(11) DEFAULT NULL,
  `START_DATE` date DEFAULT NULL,
  `END_DATE` date DEFAULT NULL,
  `STEP` int(11) DEFAULT NULL,
  `CATEGORY_TASK_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`TASK_ID`, `JOB`, `STATUS`, `CATEGORY`, `TITLE`, `PROGRESS`, `EFFORT`, `IMPORTANT`, `DESCRIPTION`, `FILE`, `ASSIGNEE_ID`, `REGISTER_USER_ID`, `CONFIRMATION_ID`, `IMPLEMENTATION_ID`, `TEST_ID`, `APPROVAL_ID`, `FINISH_ID`, `START_DATE`, `END_DATE`, `STEP`, `CATEGORY_TASK_ID`) VALUES
(1, 'Develop', 'In Proressing', 'DEK', 'Develop System', 10, 50, 'Very Important', 'Develop System and result', NULL, 2, 1, 2, 1, 2, 1, 2, '2021-12-19', '2021-12-25', 3, 4),
(2, 'Bug Fixing', 'Complete', 'KFC', 'Fix bug UI', 5, 100, 'Important', 'Fix bug UI', NULL, 1, 2, 1, 2, 1, 2, 1, '2021-11-29', '2021-12-25', 3, 5),
(4, 'Documentation', 'In progress', 'KFC', 'Document of website', 10, 30, 'Important', 'Document of the website to use', '1638438866699--1638437628123--bai-tap-tuan-1.docx', 1, 1, 1, 1, 1, 1, 1, '2021-12-02', '2021-12-25', 1, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category_task`
--
ALTER TABLE `category_task`
  ADD PRIMARY KEY (`CATEGORY_TASK_ID`);

--
-- Indexes for table `comment_task`
--
ALTER TABLE `comment_task`
  ADD PRIMARY KEY (`COMMENT_TASK_ID`),
  ADD KEY `TASK_ID` (`TASK_ID`),
  ADD KEY `USER_COMMENT_ID` (`USER_COMMENT_ID`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`EMPLOYEE_ID`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`TASK_ID`),
  ADD KEY `CATEGORY_TASK_ID` (`CATEGORY_TASK_ID`),
  ADD KEY `REGISTER_USER_ID` (`REGISTER_USER_ID`),
  ADD KEY `ASSIGNEE_ID` (`ASSIGNEE_ID`),
  ADD KEY `CONFIRMATION_ID` (`CONFIRMATION_ID`),
  ADD KEY `IMPLEMENTATION_ID` (`IMPLEMENTATION_ID`),
  ADD KEY `TEST_ID` (`TEST_ID`),
  ADD KEY `APPROVAL_ID` (`APPROVAL_ID`),
  ADD KEY `FINISH_ID` (`FINISH_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category_task`
--
ALTER TABLE `category_task`
  MODIFY `CATEGORY_TASK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `comment_task`
--
ALTER TABLE `comment_task`
  MODIFY `COMMENT_TASK_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `EMPLOYEE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `TASK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment_task`
--
ALTER TABLE `comment_task`
  ADD CONSTRAINT `comment_task_ibfk_1` FOREIGN KEY (`TASK_ID`) REFERENCES `task` (`TASK_ID`),
  ADD CONSTRAINT `comment_task_ibfk_2` FOREIGN KEY (`USER_COMMENT_ID`) REFERENCES `staff` (`EMPLOYEE_ID`);

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_ibfk_1` FOREIGN KEY (`CATEGORY_TASK_ID`) REFERENCES `category_task` (`CATEGORY_TASK_ID`),
  ADD CONSTRAINT `task_ibfk_2` FOREIGN KEY (`REGISTER_USER_ID`) REFERENCES `staff` (`EMPLOYEE_ID`),
  ADD CONSTRAINT `task_ibfk_3` FOREIGN KEY (`ASSIGNEE_ID`) REFERENCES `staff` (`EMPLOYEE_ID`),
  ADD CONSTRAINT `task_ibfk_4` FOREIGN KEY (`CONFIRMATION_ID`) REFERENCES `staff` (`EMPLOYEE_ID`),
  ADD CONSTRAINT `task_ibfk_5` FOREIGN KEY (`IMPLEMENTATION_ID`) REFERENCES `staff` (`EMPLOYEE_ID`),
  ADD CONSTRAINT `task_ibfk_6` FOREIGN KEY (`TEST_ID`) REFERENCES `staff` (`EMPLOYEE_ID`),
  ADD CONSTRAINT `task_ibfk_7` FOREIGN KEY (`APPROVAL_ID`) REFERENCES `staff` (`EMPLOYEE_ID`),
  ADD CONSTRAINT `task_ibfk_8` FOREIGN KEY (`FINISH_ID`) REFERENCES `staff` (`EMPLOYEE_ID`);
--
-- Database: `group8_sql`
--
CREATE DATABASE IF NOT EXISTS `group8_sql` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `group8_sql`;

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `EMPLOYEE_ID` int(11) NOT NULL,
  `FULL_NAME` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `USER_NAME` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PASSWORD` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `BIRTH_DAY` date DEFAULT NULL,
  `EMAIL` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `IMAGE` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `POSITION` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ROLL` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DELETE_FLAG` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`EMPLOYEE_ID`, `FULL_NAME`, `USER_NAME`, `PASSWORD`, `BIRTH_DAY`, `EMAIL`, `IMAGE`, `POSITION`, `ROLL`, `DELETE_FLAG`) VALUES
(5, 'Trần Tấn Quới', 'quoi', '*****', '2000-01-01', 'quoitt18@uef.edu.vn', '1636529496359--quoi.jpg', 'Developer', 'User', NULL),
(6, 'Nguyễn Thị Thu Quyên', 'quyen', '*****', '0000-00-00', 'quyenntt8@uef.edu.vn', '1636592694987--Quyen.jpg', 'Leader', 'Admin', NULL),
(7, 'Nguyễn Hoàng Long', 'long', '	*****', '2000-01-01', 'longnt18@uef,edu.vn', '1636529771968--140962701_1784042098431729_6866337980522035164_n.jpg', 'Developer', 'User', NULL),
(9, 'Phút Phan', 'phut', '*****', '2000-01-01', 'phutp18@uef.edu.vn', '1636569257813--Phut.jpg', 'Leader', 'Admin', NULL),
(10, 'Nguyễn Trần Hoàng', 'hoang', '*****', '2000-04-11', 'hoangnt18@uef.edu.vn', '1636569360773--hoang1-removebg-preview.jpg', 'Developer', 'Admin', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `TASK_ID` int(11) NOT NULL,
  `JOB` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `STATUS` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CATEGORY` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TITLE` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PROGRESS` int(11) DEFAULT NULL,
  `ASSIGNEE` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `REGISTER_USER` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `START_DATE` date DEFAULT NULL,
  `END_DATE` date DEFAULT NULL,
  `EFFORT` int(11) DEFAULT NULL,
  `IMPORTANT` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DESCRIPTION` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `FILE` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CONFIRMATION` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `IMPLEMENTATION` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TEST` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `APPROVAL` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `FINISH` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `STEP` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`TASK_ID`, `JOB`, `STATUS`, `CATEGORY`, `TITLE`, `PROGRESS`, `ASSIGNEE`, `REGISTER_USER`, `START_DATE`, `END_DATE`, `EFFORT`, `IMPORTANT`, `DESCRIPTION`, `FILE`, `CONFIRMATION`, `IMPLEMENTATION`, `TEST`, `APPROVAL`, `FINISH`, `STEP`) VALUES
(5, 'Bug Fixing', 'In Processing', 'KFC', 'Fix bug UI', 10, '4', '4', '2021-11-08', '2021-11-09', 30, 'Very Important', 'Fix bug UI', '1636373568449--review.docx', '4', '4', '4', '4', '4', 1),
(6, 'Bug Fixing', 'In Processing', 'KFC', 'Fix bug UI', 10, '2', '4', '2021-11-08', '2021-11-09', 30, 'Very Important', 'Fix bug UI', '1636373576860--review.docx', '4', '4', '4', '4', '4', 1),
(7, 'Bug Fixing', 'In Processing', 'KFC', 'Fix bug UI', 10, '2', '2', '2021-11-08', '2021-11-09', 30, 'Very Important', 'Fix bug UI', '1636376414555--review.docx', '2', '4', '4', '2', '4', 1),
(8, 'Bug Fixing', 'In Processing', 'CYBER', 'Fix bugs UI', 10, '5', '5', '2021-11-10', '2021-10-24', 30, 'Important', 'Fix bugs UI', 'undefined', '7', '7', '5', '5', '6', 1),
(9, 'Bug Fixing', 'In Processing', 'CYBER', 'Fix bugs UI', 10, '5', '5', '2021-11-10', '2021-10-24', 30, 'Important', 'Fix bugs UI', 'undefined', '7', '7', '5', '5', '6', 1),
(10, 'Bug Fixing', 'In Processing', 'KFC', 'Fix bug back-end', 10, '5', '5', '2021-11-10', '0000-00-00', 30, 'Very Important', 'Fix bug back-end descipttion', '1636555409698--review.docx', '5', '5', '5', '7', '6', 1),
(11, 'Documentation', 'In Processing', 'KFC', 'Document of webiste', 10, '5', '5', '2021-11-11', '2021-11-25', 30, 'Very Important', 'Document of the website to use', '1636592660109--review.docx', '6', '7', '9', '10', '9', 1),
(12, 'Develope', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-11-06', 30, 'Very Important', 'Develop System and result', '1636611557471--review.docx', '6', '7', '9', '10', '5', 1),
(13, 'Develope', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-11-10', 30, 'Very Important', 'Develop System and result', '1636611563180--review.docx', '6', '7', '9', '10', '5', 1),
(14, 'Develope', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-10-15', 30, 'Very Important', 'Develop System and result', '1636611566765--review.docx', '6', '7', '9', '10', '5', 1),
(15, 'Develope', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-25', 30, 'Very Important', 'Develop System and result', '1636611573768--review.docx', '6', '7', '9', '10', '5', 1),
(16, 'Develope', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-25', 30, 'Very Important', 'Develop System and result', '1636611574191--review.docx', '6', '7', '9', '10', '5', 1),
(17, 'Develope', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-25', 30, 'Very Important', 'Develop System and result', '1636611574352--review.docx', '6', '7', '9', '10', '5', 1),
(18, 'New Request', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-25', 30, 'Very Important', 'Develop System and result', '1636611578220--review.docx', '6', '7', '9', '10', '5', 1),
(19, 'New Request', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-25', 30, 'Very Important', 'Develop System and result', '1636611578525--review.docx', '6', '7', '9', '10', '5', 1),
(20, 'Research', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-10', 30, 'Very Important', 'Develop System and result', '1636611582714--review.docx', '6', '7', '9', '10', '5', 1),
(21, 'Research', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-28', 30, 'Very Important', 'Develop System and result', '1636611586219--review.docx', '6', '7', '9', '10', '5', 1),
(22, 'Set Up Environments', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-28', 30, 'Very Important', 'Develop System and result', '1636611588921--review.docx', '6', '7', '9', '10', '5', 1),
(23, 'Testing', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Very Important', 'Develop System and result', '1636611594456--review.docx', '6', '7', '9', '10', '5', 1),
(24, 'Training', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Very Important', 'Develop System and result', '1636611598681--review.docx', '6', '7', '9', '10', '5', 1),
(25, 'Training', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Very Important', 'Develop System and result', '1636611598824--review.docx', '6', '7', '9', '10', '5', 1),
(26, 'Bug Fixing', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Very Important', 'Develop System and result', '1636611601472--review.docx', '6', '7', '9', '10', '5', 1),
(27, 'Bug Fixing', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611604071--review.docx', '6', '7', '9', '10', '5', 1),
(28, 'Bug Fixing', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611605364--review.docx', '6', '7', '9', '10', '5', 1),
(29, 'Bug Fixing', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611605505--review.docx', '6', '7', '9', '10', '5', 1),
(30, 'Bug Fixing', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Low', 'Develop System and result', '1636611607695--review.docx', '6', '7', '9', '10', '5', 1),
(31, 'Bug Fixing', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Low', 'Develop System and result', '1636611607850--review.docx', '6', '7', '9', '10', '5', 1),
(32, 'Bug Fixing', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Low', 'Develop System and result', '1636611609877--review.docx', '6', '7', '9', '10', '5', 1),
(33, 'Bug Fixing', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Low', 'Develop System and result', '1636611610015--review.docx', '6', '7', '9', '10', '5', 1),
(34, 'Support', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Low', 'Develop System and result', '1636611614429--review.docx', '6', '7', '9', '10', '5', 1),
(35, 'Support', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Low', 'Develop System and result', '1636611614567--review.docx', '6', '7', '9', '10', '5', 1),
(36, 'Reporting', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Low', 'Develop System and result', '1636611617076--review.docx', '6', '7', '9', '10', '5', 1),
(37, 'Reporting', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Low', 'Develop System and result', '1636611617227--review.docx', '6', '7', '9', '10', '5', 1),
(38, 'Reporting', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611619497--review.docx', '6', '7', '9', '10', '5', 1),
(39, 'Reporting', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611619640--review.docx', '6', '7', '9', '10', '5', 1),
(40, 'Reporting', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611621545--review.docx', '6', '7', '9', '10', '5', 1),
(41, 'Reporting', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611621696--review.docx', '6', '7', '9', '10', '5', 1),
(42, 'Modification', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611624248--review.docx', '6', '7', '9', '10', '5', 1),
(43, 'Modification', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611632123--review.docx', '6', '7', '9', '10', '5', 1),
(44, 'Modification', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611632272--review.docx', '6', '7', '9', '10', '5', 1),
(45, 'Reporting', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611635989--review.docx', '6', '7', '9', '10', '5', 1),
(46, 'Testing', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611639232--review.docx', '6', '7', '9', '10', '5', 1),
(47, 'Testing', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611639361--review.docx', '6', '7', '9', '10', '5', 1),
(48, 'Testing', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611639496--review.docx', '6', '7', '9', '10', '5', 1),
(49, 'Testing', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611639644--review.docx', '6', '7', '9', '10', '5', 1),
(50, 'Support', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611643760--review.docx', '6', '7', '9', '10', '5', 1),
(51, 'Support', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611643905--review.docx', '6', '7', '9', '10', '5', 1),
(52, 'Documentation', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611646496--review.docx', '6', '7', '9', '10', '5', 1),
(53, 'Documentation', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611646639--review.docx', '6', '7', '9', '10', '5', 1),
(54, 'Training', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611649044--review.docx', '6', '7', '9', '10', '5', 1),
(55, 'Training', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611649183--review.docx', '6', '7', '9', '10', '5', 1),
(56, 'Modification', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611651893--review.docx', '6', '7', '9', '10', '5', 1),
(57, 'Modification', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611652037--review.docx', '6', '7', '9', '10', '5', 1),
(58, 'Modification', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611652196--review.docx', '6', '7', '9', '10', '5', 1),
(59, 'Support', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611654656--review.docx', '6', '7', '9', '10', '5', 1),
(60, 'Support', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611654797--review.docx', '6', '7', '9', '10', '5', 1),
(61, 'Set Up Environments', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611657290--review.docx', '6', '7', '9', '10', '5', 1),
(62, 'Documentation', 'In Processing', 'CYBER', 'Wirite doccument', 10, '5', '5', '2021-11-11', '2021-11-18', 30, 'Important', 'Wirite doccument', '1636616680149--review.docx', '6', '7', '9', '10', '5', 1),
(63, 'Documentation', 'In Processing', 'CYBER', 'Wirite doccument', 10, '5', '5', '2021-11-11', '2021-11-18', 30, 'Important', 'Wirite doccument', '1636616687701--review.docx', '6', '7', '9', '10', '5', 1),
(64, 'Documentation', 'In Processing', 'CYBER', 'Wirite doccument', 10, '5', '5', '2021-11-11', '2021-11-18', 30, 'Important', 'Wirite doccument', '1636616692672--review.docx', '6', '7', '9', '10', '5', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`EMPLOYEE_ID`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`TASK_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `EMPLOYEE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `TASK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
--
-- Database: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Table structure for table `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `user` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `query` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Table structure for table `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_length` text COLLATE utf8_bin DEFAULT NULL,
  `col_collation` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) COLLATE utf8_bin DEFAULT '',
  `col_default` text COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Table structure for table `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `column_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `settings_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

--
-- Dumping data for table `pma__designer_settings`
--

INSERT INTO `pma__designer_settings` (`username`, `settings_data`) VALUES
('root', '{\"relation_lines\":\"true\",\"angular_direct\":\"direct\",\"snap_to_grid\":\"off\"}');

-- --------------------------------------------------------

--
-- Table structure for table `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `export_type` varchar(10) COLLATE utf8_bin NOT NULL,
  `template_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `template_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- Table structure for table `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Table structure for table `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Table structure for table `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Dumping data for table `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"group7_sql\",\"table\":\"category_task\"},{\"db\":\"group7_sql\",\"table\":\"comment_task\"},{\"db\":\"group7_sql\",\"table\":\"task\"},{\"db\":\"group8_sql\",\"table\":\"task\"},{\"db\":\"group7_sql\",\"table\":\"staff\"},{\"db\":\"group8_sql\",\"table\":\"staff\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Table structure for table `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `display_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `prefs` text COLLATE utf8_bin NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

-- --------------------------------------------------------

--
-- Table structure for table `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text COLLATE utf8_bin NOT NULL,
  `schema_sql` text COLLATE utf8_bin DEFAULT NULL,
  `data_sql` longtext COLLATE utf8_bin DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') COLLATE utf8_bin DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Dumping data for table `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2021-12-02 10:16:12', '{\"Console\\/Mode\":\"collapse\"}');

-- --------------------------------------------------------

--
-- Table structure for table `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL,
  `tab` varchar(64) COLLATE utf8_bin NOT NULL,
  `allowed` enum('Y','N') COLLATE utf8_bin NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Table structure for table `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indexes for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indexes for table `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indexes for table `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indexes for table `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indexes for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indexes for table `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indexes for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indexes for table `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indexes for table `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indexes for table `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indexes for table `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indexes for table `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indexes for table `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
