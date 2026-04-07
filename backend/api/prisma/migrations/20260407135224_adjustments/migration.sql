/*
  Warnings:

  - Made the column `name` on table `projects` required. This step will fail if there are existing NULL values in that column.
  - Made the column `expires_at` on table `user_refresh_tokens` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `projects` MODIFY `name` VARCHAR(180) NOT NULL;

-- AlterTable
ALTER TABLE `user_refresh_tokens` ADD COLUMN `replaced_by` VARCHAR(500) NULL,
    ADD COLUMN `revoked_at` DATETIME(0) NULL,
    MODIFY `expires_at` DATETIME(0) NOT NULL;
