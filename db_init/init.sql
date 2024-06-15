create database if not exists tech44;
use tech44;

CREATE TABLE `user` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP,
  `updated_at` TIMESTAMP
);

CREATE TABLE `image` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `url` TEXT NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP,
  `updated_at` TIMESTAMP
);