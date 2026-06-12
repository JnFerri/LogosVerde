/*
  Warnings:

  - Made the column `plant_icon_name` on table `plants` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `plants` MODIFY `plant_icon_name` VARCHAR(180) NOT NULL;
