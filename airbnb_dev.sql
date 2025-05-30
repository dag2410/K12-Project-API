/*
 Navicat Premium Dump SQL

 Source Server         : localhost_3306
 Source Server Type    : MariaDB
 Source Server Version : 100432 (10.4.32-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : airbnb_dev

 Target Server Type    : MariaDB
 Target Server Version : 100432 (10.4.32-MariaDB)
 File Encoding         : 65001

 Date: 30/05/2025 18:32:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `icon` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name_unique`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES (2, 'can ho gia re ', 'aaa', 'gia re', '2025-10-09 17:00:00', NULL);
INSERT INTO `categories` VALUES (3, 'can ho dat', 'jajaj', 'dat ', '2025-05-20 12:13:31', NULL);
INSERT INTO `categories` VALUES (4, 'can ho cho thue', 'aaaa', 'aaa', '2025-05-24 12:18:11', NULL);

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `post_id` bigint(20) UNSIGNED NULL DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NULL DEFAULT NULL,
  `content` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `post_id_fk`(`post_id`) USING BTREE,
  CONSTRAINT `post_id_fk` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comments
-- ----------------------------
INSERT INTO `comments` VALUES (1, 1, 1, '111111111', '2025-05-24 12:10:13', NULL);
INSERT INTO `comments` VALUES (8, 1, 2, 'noi dung22222222222222', NULL, NULL);
INSERT INTO `comments` VALUES (9, 1, 2, 'noi dung22222222222222', NULL, NULL);
INSERT INTO `comments` VALUES (10, 1, 1, '111111111', '2025-05-24 05:10:13', NULL);
INSERT INTO `comments` VALUES (11, 1, 1, '111111111', '2025-05-24 05:10:13', NULL);
INSERT INTO `comments` VALUES (12, 1, 1, '111111111', '2025-05-24 05:10:13', NULL);
INSERT INTO `comments` VALUES (13, 1, 1, '111111111', '2025-05-24 05:10:13', NULL);
INSERT INTO `comments` VALUES (14, 1, 1, '111111111', '2025-05-24 05:10:13', NULL);
INSERT INTO `comments` VALUES (15, 1, 1, '111111111', '2025-05-24 05:10:13', NULL);

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) UNSIGNED NULL DEFAULT NULL,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `slug` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `published_at` datetime NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `slug_unique`(`slug`) USING BTREE,
  INDEX `user_id_fk`(`user_id`) USING BTREE,
  CONSTRAINT `user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 216 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES (1, 1, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro laudantium voluptates excepturi esse ea sed ex provident ullam, recusandae aliquid temporibus quos, magnam at. Minus, eos commo', 'post-1', 'post-1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'post-1', '2025-05-24 02:07:33', NULL, NULL);
INSERT INTO `posts` VALUES (207, 1, 'hai dang doooo', 'post-2', 'post-1bbbbbbbbbbbbbbbbbbbb', 'post-1', '2025-05-24 02:07:41', NULL, NULL);
INSERT INTO `posts` VALUES (208, 1, 'duy daooooo', 'post-3', 'post-1cccccccccccccccccccccccccccccccccc', 'post-1', '2025-05-24 02:07:44', NULL, NULL);
INSERT INTO `posts` VALUES (209, 1, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro laudantium voluptates excepturi esse ea sed ex provident ullam, recusandae aliquid temporibus quos, magnam at. Minus, eos commo', 'post-4', 'post-1ddddddddddddddddddddddddddddddddddd', 'post-1', '2025-05-24 02:07:46', NULL, NULL);
INSERT INTO `posts` VALUES (210, NULL, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro laudantium voluptates excepturi esse ea sed ex provident ullam, recusandae aliquid temporibus quos, magnam at. Minus, eos commo', NULL, NULL, '', '2025-05-24 02:07:48', NULL, NULL);
INSERT INTO `posts` VALUES (211, NULL, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro laudantium voluptates excepturi esse ea sed ex provident ullam, recusandae aliquid temporibus quos, magnam at. Minus, eos commo', NULL, NULL, '', '2025-05-24 02:07:50', NULL, NULL);
INSERT INTO `posts` VALUES (212, NULL, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro laudantium voluptates excepturi esse ea sed ex provident ullam, recusandae aliquid temporibus quos, magnam at. Minus, eos commo', NULL, NULL, '', '2025-05-24 02:07:56', NULL, NULL);
INSERT INTO `posts` VALUES (213, NULL, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro laudantium voluptates excepturi esse ea sed ex provident ullam, recusandae aliquid temporibus quos, magnam at. Minus, eos commo', NULL, NULL, '', '2025-05-24 02:07:58', NULL, NULL);
INSERT INTO `posts` VALUES (214, NULL, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro laudantium voluptates excepturi esse ea sed ex provident ullam, recusandae aliquid temporibus quos, magnam at. Minus, eos commo', NULL, NULL, '', '2025-05-24 02:08:01', NULL, NULL);
INSERT INTO `posts` VALUES (215, 1, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro laudantium voluptates excepturi esse ea sed ex provident ullam, recusandae aliquid temporibus quos, magnam at. Minus, eos commo', 'post-11234567', 'post-1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'post-1', '2025-05-23 19:07:33', NULL, NULL);

-- ----------------------------
-- Table structure for rooms
-- ----------------------------
DROP TABLE IF EXISTS `rooms`;
CREATE TABLE `rooms`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_id` bigint(20) UNSIGNED NULL DEFAULT NULL,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `location` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `bedrooms` int(11) NULL DEFAULT NULL,
  `amenities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `rating` decimal(2, 1) NULL DEFAULT NULL,
  `reviews_count` int(11) NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime NULL DEFAULT NULL,
  `image` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `category_id_fk`(`category_id`) USING BTREE,
  CONSTRAINT `category_id_fk` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rooms
-- ----------------------------
INSERT INTO `rooms` VALUES (1, 2, 'can ho hcm', 1230000.00, 'hcm', 4, 'dieu hoa, may giat, khong chung chu', 3.0, 5, '2025-05-20 00:00:00', '2025-05-20 00:00:00', NULL);
INSERT INTO `rooms` VALUES (3, 2, 'can ho hanoi', 1230000.00, 'hcm', 4, 'dieu hoa, may giat, khong chung chu', 3.0, 5, '2025-05-20 00:00:00', '2025-05-30 00:00:00', NULL);
INSERT INTO `rooms` VALUES (5, 2, 'can ho ha noi', 1230000.00, 'hanoi', 4, 'dieu hoa, may giat, khong chung chu', 3.0, 5, '2025-04-19 17:00:00', '2025-05-19 17:00:00', NULL);
INSERT INTO `rooms` VALUES (6, 2, 'can ho ha noi', 1230000.00, 'hanoi', 4, 'dieu hoa, may giat, khong chung chu', 3.0, 5, '2025-04-19 17:00:00', '2025-05-19 17:00:00', NULL);
INSERT INTO `rooms` VALUES (7, 2, 'can ho ha noi', 1230000.00, 'hanoi', 4, 'dieu hoa, may giat, khong chung chu', 3.0, 5, '2025-04-19 17:00:00', '2025-05-19 17:00:00', NULL);
INSERT INTO `rooms` VALUES (8, 2, 'can ho ha noi', 1230000.00, 'hanoi', 4, 'dieu hoa, may giat, khong chung chu', 3.0, 5, '2025-04-19 17:00:00', '2025-05-19 17:00:00', NULL);
INSERT INTO `rooms` VALUES (9, 2, 'can ho ha noi', 1230000.00, 'hanoi', 4, 'dieu hoa, may giat, khong chung chu', 3.0, 5, '2025-04-19 17:00:00', '2025-05-19 17:00:00', NULL);
INSERT INTO `rooms` VALUES (10, 2, 'can ho ha noi', 1230000.00, 'hanoi', 4, 'dieu hoa, may giat, khong chung chu', 3.0, 5, '2025-04-19 17:00:00', '2025-05-19 17:00:00', NULL);
INSERT INTO `rooms` VALUES (11, 2, 'can ho ha noi', 1230000.00, 'hanoi', 4, 'dieu hoa, may giat, khong chung chu', 3.0, 5, '2025-04-19 17:00:00', '2025-05-19 17:00:00', NULL);
INSERT INTO `rooms` VALUES (12, 2, 'can ho ha noi', 1230000.00, 'hanoi', 4, 'dieu hoa, may giat, khong chung chu', 3.0, 5, '2025-04-19 17:00:00', '2025-05-19 17:00:00', NULL);

-- ----------------------------
-- Table structure for sessions
-- ----------------------------
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `expires_at` datetime NOT NULL,
  `created_at` datetime NULL DEFAULT current_timestamp(),
  `updated_at` datetime NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `sessions_expires_at_idx`(`expires_at`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sessions
-- ----------------------------
INSERT INTO `sessions` VALUES ('6d84ad5e-2ca1-4abf-a9ed-35d6aa00c45d', NULL, '0000-00-00 00:00:00', '2025-05-30 02:10:27', '2025-05-30 02:10:27');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `username` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `birthday` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `avatar` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `gender` enum('male','female','other') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `phone` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `rel_status` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `bio` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `address` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `blocked_at` datetime NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT current_timestamp(),
  `updated_at` datetime NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  `role` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `status` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `email_unique`(`email`) USING BTREE,
  UNIQUE INDEX `phone_unique`(`phone`) USING BTREE,
  UNIQUE INDEX `username_unique`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 62 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'hai dang ', 'haidang@gmail.com', '123', 'haidang', '2004-10-24', NULL, 'male', '0397546472', 'single', NULL, 'Ha Noi', NULL, '2025-05-24 20:11:41', NULL, 'admin', 'active ');
INSERT INTO `users` VALUES (50, 'dinh nghe b', 'duongbach@gmail.com', '', 'duongnghe123123', '2004-10-24', NULL, NULL, '01234567891', NULL, NULL, '                  Thành Công Ba Đình Hà Nội\r\n        \r\n        \r\n        ', NULL, '2025-05-27 10:18:51', '2025-05-27 21:52:48', 'editor', 'inactive');
INSERT INTO `users` VALUES (55, 'duong bach', 'bach@gmail.com', '', 'bachd123', NULL, NULL, NULL, '02345678912', NULL, NULL, 'hanoi', NULL, '2025-05-28 08:18:10', '2025-05-28 19:21:17', 'editor', 'active');
INSERT INTO `users` VALUES (60, 'duong bao tram', 'tram@gmail.com', '12345678', 'tram123456', NULL, NULL, NULL, '02345672345', NULL, NULL, '            hanoi\r\n        \r\n        ', NULL, '2025-05-28 08:25:33', '2025-05-29 09:46:01', 'editor', 'active');
INSERT INTO `users` VALUES (61, 'dung 123', 'dung@gmail.com', '12345678', 'dung123', NULL, NULL, NULL, '0988776475', NULL, NULL, 'Thành Công Ba Đình Hà Nội', NULL, '2025-05-28 08:36:07', '2025-05-30 08:32:17', 'viewer', 'inactive');

SET FOREIGN_KEY_CHECKS = 1;
