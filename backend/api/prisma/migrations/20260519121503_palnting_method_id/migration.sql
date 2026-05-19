/*
  Warnings:

  - Made the column `planting_method_id` on table `planting_area_plants` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `planting_area_plants` MODIFY `planting_method_id` INTEGER NOT NULL;
