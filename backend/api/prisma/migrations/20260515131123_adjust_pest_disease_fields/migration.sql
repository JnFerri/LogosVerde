/*
  Warnings:

  - You are about to drop the column `control_description` on the `pests_diseases` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `pests_diseases` DROP COLUMN `control_description`,
    ADD COLUMN `controlDescription` TEXT NULL;
