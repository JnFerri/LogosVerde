-- AlterTable
ALTER TABLE `planting_areas` ADD COLUMN `length` DECIMAL(10, 2) NULL,
    ADD COLUMN `width` DECIMAL(10, 2) NULL;

-- CreateTable
CREATE TABLE `planting_area_layout_item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plantingAreaPlantId` INTEGER NOT NULL,
    `x` DECIMAL(8, 2) NOT NULL,
    `y` DECIMAL(8, 2) NOT NULL,
    `width` DECIMAL(8, 2) NULL,
    `height` DECIMAL(8, 2) NULL,

    INDEX `planting_area_plant_id_idx`(`plantingAreaPlantId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `planting_area_layout_item` ADD CONSTRAINT `planting_area_layout_item_plantingAreaPlantId_fkey` FOREIGN KEY (`plantingAreaPlantId`) REFERENCES `planting_area_plants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
