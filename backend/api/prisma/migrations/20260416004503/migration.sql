-- DropForeignKey
ALTER TABLE `planting_areas` DROP FOREIGN KEY `planting_areas_project_id_fkey`;

-- AddForeignKey
ALTER TABLE `planting_areas` ADD CONSTRAINT `planting_areas_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
