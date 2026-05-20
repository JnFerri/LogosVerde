/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `user_refresh_tokens` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `token_UNIQUE` ON `user_refresh_tokens`(`token`);
