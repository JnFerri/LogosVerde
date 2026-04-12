-- 1. Drop FK
ALTER TABLE `planting_areas`
DROP FOREIGN KEY `planting_areas_project_id_fkey`;

-- 2. Alter column
ALTER TABLE `projects`
MODIFY `id` INT NOT NULL AUTO_INCREMENT;

-- 3. Recreate FK
ALTER TABLE `planting_areas`
ADD CONSTRAINT `planting_areas_project_id_fkey`
FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`);