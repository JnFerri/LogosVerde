/*
  Warnings:

  - You are about to drop the column `fertilizing_id` on the `planting_area_plants` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `planting_area_plants` DROP FOREIGN KEY `planting_area_plants_fertilizing_id_fkey`;

-- DropIndex
DROP INDEX `adubation_id_idx` ON `planting_area_plants`;

-- AlterTable
ALTER TABLE `planting_area_plants` DROP COLUMN `fertilizing_id`;
