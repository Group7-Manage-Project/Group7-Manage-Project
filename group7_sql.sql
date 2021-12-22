-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2021 at 01:34 PM
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
  `DEPARTMENT_ID` int(11) DEFAULT NULL,
  `DELETE_FLG` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_task`
--

INSERT INTO `category_task` (`CATEGORY_TASK_ID`, `CATEGORY_NAME`, `CREATE_DATE`, `CREATE_USER`, `UPDATE_DATE`, `UPDATE_USER`, `DEPARTMENT_ID`, `DELETE_FLG`) VALUES
(4, 'code', '2021-01-02', 'Math', '2021-01-05', 'Witch', 1, 'N'),
(5, 'find', '2021-01-01', 'John', '2021-01-02', 'Marco', 2, 'flag'),
(6, 'read', NULL, 'Math', NULL, 'Witch', 1, NULL);

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

--
-- Dumping data for table `comment_task`
--

INSERT INTO `comment_task` (`COMMENT_TASK_ID`, `USER_COMMENT_ID`, `PHASE_NAME`, `COMMENT`, `CREATE_COMMENT_DATE`, `TASK_ID`) VALUES
(1, 1, 'phase ...', 'abcdefg', '2021-12-05 00:00:00', 1),
(2, 2, 'phase 2', 'hijklmn', '2021-12-05 00:00:00', 2);

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `DEPARTMENT_ID` int(11) NOT NULL,
  `DEPARTMENT_NAME` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`DEPARTMENT_ID`, `DEPARTMENT_NAME`) VALUES
(1, 'Faculty of Information Technology'),
(2, 'Department of E-Commerce'),
(3, 'Department management');

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
(1, 'Develop', 'In Progressing', 'DEK', 'Develop System', 10, 50, 'Very Important', 'Develop System and result', NULL, 2, 1, 2, 1, 2, 1, 2, '2021-12-19', '2021-12-25', 3, 4),
(2, 'Bug Fixing', 'Complete', 'KFC', 'Fix bug UI', 5, 100, 'Important', 'Fix bug UI', NULL, 1, 2, 1, 2, 1, 2, 1, '2021-11-29', '2021-12-25', 3, 5),
(4, 'Documentation', 'In Progressing', 'KFC', 'Document of website', 10, 30, 'Important', 'Document of the website to use', '1638438866699--1638437628123--bai-tap-tuan-1.docx', 1, 1, 1, 1, 1, 1, 1, '2021-12-02', '2021-12-25', 1, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category_task`
--
ALTER TABLE `category_task`
  ADD PRIMARY KEY (`CATEGORY_TASK_ID`),
  ADD KEY `DEPARTMENT_ID` (`DEPARTMENT_ID`);

--
-- Indexes for table `comment_task`
--
ALTER TABLE `comment_task`
  ADD PRIMARY KEY (`COMMENT_TASK_ID`),
  ADD KEY `TASK_ID` (`TASK_ID`),
  ADD KEY `USER_COMMENT_ID` (`USER_COMMENT_ID`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`DEPARTMENT_ID`);

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
  MODIFY `CATEGORY_TASK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `comment_task`
--
ALTER TABLE `comment_task`
  MODIFY `COMMENT_TASK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `DEPARTMENT_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
-- Constraints for table `category_task`
--
ALTER TABLE `category_task`
  ADD CONSTRAINT `category_task_ibfk_1` FOREIGN KEY (`DEPARTMENT_ID`) REFERENCES `departments` (`DEPARTMENT_ID`);

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
