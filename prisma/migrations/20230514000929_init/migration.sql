/*
  Warnings:

  - You are about to drop the column `username` on the `adminaccount` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `teacher` table. All the data in the column will be lost.
  - Added the required column `user_name` to the `Adminaccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `adminaccount` DROP COLUMN `username`,
    ADD COLUMN `user_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `teacher` DROP COLUMN `username`,
    ADD COLUMN `user_name` VARCHAR(191) NOT NULL;
