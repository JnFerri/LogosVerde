/*
  Warnings:

  - You are about to drop the column `harverst_unit_measurement_id` on the `planting_area_plants` table. All the data in the column will be lost.
  - You are about to drop the column `planting_unit_measurement_id` on the `planting_area_plants` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `planting_area_plants` DROP FOREIGN KEY `planting_area_plants_harverst_unit_measurement_id_fkey`;

-- DropForeignKey
ALTER TABLE `planting_area_plants` DROP FOREIGN KEY `planting_area_plants_planting_unit_measurement_id_fkey`;

-- DropIndex
DROP INDEX `harverst_unit_measurement_id_idx` ON `planting_area_plants`;

-- DropIndex
DROP INDEX `planting_unit_measurement_id_idx` ON `planting_area_plants`;

-- AlterTable
ALTER TABLE `planting_area_plants` DROP COLUMN `harverst_unit_measurement_id`,
    DROP COLUMN `planting_unit_measurement_id`;

-- AlterTable
ALTER TABLE `plants` ADD COLUMN `harverst_unit_measurement_id` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `planting_unit_measurement_id` INTEGER NOT NULL DEFAULT 1;

-- CreateIndex
CREATE INDEX `harverst_unit_measurement_id_idx` ON `plants`(`harverst_unit_measurement_id`);

-- CreateIndex
CREATE INDEX `planting_unit_measurement_id_idx` ON `plants`(`planting_unit_measurement_id`);

-- AddForeignKey
ALTER TABLE `plants` ADD CONSTRAINT `plants_harverst_unit_measurement_id_fkey` FOREIGN KEY (`harverst_unit_measurement_id`) REFERENCES `unit_measurements`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plants` ADD CONSTRAINT `plants_planting_unit_measurement_id_fkey` FOREIGN KEY (`planting_unit_measurement_id`) REFERENCES `unit_measurements`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
