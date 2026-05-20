/*
  Warnings:

  - You are about to drop the column `replaced_by` on the `user_refresh_tokens` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user_refresh_tokens` DROP COLUMN `replaced_by`;
