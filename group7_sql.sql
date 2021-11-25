-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 25, 2021 lúc 02:02 PM
-- Phiên bản máy phục vụ: 10.4.20-MariaDB
-- Phiên bản PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `group7_sql`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category_task`
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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment_task`
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
-- Cấu trúc bảng cho bảng `staff`
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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `task`
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
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `category_task`
--
ALTER TABLE `category_task`
  ADD PRIMARY KEY (`CATEGORY_TASK_ID`);

--
-- Chỉ mục cho bảng `comment_task`
--
ALTER TABLE `comment_task`
  ADD KEY `TASK_ID` (`TASK_ID`),
  ADD KEY `USER_COMMENT_ID` (`USER_COMMENT_ID`);

--
-- Chỉ mục cho bảng `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`EMPLOYEE_ID`);

--
-- Chỉ mục cho bảng `task`
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
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `comment_task`
--
ALTER TABLE `comment_task`
  ADD CONSTRAINT `comment_task_ibfk_1` FOREIGN KEY (`TASK_ID`) REFERENCES `task` (`TASK_ID`),
  ADD CONSTRAINT `comment_task_ibfk_2` FOREIGN KEY (`USER_COMMENT_ID`) REFERENCES `staff` (`EMPLOYEE_ID`);

--
-- Các ràng buộc cho bảng `task`
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
