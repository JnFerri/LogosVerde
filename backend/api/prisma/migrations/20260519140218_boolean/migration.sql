-- AlterTable
ALTER TABLE `planting_area_plants` MODIFY `is_planted` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `is_harvested` BOOLEAN NOT NULL DEFAULT false;
