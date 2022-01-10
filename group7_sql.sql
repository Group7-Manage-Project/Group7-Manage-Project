CREATE DATABASE group7_sql CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 10, 2022 lúc 01:44 PM
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
  `DEPARTMENT_ID` int(11) DEFAULT NULL,
  `DELETE_FLG` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category_task`
--

INSERT INTO `category_task` (`CATEGORY_TASK_ID`, `CATEGORY_NAME`, `CREATE_DATE`, `CREATE_USER`, `UPDATE_DATE`, `UPDATE_USER`, `DEPARTMENT_ID`, `DELETE_FLG`) VALUES
(4, 'code', '2021-01-02', 'Math', '2021-01-05', 'Witch', 1, 'N'),
(5, 'find', '2021-01-01', 'John', '2021-01-02', 'Marco', 2, 'flag'),
(6, 'read', NULL, 'Math', NULL, 'Witch', 1, NULL),
(11, 'Digital Marketing', '2022-01-07', 'John Switch', '2022-01-07', 'John Switch', 13, 'N');

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
  `TASK_ID` int(11) DEFAULT NULL,
  `FILE` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `comment_task`
--

INSERT INTO `comment_task` (`COMMENT_TASK_ID`, `USER_COMMENT_ID`, `PHASE_NAME`, `COMMENT`, `CREATE_COMMENT_DATE`, `TASK_ID`, `FILE`) VALUES
(1, 1, 'phase ...', 'abcdefg', '2021-12-05 00:00:00', 1, NULL),
(2, 2, 'phase 2', 'hijklmn', '2021-12-05 00:00:00', 2, NULL),
(13, 1, 'Comment', 'HI sir', '2022-01-02 00:00:00', 22, ''),
(14, 1, 'Comment', 'HI sir', '2022-01-02 00:00:00', 22, '1641114880984--group7_sql (3).sql'),
(15, 1, 'Comment', 'hi sir', '2022-01-02 00:00:00', 22, ''),
(16, 1, 'Comment', 'hi sir', '2022-01-02 00:00:00', 22, ''),
(17, 1, 'Comment', 'hi sir', '2022-01-02 00:00:00', 22, '1641125440408--group7_sql (3).sql'),
(18, 1, 'Comment', 'hello sir, i am doing process develop software', '2022-01-03 00:00:00', 22, ''),
(19, 1, 'Comment', 'hello sir', '2022-01-03 00:00:00', 22, ''),
(20, 1, 'Comment', 'hi sir', '2022-01-03 00:00:00', 22, ''),
(21, 1, 'Comment', 'hello sir', '2022-01-03 00:00:00', 22, ''),
(22, 1, 'Comment', 'i update report ', '2022-01-03 00:00:00', 22, '1641179752694--group7_sql (3).sql'),
(23, 1, 'Comment', 'hello sir, i update report', '2022-01-03 00:00:00', 22, '1641179790067--group7_sql (3).sql'),
(24, 1, 'Comment', 'i update report, one more time', '2022-01-03 00:00:00', 22, '1641179815853--review .docx'),
(25, 1, 'Comment', 'i update file sql', '2022-01-03 00:00:00', 22, '1641179867634--group7_sql (3).sql'),
(26, 1, 'Register', 'Submit Task', '2022-01-03 00:00:00', 22, '1641201809936--Nội dung SHL Khóa 2018-2019-2020 HK1B NH 2021-2022.pdf'),
(27, 1, 'Register', 'Hello everyone.\nI finished tasked. Please check to help me again. ', '2022-01-03 00:00:00', 22, '1641204580064--Assignment 3.pdf'),
(28, 1, 'Register', 'Hello everyone. I finished tasked. Please check to help me again.', '2022-01-03 00:00:00', 22, '1641204837106--05-TB-ĐT - Ve viec ký xac nhan thong tin in bang TN va nop HSBS của SV ĐH chinh quy khoa 2018.pdf'),
(29, 1, 'Register', 'Hello sir. I finished the task. Please check to help me again', '2022-01-03 00:00:00', 22, ''),
(30, 1, 'Register', 'Hello sir. I finished the task. Please check to help me again', '2022-01-03 00:00:00', 22, ''),
(31, 1, 'Register', 'Hello sir. I finished the task. Please check to help me again', '2022-01-03 00:00:00', 22, ''),
(32, 1, 'Register', 'Hello sir. I finished the task. Please check to help me again', '2022-01-03 00:00:00', 22, ''),
(33, 1, 'Register', 'Hello sir. I finished the task. Please check to help me again', '2022-01-03 00:00:00', 22, ''),
(34, 1, 'Register', 'Hello sir. I finished the task. Please check to help me again', '2022-01-03 00:00:00', 22, ''),
(35, 1, 'Register', 'Dear Sir. I finished task. Please check to help me again', '2022-01-04 00:00:00', 17, ''),
(36, 1, 'Register', 'Dear Sir. I finished task. Please check to help me again', '2022-01-04 00:00:00', 17, ''),
(37, 1, 'Register', '\nDear Sir. I finished task. Please check to help me again', '2022-01-04 00:00:00', 17, ''),
(38, 1, 'Implementation', 'Dear Sir. I finished task. Please check to help me again', '2022-01-04 00:00:00', 17, '1641286818667--Assignment 3.pdf'),
(39, 1, '', 'Dear Sir. I finished task. Please check to help me again', '2022-01-04 00:00:00', 17, '1641287002665--DesignPatternPseudocode.pdf'),
(40, 1, 'Approval', 'Dear Sir. I finished task. Please check to help me again', '2022-01-04 00:00:00', 17, ''),
(41, 1, 'Register', 'Hir sir, I finshed the task. Please check to help me again', '2022-01-04 00:00:00', 26, '1641290154221--DesignPatternPseudocode.pdf'),
(42, 1, 'Confirmation', 'Hir sir, I finshed the task. Please check to help me again', '2022-01-04 00:00:00', 26, '1641290380714--group7_sql (2).sql'),
(43, 1, 'Register', 'Dear SIr. I finished the task. Please check to help me again', '2022-01-04 00:00:00', 26, '1641290603156--review .docx'),
(44, 1, 'Register', 'Dear sir. I finished the task. Please check to help me again', '2022-01-04 00:00:00', 27, '1641290687682--review .docx'),
(45, 1, 'Confirmation', 'Dear SIr. I finished the task. Please check to help me again', '2022-01-04 00:00:00', 27, ''),
(46, 1, 'Confirmation', 'Dear SIr. I finished the task. Please check to help me again', '2022-01-04 00:00:00', 26, ''),
(47, 1, 'Implementation', 'Dear SIr. I finished the task. Please check to help me again', '2022-01-04 00:00:00', 26, ''),
(48, 1, 'Implementation', 'Dear SIr. I finished the task. Please check to help me again', '2022-01-04 00:00:00', 26, ''),
(49, 1, 'Comment', 'Dear SIr. I finished the task. Please check to help me again', '2022-01-04 00:00:00', 27, ''),
(50, 1, 'Implementation', 'Dear SIr. I finished the task. Please check to help me again', '2022-01-04 00:00:00', 27, ''),
(51, 1, '', 'Dear SIr. I finished the task. Please check to help me again', '2022-01-04 00:00:00', 27, '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `departments`
--

CREATE TABLE `departments` (
  `DEPARTMENT_ID` int(11) NOT NULL,
  `DEPARTMENT_NAME` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DESCRIPTION` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CREATE_DATE` date DEFAULT NULL,
  `CREATE_USER` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `UPDATE_DATE` date DEFAULT NULL,
  `UPDATE_USER` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `departments`
--

INSERT INTO `departments` (`DEPARTMENT_ID`, `DEPARTMENT_NAME`, `DESCRIPTION`, `CREATE_DATE`, `CREATE_USER`, `UPDATE_DATE`, `UPDATE_USER`) VALUES
(1, 'Faculty of Information Technology', NULL, NULL, NULL, NULL, NULL),
(2, 'Department of E-Commerce', NULL, NULL, NULL, NULL, NULL),
(3, 'Department management', NULL, NULL, NULL, NULL, NULL),
(13, 'Marketing', 'Marketing', '2022-01-07', 'John Switch', '2022-01-07', 'John Switch'),
(17, '13noi chuoiMarketing', '', '2022-01-07', 'John Switch', '2022-01-07', 'John Switch');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `schedule`
--

CREATE TABLE `schedule` (
  `Id` int(11) NOT NULL,
  `IsAllDay` tinyint(1) DEFAULT NULL,
  `StartTime` datetime DEFAULT NULL,
  `EndTime` datetime DEFAULT NULL,
  `Subject` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Description` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Location` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `RecurrenceRule` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `StartTimezone` date DEFAULT NULL,
  `EndTimezone` datetime DEFAULT NULL,
  `EMPLOYEE_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `schedule`
--

INSERT INTO `schedule` (`Id`, `IsAllDay`, `StartTime`, `EndTime`, `Subject`, `Description`, `Location`, `RecurrenceRule`, `StartTimezone`, `EndTimezone`, `EMPLOYEE_ID`) VALUES
(1, 0, '2022-01-26 03:00:00', '2022-01-26 05:00:00', 'sleep', NULL, 'sleep location', NULL, NULL, NULL, 1),
(2, 1, '2022-01-08 17:00:00', '2022-01-09 17:00:00', 'code day', 'sleep', 'code night', 'FREQ=MONTHLY;BYDAY=SA;BYSETPOS=2;INTERVAL=1;UNTIL=20220316T100000Z;', NULL, NULL, 1),
(3, 1, '2021-12-31 17:00:00', '2022-01-01 17:00:00', 'save code', NULL, NULL, NULL, NULL, NULL, 1),
(4, 0, '2022-01-28 22:00:00', '2022-01-28 22:00:00', 'go live', NULL, NULL, NULL, '0000-00-00', '0000-00-00 00:00:00', 1),
(5, 1, '2022-01-03 17:00:00', '2022-01-04 17:00:00', 'develop', NULL, NULL, NULL, NULL, NULL, 1),
(9, 1, '2022-01-22 17:00:00', '2022-01-23 17:00:00', 'finished update schedule', NULL, NULL, NULL, NULL, NULL, 1);

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

--
-- Đang đổ dữ liệu cho bảng `staff`
--

INSERT INTO `staff` (`EMPLOYEE_ID`, `FULL_NAME`, `USER_NAME`, `PASSWORD`, `BIRTH_DAY`, `EMAIL`, `IMAGE`, `POSITION`, `ROLL`, `DELETE_FLAG`) VALUES
(1, 'John Switch', 'John', '1234', '2000-11-11', 'abc@gmail.com', '1641177573530--logo.jpg', 'Leader', 'Admin', NULL),
(2, 'John Math', 'Math', '4567', '1989-12-19', 'def@gmail.com', NULL, 'xxxxx', 'xxxxx', NULL),
(7, 'Vũ Nhật Minh Trường', 'truong2', '1234', '2000-04-11', 'truongvnmt18@uef.edu.vn', '1640599576538--Phut.jpg', 'Leader', 'User', NULL),
(8, 'Vũ Nhật Minh Trường', 'truong3', '1234', '2000-01-11', 'truongvnmt18@uef.edu.vn', '1640599915070--Phut.jpg', 'Leader', 'Admin', NULL),
(9, 'Vũ Nhật Minh Trường', 'truong4', '1234', '2000-04-11', 'abc@dounets.com', '1640600070519--Phut.jpg', 'Leader', 'Admin', NULL),
(10, 'Nguyễn Trần Hoàng', 'hoang10', '1234', '2000-04-11', 'abc@dounets.com', '1640601729704--hoang2.JPG', 'Leader', 'Admin', NULL),
(11, 'Nguyễn Trần Hoàng', 'hoang', '1234', '2000-11-04', 'hoangnt18@uef.edu.vn', NULL, 'Leader', 'Admin', NULL),
(13, 'Nguyễn Trần Hoàng', 'admin', '1234', '2000-04-11', 'abc@dounets.com', '1640757469008--Phut.jpg', 'Leader', 'Admin', NULL);

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
  `CATEGORY_TASK_ID` int(11) DEFAULT NULL,
  `DEPARTMENT_NAME` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `task`
--

INSERT INTO `task` (`TASK_ID`, `JOB`, `STATUS`, `CATEGORY`, `TITLE`, `PROGRESS`, `EFFORT`, `IMPORTANT`, `DESCRIPTION`, `FILE`, `ASSIGNEE_ID`, `REGISTER_USER_ID`, `CONFIRMATION_ID`, `IMPLEMENTATION_ID`, `TEST_ID`, `APPROVAL_ID`, `FINISH_ID`, `START_DATE`, `END_DATE`, `STEP`, `CATEGORY_TASK_ID`, `DEPARTMENT_NAME`) VALUES
(1, 'Develope', 'IN-PROGRESS', 'DEK', 'Develop System', 10, 50, 'Very Important', 'Develop System and result', NULL, 2, 1, 2, 1, 2, 1, 2, '2021-12-19', '2021-12-25', 3, 4, NULL),
(2, 'Bug Fixing', 'FINISHED', 'KFC', 'Fix bug UI', 5, 100, 'Important', 'Fix bug UI', NULL, 1, 2, 1, 2, 1, 2, 1, '2021-11-29', '2021-12-25', 3, 5, NULL),
(4, 'Documentation', 'IN-PROGRESS', 'KFC', 'Document of website', 10, 30, 'Important', 'Document of the website to use', '1638438866699--1638437628123--bai-tap-tuan-1.docx', 1, 1, 1, 1, 1, 1, 1, '2021-12-02', '2021-12-25', 1, 4, NULL),
(5, 'Bug Fixing', 'IN-PROGRESS', 'code', 'Fix Bug UI', 10, 30, 'Very Important', 'Fix Bug UI', '1640865635072--review .docx', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-30', '0000-00-00', 1, NULL, '1noi chuoiFaculty of Information Technology'),
(6, 'Bug Fixing', 'IN-PROGRESS', '', 'Fix bug UI', 10, 30, 'Very Important', 'Fix bug UI', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-30', '0000-00-00', 1, NULL, ''),
(7, 'Bug Fixing', 'IN-PROGRESS', '', 'Fix bug UI', 10, 30, 'Very Important', 'Fix bug UI', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-30', '0000-00-00', 1, NULL, ''),
(8, 'Bug Fixing', 'IN-PROGRESS', '', 'Fix bug UI', 10, 30, 'Very Important', 'Fix bug UI', '1640865776812--review .docx', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-30', '0000-00-00', 1, NULL, ''),
(9, 'Bug Fixing', 'IN-PROGRESS', 'read', 'Fix bug UI', 10, 30, 'Very Important', 'Fix bug UI', '1640865854333--review .docx', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-30', '0000-00-00', 1, NULL, '1noi chuoiFaculty of Information Technology'),
(10, 'Bug Fixing', 'IN-PROGRESS', 'read', 'Review Code', 10, 30, 'Very Important', 'Review Code UI', '1640866333858--review .docx', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-30', '2022-01-03', 1, NULL, 'Faculty of Information Technology'),
(11, 'Documentation', 'IN-PROGRESS', 'code', 'Write Document', 10, 30, 'Normal', 'Write Document for client', '1640866693871--review .docx', 7, 7, 8, 10, 10, 10, 7, '2021-12-30', '2022-01-07', 1, NULL, 'Faculty of Information Technology'),
(17, 'Bug Fixing', NULL, 'code', 'Fix Bug UI', 75, 180, 'Important', 'Fix Bug UI', '1640868327893--review .docx', 13, 8, 9, 9, 10, 10, 13, '2021-12-30', '2021-12-31', 6, 4, 'Faculty of Information Technology'),
(18, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-30', NULL, NULL, NULL, NULL),
(19, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-30', NULL, NULL, NULL, NULL),
(20, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-30', NULL, NULL, NULL, NULL),
(21, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-30', NULL, NULL, NULL, NULL),
(22, NULL, NULL, NULL, NULL, NULL, 60, NULL, NULL, '1640868327893--review .docx', 8, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-30', NULL, 2, NULL, 'Faculty of Information Technology'),
(23, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-31', NULL, NULL, NULL, NULL),
(24, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-31', NULL, NULL, NULL, NULL),
(25, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-31', NULL, NULL, NULL, NULL),
(26, 'Documentation', NULL, 'find', 'Find document', 55, 120, 'Normal', 'Find document for project', '1641290603163--review .docx', 7, 7, 8, 10, 7, 9, 13, '2022-01-04', '2022-01-11', 4, 5, 'Department of E-Commerce'),
(27, 'Training', 'IN-PROGRESS', 'find', 'Training SQL', 70, 150, 'Very Low', 'Training SQL', '1641290687684--review .docx', 10, 7, 9, 8, 10, 10, 10, '2022-01-04', '2022-01-11', 5, 5, 'Department of E-Commerce'),
(28, 'Develope', 'In Processing', 'Digital Marketing', 'Sale product', 10, 30, 'Very Important', 'Meet clinets', '', 10, 10, 9, 9, 9, 8, 10, '2022-01-07', '2022-01-14', 1, 11, 'Marketing');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `category_task`
--
ALTER TABLE `category_task`
  ADD PRIMARY KEY (`CATEGORY_TASK_ID`),
  ADD KEY `DEPARTMENT_ID` (`DEPARTMENT_ID`);

--
-- Chỉ mục cho bảng `comment_task`
--
ALTER TABLE `comment_task`
  ADD PRIMARY KEY (`COMMENT_TASK_ID`),
  ADD KEY `TASK_ID` (`TASK_ID`),
  ADD KEY `USER_COMMENT_ID` (`USER_COMMENT_ID`);

--
-- Chỉ mục cho bảng `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`DEPARTMENT_ID`);

--
-- Chỉ mục cho bảng `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `EMPLOYEE_ID` (`EMPLOYEE_ID`);

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
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `category_task`
--
ALTER TABLE `category_task`
  MODIFY `CATEGORY_TASK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `comment_task`
--
ALTER TABLE `comment_task`
  MODIFY `COMMENT_TASK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT cho bảng `departments`
--
ALTER TABLE `departments`
  MODIFY `DEPARTMENT_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `schedule`
--
ALTER TABLE `schedule`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `staff`
--
ALTER TABLE `staff`
  MODIFY `EMPLOYEE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `task`
--
ALTER TABLE `task`
  MODIFY `TASK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `category_task`
--
ALTER TABLE `category_task`
  ADD CONSTRAINT `category_task_ibfk_1` FOREIGN KEY (`DEPARTMENT_ID`) REFERENCES `departments` (`DEPARTMENT_ID`);

--
-- Các ràng buộc cho bảng `comment_task`
--
ALTER TABLE `comment_task`
  ADD CONSTRAINT `comment_task_ibfk_1` FOREIGN KEY (`TASK_ID`) REFERENCES `task` (`TASK_ID`),
  ADD CONSTRAINT `comment_task_ibfk_2` FOREIGN KEY (`USER_COMMENT_ID`) REFERENCES `staff` (`EMPLOYEE_ID`);

--
-- Các ràng buộc cho bảng `schedule`
--
ALTER TABLE `schedule`
  ADD CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`EMPLOYEE_ID`) REFERENCES `staff` (`EMPLOYEE_ID`);

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
