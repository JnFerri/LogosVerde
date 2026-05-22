/*
  Warnings:

  - You are about to drop the column `harverst_unit_measurement_id` on the `plants` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `plants` DROP FOREIGN KEY `plants_harverst_unit_measurement_id_fkey`;

-- DropIndex
DROP INDEX `harverst_unit_measurement_id_idx` ON `plants`;

-- AlterTable
ALTER TABLE `plants` DROP COLUMN `harverst_unit_measurement_id`,
    ADD COLUMN `harvest_unit_measurement_id` INTEGER NOT NULL DEFAULT 1;

-- CreateIndex
CREATE INDEX `harvest_unit_measurement_id_idx` ON `plants`(`harvest_unit_measurement_id`);

-- AddForeignKey
ALTER TABLE `plants` ADD CONSTRAINT `plants_harvest_unit_measurement_id_fkey` FOREIGN KEY (`harvest_unit_measurement_id`) REFERENCES `unit_measurements`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
