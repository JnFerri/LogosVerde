-- CreateTable
CREATE TABLE `months` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `month_number` INTEGER NOT NULL,
    `month_name` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `monthNumber_UNIQUE`(`month_number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pests_diseases` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(180) NOT NULL,
    `description` TEXT NULL,
    `control_description` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plant_intercropping` (
    `plant_id` INTEGER NOT NULL,
    `plant_intercropping_id` INTEGER NOT NULL,

    INDEX `plant_intercropping_id_idx`(`plant_intercropping_id`),
    PRIMARY KEY (`plant_id`, `plant_intercropping_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plant_pest_diseases` (
    `plant_id` INTEGER NOT NULL,
    `pest_diseases_id` INTEGER NOT NULL,

    PRIMARY KEY (`plant_id`, `pest_diseases_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plant_planting_months` (
    `plant_id` INTEGER NOT NULL,
    `month_id` INTEGER NOT NULL,

    INDEX `month_id_idx`(`month_id`),
    PRIMARY KEY (`plant_id`, `month_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plant_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(80) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `planting_area_fertilizing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` TEXT NOT NULL,
    `planting_area_id` INTEGER NOT NULL,
    `fertilizing_date` DATE NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `planting_area_id_idx`(`planting_area_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `planting_area_plants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `planting_area_id` INTEGER NOT NULL,
    `plant_id` INTEGER NOT NULL,
    `planting_method_id` INTEGER NULL,
    `is_planted` TINYINT NOT NULL DEFAULT 0,
    `is_harvested` TINYINT NOT NULL DEFAULT 0,
    `planting_date` DATE NULL,
    `harvest_date` DATE NULL,
    `planting_quantity` INTEGER NULL,
    `harvest_quantity` DECIMAL(5, 2) NULL,
    `harverst_unit_measurement_id` INTEGER NOT NULL DEFAULT 1,
    `planting_unit_measurement_id` INTEGER NOT NULL DEFAULT 1,
    `fertilizing_id` INTEGER NULL,

    INDEX `adubation_id_idx`(`fertilizing_id`),
    INDEX `harverst_unit_measurement_id_idx`(`harverst_unit_measurement_id`),
    INDEX `plant_id_idx`(`plant_id`),
    INDEX `planting_area_id_idx`(`planting_area_id`),
    INDEX `planting_unit_measurement_id_idx`(`planting_unit_measurement_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `planting_areas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(120) NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `sunshine_hours` INTEGER NULL,
    `project_id` INTEGER NOT NULL,

    INDEX `PROJECT_ID_idx`(`project_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(180) NOT NULL,
    `scientific_name` VARCHAR(180) NOT NULL,
    `harvest_min_days` INTEGER NOT NULL,
    `harvest_max_days` INTEGER NOT NULL,
    `sunshine_min_hours` INTEGER NOT NULL,
    `sunshine_max_hours` INTEGER NOT NULL,
    `plant_type_id` INTEGER NOT NULL,
    `germination_min_days` INTEGER NOT NULL,
    `germination_max_days` INTEGER NOT NULL,
    `ph_min` DECIMAL(2, 1) NOT NULL,
    `ph_max` DECIMAL(2, 1) NOT NULL,
    `planting_distance_plants` INTEGER NOT NULL,
    `management_description` TEXT NULL,
    `planting_description` TEXT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `scientific_name_UNIQUE`(`scientific_name`),
    INDEX `plant_type_id_idx`(`plant_type_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `projects` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(180) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `unit_measurements` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(80) NOT NULL,
    `abbreviation` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_refresh_tokens` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `token` VARCHAR(500) NOT NULL,
    `is_active` TINYINT NOT NULL DEFAULT 1,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `expires_at` DATETIME(0) NULL,

    UNIQUE INDEX `user_id_UNIQUE`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(120) NOT NULL,
    `email` VARCHAR(180) NOT NULL,
    `password` VARCHAR(180) NOT NULL,
    `is_active` TINYINT NOT NULL DEFAULT 1,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `name_UNIQUE`(`name`),
    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `plant_intercropping` ADD CONSTRAINT `plant_intercropping_plant_id_fkey` FOREIGN KEY (`plant_id`) REFERENCES `plants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plant_intercropping` ADD CONSTRAINT `plant_intercropping_plant_intercropping_id_fkey` FOREIGN KEY (`plant_intercropping_id`) REFERENCES `plants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plant_pest_diseases` ADD CONSTRAINT `plant_pest_diseases_plant_id_fkey` FOREIGN KEY (`plant_id`) REFERENCES `plants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plant_pest_diseases` ADD CONSTRAINT `plant_pest_diseases_pest_diseases_id_fkey` FOREIGN KEY (`pest_diseases_id`) REFERENCES `pests_diseases`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plant_planting_months` ADD CONSTRAINT `plant_planting_months_month_id_fkey` FOREIGN KEY (`month_id`) REFERENCES `months`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plant_planting_months` ADD CONSTRAINT `plant_planting_months_plant_id_fkey` FOREIGN KEY (`plant_id`) REFERENCES `plants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `planting_area_fertilizing` ADD CONSTRAINT `planting_area_fertilizing_planting_area_id_fkey` FOREIGN KEY (`planting_area_id`) REFERENCES `planting_areas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `planting_area_plants` ADD CONSTRAINT `planting_area_plants_fertilizing_id_fkey` FOREIGN KEY (`fertilizing_id`) REFERENCES `planting_area_fertilizing`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `planting_area_plants` ADD CONSTRAINT `planting_area_plants_harverst_unit_measurement_id_fkey` FOREIGN KEY (`harverst_unit_measurement_id`) REFERENCES `unit_measurements`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `planting_area_plants` ADD CONSTRAINT `planting_area_plants_plant_id_fkey` FOREIGN KEY (`plant_id`) REFERENCES `plants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `planting_area_plants` ADD CONSTRAINT `planting_area_plants_planting_area_id_fkey` FOREIGN KEY (`planting_area_id`) REFERENCES `planting_areas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `planting_area_plants` ADD CONSTRAINT `planting_area_plants_planting_unit_measurement_id_fkey` FOREIGN KEY (`planting_unit_measurement_id`) REFERENCES `unit_measurements`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `planting_areas` ADD CONSTRAINT `planting_areas_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plants` ADD CONSTRAINT `plants_plant_type_id_fkey` FOREIGN KEY (`plant_type_id`) REFERENCES `plant_types`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_refresh_tokens` ADD CONSTRAINT `user_refresh_tokens_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
