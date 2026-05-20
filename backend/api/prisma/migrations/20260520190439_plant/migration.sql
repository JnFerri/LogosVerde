/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `plants` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `name_UNIQUE` ON `plants`(`name`);
